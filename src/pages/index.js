import React from "react";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout title="Home">
    <p>
      This starter was created by following the{" "}
      <a
        href="https://v2.gatsbyjs.com/docs/tutorial/"
        target="_blank"
        rel="noreferrer"
      >
        Gatsby v2
      </a>{" "}
      tutorial with a few adjustments. It has the following features that I
      typically need out of the box:
    </p>
    <ul>
      <li>Headers</li>
      <li>Layout</li>
      <li>SEO</li>
      <li>Content Sourcing from markdown (blogs)</li>
      <li>Access to images from markdown frontmatter</li>
      <li>Markdown code formatting</li>
    </ul>
  </Layout>
);

export default IndexPage;
