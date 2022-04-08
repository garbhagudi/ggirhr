import React from "react";
import graphcms from "lib/graphcms";
import Link from "next/link";

const Faculty = ({ teachers }) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-brandDark">
            Our Faculty
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teachers?.map((item) => (
            <Link key={item?.id} href={`/faculty/${item?.slug}`} passHref>
              <div className="w-full overflow-hidden flex flex-col justify-center items-center px-8 sm:px-0 cursor-pointer">
                <div className="w-full">
                  <img
                    className="object-cover h-[360px] w-full rounded-t-3xl"
                    src={item?.image?.url}
                    alt={item?.name}
                  />
                </div>
                <div className="text-center py-8 sm:py-6 w-full border-x-2 border-b-2 rounded-b-3xl">
                  <p className="text-xl text-brandDark font-bold mb-2">
                    {item?.name}
                  </p>
                  <p className="text-base text-brandBlue font-normal">
                    {item?.qualification}
                  </p>
                  <p className="text-base text-brandPink font-normal">
                    {item?.designation}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faculty;

export const getStaticProps = async () => {
  const { teachers } = await graphcms.request(
    `
      query{
        teachers {
          id
          name
          designation 
          slug
          image {
            url
          }
          qualification
        }
      }
    `
  );

  return {
    props: {
      teachers,
    },
  };
};
