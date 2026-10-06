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
      workshopCourses: courses(first: 100) {
        title
        slug
        metaDescription
      }
    }
  `;

  const data = await graphQLClient.request(query);

  const {
    affilationalumni = [],
    events = [],
    workshopCourses = [],
    ...rest
  } = data;

  const normalize = (value) =>
    (value ?? "").trim().toLowerCase().replace(/\s+/g, " ");
  const findCourseForWorkshop = (workshop) => {
    const title = normalize(workshop.title);
    return (
      workshopCourses.find((course) => course.slug === workshop.slug) ??
      (title
        ? (workshopCourses.find((course) => normalize(course.title) === title) ??
          workshopCourses.find((course) =>
            normalize(course.title).startsWith(title),
          ))
        : undefined)
    );
  };

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
    upcomingEvent: events.find((event) => event.squareImage?.url) ?? null,
    workshops: data.workshops?.map((workshop) => {
      const course = findCourseForWorkshop(workshop);
      return {
        ...workshop,
        href: course ? `/courses/${course.slug}` : null,
        subTitle:
          course?.metaDescription?.trim() || workshop.subTitle?.trim() || null,
      };
    }),
    
    blogs: data.blogs?.map(({ content, ...blog }) => ({
      ...blog,
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
