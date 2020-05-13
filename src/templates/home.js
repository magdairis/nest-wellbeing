import { graphql, Link } from "gatsby";
import React from "react";
import styles from "./home.module.css";
import Img from "gatsby-image";


export default function HomeTemplate({ data }) {
  const {
    body,
    frontmatter
  } = data.mdx

  return (
    <>
      <section>
        <Img fluid={frontmatter.splash.image.childImageSharp.fluid} />
      </section>
      <section className={styles.section}>
        <h1>{frontmatter.blurbs.heading}</h1>
        <div className={styles.blurbs}>
          {frontmatter.blurbs.items.map(item => (
            <div>
              <h3>{item.title}</h3>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
        <div>
          <Link to="/faq" className={styles.button}>Learn more</Link>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query HomeTemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        splash {
          image {
            childImageSharp {
              fluid(maxWidth: 1080, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          headline
        }
        blurbs {
          heading
          items {
            title
            paragraph
          }
        }
      }
    }
  }
`
