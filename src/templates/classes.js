import { graphql, Link } from "gatsby";
import React from "react";
import styles from "./classes.module.css";
import cx from "classnames";
import Img from "gatsby-image";

export default function ClassesTemplate({ data }) {
  const {
    body,
    frontmatter
  } = data.mdx

  return (
    <div className={styles.root}>
      {frontmatter.cards.map(card => (
        <div className={styles.card}>
          <Img className={styles.cardImage} fluid={card.image.childImageSharp.fluid} />
          <div>
            <h3>{card.title}</h3>
            <p>{card.location}</p>
            <div className={cx(styles.date, "space-x-2")}>
              <h4>{card.day}</h4>
              <h4>{card.time}</h4>
            </div>
            <div className={styles.price}>
              <h3>{card.price}</h3>
              <h3>{card.duration}</h3>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export const query = graphql`
  query ClassesTemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        cards {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          location
          day
          time
          price
          duration
        }
      }
    }
  }
`