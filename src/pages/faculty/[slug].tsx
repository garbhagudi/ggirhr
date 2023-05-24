import React from "react";
import graphcms from "lib/graphcms";
import { useRouter } from "next/router";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Head from "next/head";

const FacultyPage = ({ teacher }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="h-screen text-brandBlue flex items-center justify-center text-content animate-ping">
        Loading...
      </div>
    );
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`${teacher?.name} | GGIRHR`}</title>
        <meta name="title" content={`${teacher?.name} | GGIRHR`} />
        <meta name="description" content={teacher?.bio?.text.slice(0, 180)} />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content={`${teacher?.name} | GGIRHR`} />
        <meta property="og:site_name" content="GGIRHR" />
        <meta property="og:url" content="https://ggirhr.com" />
        <meta
          property="og:description"
          content={teacher?.bio?.text.slice(0, 180)}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={teacher?.image?.url} />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ggirhr" />
        <meta name="twitter:title" content={`${teacher?.name} | GGIRHR`} />
        <meta
          name="twitter:description"
          content={teacher?.bio?.text.slice(0, 180)}
        />
        <meta name="twitter:image" content={teacher?.image?.url} />
      </Head>
      <div className="bg-white py-0 sm:py-8">
        <div className="max-w-3xl mx-auto">
          <div className="w-full">
            <div className="w-full h-40 md:h-64 bg-cover bg-center md:rounded-t-3xl bg-[url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1651043881/GGIRHR/Images/Faculty_lv9rz1.jpg')] shadow-2xl blur-sm"></div>
            <div className="absolute -mt-16 md:-mt-28 ml-5">
              <div className="bg-gray-200 border h-32 w-32 md:h-52 md:w-52 rounded-full md:rounded-3xl shadow-2xl border-primary overflow-hidden">
                <img src={teacher?.image?.url} alt={teacher?.name} />
              </div>
            </div>
          </div>

          <div className="bg-primary border border-primary rounded-b-3xl p-5 pt-24 md:pt-32 flex flex-col">
            <div className="mb-1 text-2xl font-semibold font-heading pl-2">
              {teacher?.name}
            </div>
            <div className="mb-1 text-xl text-brandPink font-semibold pl-2">
              {" "}
              {teacher?.qualification}{" "}
            </div>
            <div className="mb-8 text-xl text-brandBlue font-semibold pl-2">
              {" "}
              {teacher?.designation}{" "}
            </div>
            <div className="mb-1">
              <RichText content={teacher?.bio?.raw?.children} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;

export const getStaticProps = async ({ params }) => {
  const { teacher } = await graphcms.request(
    `
      query ($slug: String!) {
        teacher (where: {slug: $slug}) {
          id
          name
          designation 
          slug
          bio {
            raw
            text
          }
          image {
            url
          }
          qualification
        }
      }
    `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      teacher,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { teachers } = await graphcms.request(
    `{
      teachers {
        slug
        name
      }
    }
    `
  );

  return {
    paths: teachers.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};
