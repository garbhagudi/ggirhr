import React from "react";
import graphcms from "lib/graphcms";
import { useRouter } from "next/router";
import { RichText } from "@graphcms/rich-text-react-renderer";

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
