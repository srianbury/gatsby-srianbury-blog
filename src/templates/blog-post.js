import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => (
  <Layout title={data.markdownRemark.frontmatter.title}>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    {data.markdownRemark.frontmatter.banner && (
      <img
        src={data.markdownRemark.frontmatter.banner.publicURL}
        alt="banner"
        style={{
          maxWidth: "-webkit-fill-available",
        }}
      />
    )}
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
);

const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        banner {
          publicURL
        }
      }
    }
  }
`;

export default BlogPost;
export { query };
