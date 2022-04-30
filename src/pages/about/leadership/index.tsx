import graphcms from "lib/graphcms";
import Link from "next/link";
import Head from "next/head";

const Leadership = ({ leaders }) => {
  return (
    <div>
      <Head>
        <title>Leadership | GGIRHR</title>
      </Head>
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-heading text-center sm:text-left">
                Leadership <br />
                Team
              </h2>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                {leaders.map((person) => (
                  <Link
                    href={`/about/leadership/${person.slug}`}
                    passHref
                    key={person.id}
                  >
                    <li className="sm:py-8 cursor-pointer">
                      <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                        <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                          <img
                            className="object-cover shadow-lg rounded-lg"
                            src={person.image.url}
                            alt={person.name}
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <div className="space-y-4">
                            <div className="text-lg leading-6 font-medium space-y-1">
                              <h3>{person.name}</h3>
                              <p className="text-brandBlueDark1">
                                {person.designation}
                              </p>
                            </div>
                            <div className="text-lg">
                              <p className="text-gray-500">
                                {`${person.bio.text.slice(0, 240)}...`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;

export const getStaticProps = async () => {
  const { leaders } = await graphcms.request(`
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
    }
  `);

  return {
    props: {
      leaders,
    },
  };
};
