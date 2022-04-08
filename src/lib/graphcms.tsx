import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
  },
});

export default graphcms;
