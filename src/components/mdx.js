import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

const components = {
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
