import React from "react";
import { graphql } from "gatsby";
import styles from "./contact.module.css";
import MDX from "../components/mdx";

export default function ContactTemplate({ data }) {
  const {
    body,
    frontmatter
  } = data.mdx
  return (
    <div>
      {frontmatter.items.map(item => {
        return (
          <div>
            <div className={styles.icon} dangerouslySetInnerHTML={{
              __html: item.icon.childSvgoInline.inlineSVG
            }} />
            <h1>{item.title}</h1>
            <MDX>{item.mdx}</MDX>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query ContactTemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        items {
          icon {
            childSvgoInline {
              inlineSVG
            }
          }
          title
          mdx
        }
      }
    }
  }
`