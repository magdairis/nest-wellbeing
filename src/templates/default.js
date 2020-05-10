import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Button from "../components/Button"
import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"

const shortcodes = { Link, Button }

export default function DefaultTemplate() {
  const data = useStaticQuery(
    graphql`
      query DefaultTemplateQUery($id: String) {
        mdx(id: { eq: $id }) {
          id
          body
          frontmatter {
            title
            items {
              mdx
            }
          }
        }
      }
    `
  )
  const {
    body,
    frontmatter: { title, items },
  } = data.mdx

  return (
    <MDXProvider components={shortcodes}>
      <h1>{title}</h1>
      {items && (
        <>
          <h2>Items from frontmatter. Each item contains MDX.</h2>
          <ul>
            {items.map(item => (
              <li key={item.mdx}>
                <MDXRenderer>{item.mdx}</MDXRenderer>
              </li>
            ))}
          </ul>
        </>
      )}
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  )
}
