import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const Blog = ({ data }) => {
  return (
    <Layout title="Blog">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div
          key={node.id}
          style={{
            border: "2px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <div>{node.frontmatter.title}</div>
          <div>{node.frontmatter.date}</div>
          <div>{node.excerpt}</div>
          <Link to={node.fields.slug}>View</Link>
        </div>
      ))}
    </Layout>
  );
};

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { ne: null } } }
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Blog;
export { query };
