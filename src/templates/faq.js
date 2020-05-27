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
        <h2>Baby Massage</h2>
        <div className={styles.questions}>
          {frontmatter.babyMassage.map(item => (
            <div>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
        <h2>Baby Yoga</h2>
        <div className={styles.questions}>
          {frontmatter.babyYoga.map(item => (
            <div>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
        <div className={styles.contact}>
          <div>
            <h2>{frontmatter.contact.heading}</h2>
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
        babyMassage {
          question
          answer
        }
        babyYoga {
          question
          answer
        }
        contact {
          heading
        }
      }
    }
  }
`