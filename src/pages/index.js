import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Content from "../components/content";
import Img from "gatsby-image";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Anasayfa" />
      <Content
        title={<span>{data.allMarkdownRemark.totalCount} Adet Yazı</span>}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="flex mb-2">
            <div className="w-4/6 pr-2">
              <h3>
                <Link
                  to={`posts${node.fields.slug}`}
                  className="text-gray-900 font-bold text-lg fon-x hover:no-underline"
                >
                  {node.frontmatter.title}{" "}
                  <span>— {node.frontmatter.date}</span>
                </Link>
              </h3>
              <p>{node.excerpt}</p>
            </div>
            <div className="w-2/6 ">
              <Link to={`posts${node.fields.slug}`}>
                <Img
                  className="rounded"
                  fluid={{
                    ...node.frontmatter.image.childImageSharp.fluid,
                  }}
                />
              </Link>
            </div>
          </div>
        ))}
      </Content>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            image {
              childImageSharp {
                fluid(maxHeight: 100, maxWidth: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
