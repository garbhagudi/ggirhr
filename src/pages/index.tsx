import React from "react";
import { gql, GraphQLClient } from "graphql-request";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Home, Home_2 } from "sections/Home";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsive_team = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const IndexPage = ({ HomeData }) => {
  return (
    <div>
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
      >
        {HomeData.banners.map((items: any) => (
          <div className="" key={items?.id}>
            <a href={items?.url}>
              <img src={items?.image?.url} alt={items?.title} />
            </a>
          </div>
        ))}
      </Carousel>
      <Home />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-4xl font-heading text-gray-900">
            Check our awesome team members
          </h1>
        </div>
        <div className="gap-2">
          <Carousel
            responsive={responsive_team}
            ssr={true}
            autoPlaySpeed={5000}
            infinite={true}
          >
            {HomeData?.teachers?.map((item: any) => (
              <div
                className="w-full bg-white rounded-lg p-6 flex flex-col justify-center items-center"
                key={item?.id}
              >
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-64 w-64 lg:h-48 lg:w-48"
                    src={item?.image?.url}
                    alt={item?.name}
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg text-gray-700 font-bold mb-2">
                    {item?.name}
                  </p>
                  <p className=" text-brandBlue text-sm">
                    {item?.qualification}
                  </p>
                  <p className=" text-brandPink  text-sm">
                    {item?.designation}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <Home_2 />
    </div>
  );
};

export default IndexPage;

export const getServerSideProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    query {
      banners(orderBy: order_ASC) {
        id
        title
        url
        order
        image {
          url
        }
      }
      teachers {
        name
        id
        qualification
        designation
        slug
        image {
          url
        }
      }
    }
  `;
  const data = await graphQLClient.request(query);
  const HomeData = data;

  return {
    props: {
      HomeData,
    },
  };
};
