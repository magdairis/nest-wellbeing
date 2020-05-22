import { graphql, Link } from "gatsby";
import React from "react";
import styles from "./about.module.css";


export default function AboutTemplate({ data }) {
  const {
    body,
    frontmatter
  } = data.mdx

  return (
    <>
      <section>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.name}</h2>
      </section>
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
      }
    }
  }
`