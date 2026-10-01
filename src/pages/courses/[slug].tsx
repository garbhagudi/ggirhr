import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Head from "next/head";
import { throttledFetch } from "lib/throttle";
import { usePathname } from "next/navigation";
import CourseCta from "sections/courses/CourseCta";
import FellowshipBanner from "sections/courses/FellowshipBanner";
import CourseStats from "sections/courses/CourseStats";
import CourseDetails from "sections/courses/CourseDetails";
import CourseContent from "sections/courses/CourseContent";
import KeyBenefits from "sections/courses/KeyBenefits";
import Eligibility from "sections/courses/Eligibility";
import Pedagogy from "sections/courses/Pedagogy";
import CourseFaq from "sections/courses/CourseFaq";
import StudentVoices from "sections/courses/StudentVoices";

const CoursePage = ({ course }) => {
  const courseSlug = usePathname();
  const isFellowship = courseSlug === "/courses/fellowship-in-clinical-embryology";

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
    if (!course?.faqJson) return { __html: "" };
    const jsonLD =
      typeof course.faqJson === "string"
        ? JSON.parse(course.faqJson)
        : course.faqJson;
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
        <title>{`${course?.metaTitle || course?.title} | GGIRHR`}</title>
        <meta
          name="title"
          content={`${course?.metaTitle || course?.title} | GGIRHR`}
        />
        <meta
          name="description"
          content={
            course?.metaDescription?.slice(0, 180) ||
            course?.description?.text.slice(0, 180)
          }
        />
        <meta
          name="keywords"
          content={
            course?.metaKeywords || "GGIRHR, courses, healthcare, education"
          }
        />
        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content={`${course?.metaTitle || course?.title} | GGIRHR`}
        />
        <meta property="og:site_name" content="GGIRHR" />
        <meta property="og:url" content="https://ggirhr.com" />
        <meta property="og:description" content={course?.metaDescription?.slice(0, 180) || course?.description?.text?.slice(0, 180)} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={course?.courseImage?.url} />
        <meta property="og:image:secure_url" content={course?.courseImage?.url} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:type" content="image/jpeg" />
        {/* Twitter*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ggirhr" />
        <meta
          name="twitter:title"
          content={`${course?.metaTitle || course?.title} | GGIRHR`}
        />
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
      <FellowshipBanner course={course} />
      <CourseStats course={course} />
      <CourseDetails course={course} />
      {isFellowship && <CourseContent />}
      {isFellowship && <Eligibility />}
      {isFellowship && <KeyBenefits />}
      {isFellowship && <Pedagogy />}
      <CourseFaq faqJson={course?.faqJson} />
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
      }
    }
  `;

  const variables = {
    pageSlug: params.slug,
  };

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
          }
        }
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
      course,
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

  const paths = courses.map((course: { slug: string }) => ({
    params: { slug: course.slug },
  }));

  return {
    paths,
    fallback: 'blocking', // Pages not generated at build time will be server-rendered
  };
};
