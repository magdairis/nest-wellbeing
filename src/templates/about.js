import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import styles from "./about.module.css";
import MDX from "../components/mdx";
import useInterval from "../hooks/useInterval";
import { AnimatePresence, motion } from "framer-motion";

const motionProps = {
  initial: { x: -1000, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 1000, opacity: 0 },
  transition: {
    x: { type: "spring", stiffness: 300, damping: 200 },
    opacity: { duration: 0.2 }
  }
};

export default function AboutTemplate({ data }) {
  const {
    body,
    frontmatter
  } = data.mdx

  let testimonials = frontmatter.testimonials
  const [index, setIndex] = useState(0)

  useInterval(() => {
    if (index === testimonials.length - 1) {
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }
    console.log(testimonials[index]);

  }, 6000)

  return (
    <>
      <section className={styles.about}>
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.name}</h3>
        <div className={styles.paragraph}>
          <MDX>{frontmatter.about}</MDX>
        </div>
      </section>
      <section className={styles.carousel}>
        <div>
          <AnimatePresence>
            <motion.div className={styles.testimonial} key={index} {...motionProps}>
              <h2>{testimonials[index]}</h2>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query AboutTemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        name
        about 
        testimonials 
      }
    }
  }
`