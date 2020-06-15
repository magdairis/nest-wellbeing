import React from "react"
import styles from "./booking.module.css"
import { useForm } from "react-hook-form"

const Booking = () => {
  const { register, handleSubmit } = useForm()
  function onSubmit(formData) {
    fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" ref={register} name="lime" />
      <input type="submit" />
    </form>
  )
}

export default Booking
