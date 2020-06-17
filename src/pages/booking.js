import React from "react"
import styles from "./booking.module.css"
import { useForm } from "react-hook-form"
import { graphql } from "gatsby"
import { TextInput, Submit, Label } from "../components/inputs"

const Booking = ({ data }) => {
  const { register, handleSubmit } = useForm()
  let titles = data.mdx.frontmatter.cards.map(x => x.title)
  function onSubmit(formData) {
    fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    console.log(formData)
  }
  return (
    <>
      <pre>{JSON.stringify(titles, null, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <Label for="name">Name:</Label>
          <TextInput id="name" ref={register} name="name" />
        </div>
        <div>
          <Label for="email">Email:</Label>
          <TextInput id="email" ref={register} name="email" />
        </div>
        <div>
          <Label for="age">Baby's age:</Label>
          <TextInput id="age" ref={register} name="age" />
        </div>
        <Submit />
      </form>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    mdx(frontmatter: { templateKey: { eq: "classes" } }) {
      frontmatter {
        cards {
          title
        }
      }
    }
  }
`

export default Booking
