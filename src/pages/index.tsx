import { gql, GraphQLClient } from "graphql-request";
import Head from "next/head";
import Hero from "sections/Home/Hero";
import AffiliationsAlumni from "sections/Home/AffiliationsAlumni";
import AboutUs from "sections/Home/AboutUs";
import WhyGgirhr from "sections/Home/WhyGgirhr";
import Courses from "sections/Home/Courses";
import Workshops from "sections/Home/Workshops";
import Voices from "sections/Home/Voices";
import Experts from "sections/Home/Experts";
import ResearchWing from "sections/Home/ResearchWing";
import Blogs from "sections/Home/Blogs";
import Journey from "sections/Home/Journey";
import EventAnnouncementDialog from "sections/Home/EventAnnouncementDialog";
import { HOME_FEATURE_IMAGE } from "sections/Home/assets";

const PAGE_TITLE =
  "GGIRHR | Best IVF & Infertility Training Institute in India";
const PAGE_DESCRIPTION =
  "GarbhaGudi Institute of Reproductive Health & Research is a platform launched by a team of renowned specialists interested in training medical professionals and science students in reproductive medicine and infertility.";

const HomePage = ({ homeData }) => (
  <div className="font-primary">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{PAGE_TITLE}</title>
      <meta
        name="title"
        content="GGIRHR | India's Best Fertility Training Institute"
      />
      <meta name="description" content={PAGE_DESCRIPTION} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:site_name" content="GGIRHR" />
      <meta property="og:url" content="https://ggirhr.com" />
      <meta property="og:description" content={PAGE_DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={HOME_FEATURE_IMAGE} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ggirhr" />
      <meta name="twitter:title" content={PAGE_TITLE} />
      <meta name="twitter:description" content={PAGE_DESCRIPTION} />
      <meta name="twitter:image" content={HOME_FEATURE_IMAGE} />
    </Head>

    <Hero alumniCountries={homeData?.alumniCountries} />
    <AffiliationsAlumni
      affiliations={homeData?.affiliations}
      alumniCountries={homeData?.alumniCountries}
    />
    <AboutUs />
    <WhyGgirhr />
    <Courses courses={homeData?.courses} />
    <Workshops workshops={homeData?.workshops} />
    <Experts teachers={homeData?.teachers} />
    <Voices />
    <ResearchWing />
    <Blogs blogs={homeData?.blogs} />
    <Journey />

    {homeData?.upcomingEvent && (
      <EventAnnouncementDialog event={homeData.upcomingEvent} />
    )}
  </div>
);

export default HomePage;

export const getServerSideProps = async () => {
  const graphQLClient = new GraphQLClient(process.env.ENDPOINT, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });

  const query = gql`
    query {
      teachers(orderBy: order_ASC) {
        name
        id
        qualification
        designation
        slug
        image {
          url
        }
      }
      courses(orderBy: createdAt_DESC, first: 6) {
        title
        slug
        id
        courseImage {
          url
        }
      }
      blogs(orderBy: publishedOn_DESC, first: 3) {
        id
        title
        slug
        publishedOn
        image {
          url
        }
        content {
          text
        }
      }
      events(orderBy: eventDateTime_DESC, first: 1) {
        id
        title
        slug
        eventDateTime
        link
        squareImage {
          url
        }
      }
      affilationalumni(orderBy: name_ASC, first: 100) {
        id
        name
        types
        image {
          url
        }
      }
      workshops(orderBy: order_ASC, first: 4) {
        id
        title
        subTitle
        slug
        image {
          url
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);

  // `affilationalumni` is one Hygraph model holding both the partner logos and the
  // alumni countries, told apart by its `types` field. Rest-destructure it out of the
  // payload rather than spreading `data` and blanking the key: the raw list is replaced
  // by the two partitioned lists below, and a key set to `undefined` would make Next
  // throw "Error serializing .homeData.affilationalumni" — it rejects `undefined`
  // anywhere in the props tree.
  const { affilationalumni = [], events = [], ...rest } = data;

  // `types` is a free-text String in Hygraph, not an enumeration, and the live entries
  // are spelled "Affilations" (one "i") / "Alumni". Match on a prefix so a corrected
  // spelling or a stray case/whitespace difference doesn't silently drop a whole row.
  const byType = (pattern) =>
    affilationalumni
      .filter(
        (item) => pattern.test((item.types ?? "").trim()) && item.image?.url,
      )
      .map(({ id, name, image }) => ({ id, name, image: { url: image.url } }));

  const homeData = {
    ...rest,
    affiliations: byType(/^affil/i),
    alumniCountries: byType(/^alumni/i),
    // The announcement dialog renders one event and needs its square image, so
    // resolve both here — `null` keeps the prop serializable when there is none.
    upcomingEvent: events.find((event) => event.squareImage?.url) ?? null,
    // Only a two-line teaser is rendered, so trim `content.text` here rather
    // than in the component — everything returned from getServerSideProps is
    // serialized into __NEXT_DATA__ on every request.
    blogs: data.blogs?.map(({ content, ...blog }) => ({
      ...blog,
      // `content.text` carries the article's line breaks as literal "\n"
      // sequences; flatten them so the teaser reads as one paragraph.
      excerpt:
        content?.text
          ?.replace(/\n/g, " ")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 180) ?? null,
    })),
  };

  return { props: { homeData } };
};
