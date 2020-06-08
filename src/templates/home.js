import { graphql, Link } from "gatsby"
import React from "react"
import styles from "./home.module.css"
import Img from "gatsby-image"

export default function HomeTemplate({ data }) {
  const { body, frontmatter } = data.mdx

  return (
    <>
      <section className={styles.splash}>
        <div>
          <Img
            className={styles.bgImageWrapper}
            fluid={frontmatter.splash.image.childImageSharp.fluid}
          />
          <div className={styles.overlay} />
          <div className={styles.headline}>
            <div>
              <h2>{frontmatter.splash.headline}</h2>
              <button className={styles.button}>Book Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h1>{frontmatter.blurbs.heading}</h1>
        <div className={styles.blurbs}>
          {frontmatter.blurbs.items.map(item => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
        <div>
          <Link to="/faq" className={styles.button}>
            Learn more
          </Link>
        </div>
      </section>
      <section className={styles.testimonial}>
        <div>
          <h1>{frontmatter.testimonial.quote}</h1>
          <p>{frontmatter.testimonial.name}</p>
        </div>
      </section>
      <section>
        <Img
          className={styles.bgImageWrapper}
          fluid={frontmatter.hero.image.childImageSharp.fluid}
        />
      </section>
      <section className={styles.signup}>
        <div>
          <h3>{frontmatter.signup.heading}</h3>
        </div>
        <div>
          <Link to="/classes" className={styles.button}>
            See classes
          </Link>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query HomeTemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        splash {
          image {
            childImageSharp {
              fluid(maxWidth: 1080, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          headline
        }
        blurbs {
          heading
          items {
            title
            paragraph
          }
        }
        testimonial {
          quote
        }
        hero {
          image {
            childImageSharp {
              fluid(maxWidth: 1080, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        signup {
          heading
        }
      }
    }
  }
`
