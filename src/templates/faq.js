import { graphql, Link } from "gatsby"
import React from "react"
import styles from "./faq.module.css"
import { ButtonLink } from "../components/links"

export default function FaqTemplate({ data }) {
  const { body, frontmatter } = data.mdx

  return (
    <>
      <section className={styles.section}>
        <h1>{frontmatter.title}</h1>
        <div className={styles.title}>
          <h3>Baby Massage</h3>
        </div>
        <div className={styles.questions}>
          {frontmatter.babyMassage.map(item => (
            <div key={item.question}>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
        <div className={styles.title}>
          <h3>Baby Yoga</h3>
        </div>
        <div className={styles.questions}>
          {frontmatter.babyYoga.map(item => (
            <div key={item.question}>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
        <div className={styles.contact}>
          <div>
            <h3>{frontmatter.contact.heading}</h3>
          </div>
          <div>
            <ButtonLink to="/contact">Contact me</ButtonLink>
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
