import { graphql, Link } from "gatsby";
import React from "react";
import styles from "./home.module.css";


export default function HomeTemplate({ data }) {
  const {
    body,
    frontmatter
  } = data.mdx

  return (
    <section className={styles.sectionBlurbs}>
      <h1>{frontmatter.blurbs.heading}</h1>
      <div>
        {frontmatter.blurbs.items.map(item => (
          <div className={styles.blurb}>
            <h3>{item.title}</h3>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
      <div>
        <Link to="/faq" className={styles.button}>Learn more</Link>
      </div>
    </section>
  )
}

export const query = graphql`
  query HomeTemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
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
