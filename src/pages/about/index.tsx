import React from "react";
import Banner from "sections/About/Banner";
import AboutUs from "sections/About/AboutUs";
import Alliances from "sections/About/Alliances";
import ResearchTeam from "sections/About/ResearchTeam";
import Values from "sections/About/Values";
import Cta from "sections/About/Cta";
import VisionMission from "sections/About/VisionMission";
import Leadership from "sections/About/Leadership";
import type { Leader } from "sections/About/Leadership";
import Faculty from "sections/About/Faculty";
import type { Teacher } from "sections/About/Faculty";
import Award from "sections/About/Award";
import graphcms from "lib/graphcms";
import Head from "next/head";

// Each of these is repeated across the primary, Open Graph and Twitter tags.
const PAGE_TITLE =
  "Reproductive Health & Research Institute | Top Infertility Training Centre in India";
const PAGE_DESCRIPTION =
  "Leading Reproductive Health Research Institute, among Top Infertility Training Organizations in India, offering best-in-class training at our Infertility Training Centre.";
const SHARE_IMAGE =
  "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegs19a01gx06pr749twdyd";

const IndexPage = ({
  leaders,
  teachers,
}: {
  leaders?: Leader[];
  teachers?: Teacher[];
}) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{PAGE_TITLE}</title>
        <meta name="title" content={PAGE_TITLE} />
        <meta name="description" content={PAGE_DESCRIPTION} />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:site_name" content="GGIRHR" />
        <meta property="og:url" content="https://ggirhr.com" />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={SHARE_IMAGE} />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ggirhr" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={SHARE_IMAGE} />
      </Head>
      <Banner />
      <AboutUs />
      <Alliances />
      <ResearchTeam />
      <Values />
      {/* <Cta /> */}
      <VisionMission />
      <Leadership leaders={leaders} />
      <Faculty teachers={teachers} />
      <Award />
    </div>
  );
};

export default IndexPage;

// The design's three-line teaser is all that is rendered, so `bio.text` is
// trimmed here rather than in the component: everything returned from
// getStaticProps is serialized into the page payload, and the full bios run
// past 2 KB each. `bio.text` carries its line breaks as literal newline
// sequences, so flatten them first or the teaser reads as fragments.
const BIO_PREVIEW_CHARS = 165;

const bioPreview = (text?: string) => {
  if (!text) return null;
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= BIO_PREVIEW_CHARS) return flat;
  const cut = flat.slice(0, BIO_PREVIEW_CHARS);
  // Break on a word boundary so the ellipsis never lands mid-word.
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()} …`;
};

export const getStaticProps = async () => {
  // Both models in one request: two root fields, one round trip, one
  // revalidate window. `orderBy: order_ASC` on teachers mirrors the homepage
  // query so the Faculty carousel runs in the same order on both pages.
  const { leaders = [], teachers = [] } = await graphcms.request(`
    query {
      leaders {
        id
        name
        slug
        designation
        image {
          url
        }
        bio {
          text
        }
      }
      teachers(orderBy: order_ASC) {
        id
        name
        slug
        designation
        image {
          url
        }
      }
    }
  `);

  return {
    props: {
      // A leader with no portrait would render an empty pink panel, so drop
      // them here the way the homepage filters the affiliation logos.
      leaders: leaders
        .filter((leader) => leader.image?.url)
        .map(({ id, name, slug, designation, image, bio }) => ({
          id,
          name,
          slug,
          // The live CMS value is "Chief Executive Officer " with a trailing
          // space. `null`, never `undefined` — Next rejects `undefined`
          // anywhere in the props tree.
          designation: designation?.trim() ?? null,
          image: { url: image.url },
          bioPreview: bioPreview(bio?.text),
        })),
      // Same filter for the same reason: the Faculty card renders the
      // portrait unguarded, so a teacher published without one would break
      // the section rather than degrade.
      teachers: teachers
        .filter((teacher) => teacher.image?.url)
        .map(({ id, name, slug, designation, image }) => ({
          id,
          name,
          slug,
          designation: designation?.trim() ?? null,
          image: { url: image.url },
        })),
    },
    // Matches the revalidate on /about/leadership, which reads the same model.
    revalidate: 180,
  };
};
