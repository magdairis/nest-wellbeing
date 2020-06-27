import React from "react"
import { graphql } from "gatsby"
import styles from "./contact.module.css"
import MDX from "../components/mdx"
import SvgIconNest from "../components/SvgIconNest"
import SEO from "../components/seo"

export default function ContactTemplate({ data }) {
  const { body, frontmatter } = data.mdx
  return (
    <div className={styles.contact}>
      <SEO title="Contact" />
      <div className={styles.logo}>
        <SvgIconNest />
      </div>
      {frontmatter.items.map(item => {
        return (
          <div key={item.title} className={styles.item}>
            <div className={styles.iconContainer}>
              <div
                className={styles.icon}
                dangerouslySetInnerHTML={{
                  __html: item.icon.childSvgoInline.inlineSVG,
                }}
              />
            </div>
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
