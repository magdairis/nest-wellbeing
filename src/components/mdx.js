import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { TextLink } from "./links"

const components = {
  a: TextLink,
}

const shortcodes = {}

const MDX = ({ children, ...props }) => {
  return (
    <MDXProvider components={components} shortcodes={shortcodes} {...props}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  )
}

export default MDX
