import { graphql, Link } from "gatsby";
import React from "react";
import styles from "./about.module.css";
import MDX from "../components/mdx";


export default function AboutTemplate({ data }) {
  const {
    body,
    frontmatter
  } = data.mdx

  return (
    <>
      <section className={styles.section}>
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.name}</h3>
        <div className={styles.paragraph}>
          <MDX>{frontmatter.about}</MDX>
        </div>
      </section>
      <div className={styles.review}>
        <p>{frontmatter.testimonial.review}</p>
      </div>
    </>
  )
}

export const query = graphql`
  query AboutTemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        name
        about 
        testimonial {
          review
        }
      }
    }
  }
`