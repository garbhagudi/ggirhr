import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Head from "next/head";
import { throttledFetch } from "lib/throttle";
import CourseCta from "sections/courses/CourseCta";
import FellowshipBanner from "sections/courses/FellowshipBanner";
import CourseStats from "sections/courses/CourseStats";
import CourseDetails from "sections/courses/CourseDetails";
import CourseContent from "sections/courses/CourseContent";
import KeyBenefits from "sections/courses/KeyBenefits";
import Eligibility from "sections/courses/Eligibility";
import Pedagogy from "sections/courses/Pedagogy";
import CourseFaq, { faqPageJsonLd } from "sections/courses/CourseFaq";
import StudentVoices from "sections/courses/StudentVoices";
import InfoSection, { InfoItem } from "sections/courses/InfoSection";

const SECTION_FRAGMENT = `
  fragment SectionFields on Section {
    order
    heading
    content {
      raw
    }
  }
`;

const SECTION_FIELDS = `
  courseDetails { ...SectionFields }
  courseContent { ...SectionFields }
  eligibility { ...SectionFields }
  benefits { ...SectionFields }
  pedagogy { ...SectionFields }
`;

const hasText = (node: any): boolean =>
  !!node?.text?.trim() || (node?.children ?? []).some(hasText);

const withoutEmptyBlocks = (course: any) => {
  for (const key of ["courseDetails", "courseContent", "eligibility", "benefits", "pedagogy"]) {
    const raw = course?.[key]?.content?.raw;
    if (raw?.children) raw.children = raw.children.filter(hasText);
  }
  return course;
};


const orderOf = (value: unknown) =>
  Number.isFinite(value) ? (value as number) : Infinity;

const orderedSections = (course: any) => {
  const extras: InfoItem[] = Array.isArray(course?.description) ? course.description : [];
  const sections: { order: number; node: React.ReactNode }[] = [
    { order: orderOf(course?.courseDetails?.order), node: <CourseDetails key="courseDetails" course={course} /> },
    { order: orderOf(course?.courseContent?.order), node: <CourseContent key="courseContent" section={course?.courseContent} /> },
    { order: orderOf(course?.eligibility?.order), node: <Eligibility key="eligibility" section={course?.eligibility} /> },
    { order: orderOf(course?.benefits?.order), node: <KeyBenefits key="benefits" section={course?.benefits} /> },
    { order: orderOf(course?.pedagogy?.order), node: <Pedagogy key="pedagogy" section={course?.pedagogy} /> },
    ...extras.map((item, i) => ({
      order: orderOf(item?.order),
      node: <InfoSection key={`info-${i}`} item={item} />,
    })),
    // FAQ has no order field yet, so it stays after the ordered sections.
    { order: Infinity, node: <CourseFaq key="faq" faqJson={course?.faqJson} /> },
  ];
  return sections.sort((a, b) => a.order - b.order || 0).map((s) => s.node);
};

const CoursePage = ({ course, professionals }) => {
  const title = course?.metaTitle || course?.title;
  const description =
    course?.metaDescription?.slice(0, 180) ||
    course?.subTitle?.slice(0, 180) ||
    course?.description?.text?.slice(0, 180);

  function addCourseJsonLd() {
    if (!course?.courseJson) return { __html: "" };
    const jsonLD =
      typeof course.courseJson === "string"
        ? JSON.parse(course.courseJson)
        : course.courseJson;
    return {
      __html: JSON.stringify(jsonLD, null, 2),
    };
  }

  function addFAQJsonLd() {
    const jsonLD = faqPageJsonLd(course?.faqJson);
    if (!jsonLD) return { __html: "" };
    return {
      __html: JSON.stringify(jsonLD, null, 2),
    };
  }

  function addBreadcrumbsJsonLd() {
    return {
      __html: `{
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": "1",
              "name": "Home",
              "item": "https://www.ggirhr.com/"
            },
            {
              "@type": "ListItem",
              "position": "3",
              "name": "${course?.title}",
              "item": "https://www.ggirhr.com/courses/${course?.slug}"
            }
          ]
        }`,
    };
  }

  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`${title}`}</title>
        <meta name="title" content={`${title}`} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={
            course?.metaKeywords || "GGIRHR, courses, healthcare, education"
          }
        />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={`${title}`} />
        <meta property="og:site_name" content="GGIRHR" />
        <meta property="og:url" content="https://ggirhr.com" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={course?.courseImage?.url} />
        <meta property="og:image:secure_url" content={course?.courseImage?.url} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:type" content="image/jpeg" />
        {/* Twitter*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ggirhr" />
        <meta name="twitter:title" content={`${title}`} />
        <meta name="twitter:image" content={course?.courseImage?.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addCourseJsonLd()}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addBreadcrumbsJsonLd()}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addFAQJsonLd()}
        />
      </Head>
      <FellowshipBanner course={course} professionals={professionals} />
      <CourseStats course={course} />
      {orderedSections(course)}
      <StudentVoices />
      <CourseCta slug={course?.slug} />
    </div>
  );
};

export default CoursePage;
export const getStaticProps = async ({ params }: { params: any }) => {
  const url = process.env.ENDPOINT;

  if (!url || typeof url !== 'string' || !url.startsWith('http')) {
    console.error('ENDPOINT environment variable is not set or is invalid');
    return {
      notFound: true,
    };
  }

  // Create a GraphQL client
  let graphQLClient: GraphQLClient;
  try {
    graphQLClient = new GraphQLClient(url, {
      headers: {
        Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
      },
    });
  } catch (error) {
    console.error('Error creating GraphQL client:', error);
    return {
      notFound: true,
    };
  }

  const query = gql`
    query ($pageSlug: String!) {
      course(where: { slug: $pageSlug }) {
        id
        title
        slug
        objective {
          raw
          text
        }
        numberOfBatchesPerYear
        numberOfStudentIntakePerBatch
        duration
        qualification
        fees
        courseImage {
          url
        }
        description {
          raw
          text
        }
        metaDescription
        metaKeywords
        metaTitle
        faqJson
        courseJson
        videoId
        youtubeVideos
        ${SECTION_FIELDS}
      }
    }
    ${SECTION_FRAGMENT}
  `;

  const variables = {
    pageSlug: params.slug,
  };

  let professionals = [];
  try {
    const fetchTeachers = async () =>
      graphQLClient.request(gql`
        query {
          teachers(orderBy: order_ASC, first: 20) {
            id
            name
            image {
              url
            }
          }
        }
      `);
    const data = await throttledFetch(fetchTeachers);
    professionals = (data?.teachers || [])
      .filter((teacher) => teacher.image?.url)
      .slice(0, 4);
  } catch (error) {
    console.error('Error fetching teachers:', error);
  }

  const stagingQuery = gql`
    query ($pageSlug: String!) {
      stagingCourse(where: { slug: $pageSlug }) {
        id
        title
        subTitle
        slug
        numberOfBatchesPerYear
        numberOfStudentIntakePerBatch
        duration
        fees
        courseImage {
          url
        }
        description
        metaDescription
        metaKeywords
        metaTitle
        faqJson
        videoId
        youtubeVideos
        ${SECTION_FIELDS}
      }
    }
    ${SECTION_FRAGMENT}
  `;

  try {
    const fetchStagingCourse = async () =>
      graphQLClient.request(stagingQuery, variables);
    const data = await throttledFetch(fetchStagingCourse);
    if (data?.stagingCourse) {
      return {
        props: {
          course: withoutEmptyBlocks(data.stagingCourse),
          professionals,
        },
        revalidate: 180,
      };
    }
  } catch (error) {
    console.error('Error fetching staging course data:', error);
  }

  // Fetch the data with throttling
  let course = null;
  try {
    const fetchCourse = async () => graphQLClient.request(query, variables);
    const data = await throttledFetch(fetchCourse);
    course = data?.course;
  } catch (error: any) {
    // Check if error is about missing youtubeVideos field
    if (error?.response?.errors?.some((e: any) => e.message?.includes('youtubeVideos'))) {
      console.warn('youtubeVideos field not found in Course model. Please add it to Hygraph.');
      // Try fetching without youtubeVideos field
      const queryWithoutVideos = gql`
        query ($pageSlug: String!) {
          course(where: { slug: $pageSlug }) {
            id
            title
            slug
            objective {
              raw
              text
            }
            numberOfBatchesPerYear
            numberOfStudentIntakePerBatch
            duration
            qualification
            fees
            courseImage {
              url
            }
            description {
              raw
              text
            }
            metaDescription
            metaKeywords
            metaTitle
            faqJson
            courseJson
            videoId
            ${SECTION_FIELDS}
          }
        }
        ${SECTION_FRAGMENT}
      `;
      try {
        const fetchCourseWithoutVideos = async () => graphQLClient.request(queryWithoutVideos, variables);
        const data = await throttledFetch(fetchCourseWithoutVideos);
        course = data?.course;
        // Set youtubeVideos to empty array if field doesn't exist
        if (course) {
          course.youtubeVideos = [];
        }
      } catch (retryError) {
        console.error('Error fetching course data:', retryError);
        return {
          notFound: true,
        };
      }
    } else {
      console.error('Error fetching course data:', error);
      return {
        notFound: true,
      };
    }
  }

  if (!course) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      course: withoutEmptyBlocks(course),
      professionals,
    },
    revalidate: 180, // ISR: Regenerate the page every 3 minutes
  };
};

export const getStaticPaths = async () => {
  const url = process.env.ENDPOINT;

  if (!url || typeof url !== 'string' || !url.startsWith('http')) {
    console.error('ENDPOINT environment variable is not set or is invalid');
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  // Create a GraphQL client
  let graphQLClient: GraphQLClient;
  try {
    graphQLClient = new GraphQLClient(url, {
      headers: {
        Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
      },
    });
  } catch (error) {
    console.error('Error creating GraphQL client:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  const query = gql`
    query {
      courses {
        slug
      }
    }
  `;

  // Fetch all slugs with throttling
  let courses = [];
  try {
    const fetchCourses = async () => graphQLClient.request(query);
    const data = await throttledFetch(fetchCourses);
    courses = data?.courses || [];
  } catch (error) {
    console.error('Error fetching courses:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  let stagingCourses = [];
  try {
    const fetchStagingCourses = async () =>
      graphQLClient.request(gql`
        query {
          stagingCourses {
            slug
          }
        }
      `);
    const data = await throttledFetch(fetchStagingCourses);
    stagingCourses = data?.stagingCourses || [];
  } catch (error) {
    console.error('Error fetching staging courses:', error);
  }

  const slugs = new Set(
    [...courses, ...stagingCourses]
      .map((course: { slug?: string }) => course.slug)
      .filter(Boolean)
  );
  const paths = Array.from(slugs).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: 'blocking', // Pages not generated at build time will be server-rendered
  };
};
