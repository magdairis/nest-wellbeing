import { graphql, Link } from "gatsby";
import React from "react";
import styles from "./faq.module.css";

export default function FaqTemplate({ data }) {
  const {
    body,
    frontmatter
  } = data.mdx

  return (
    <>
      <section className={styles.section}>
        <h1>{frontmatter.title}</h1>
        <div className={styles.questions}>
          {frontmatter.main.items.map(item => (
            <div>
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
        <div className={styles.contact}>
          <div>
            <h3>{frontmatter.contact.heading}</h3>
          </div>
          <div>
            <Link to="/contact" className={styles.button}>Contact me</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query FaqTemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        main {
          items {
            question
            answer
          }
        }
        contact {
          heading
        }
      }
    }
  }
`