import React from "react";

const HomeTemplate = ({ frontmatter, children }) => {
  return (
    <pre>
      {JSON.stringify(frontmatter)}
    </pre>
  )
}

export default HomeTemplate
