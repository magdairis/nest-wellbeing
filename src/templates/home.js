import React from "react";

const HomeTemplate = ({ frontmatter, children }) => {
  return (
    <>
      <pre>
        {JSON.stringify(frontmatter, null, 2)}
      </pre>
    </>
  )
}

export default HomeTemplate
