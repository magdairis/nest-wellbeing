import React from "react"
import { forwardRef } from "react"
import styles from "./inputs.module.css"

export const TextInput = forwardRef(
  ({ className = styles.textInput, ...props }, ref) => {
    return <input type="text" className={className} ref={ref} {...props} />
  }
)

export const Submit = forwardRef(
  ({ className = styles.submit, ...props }, ref) => (
    <input type="submit" className={className} ref={ref} {...props} />
  )
)

export const Label = ({ className = styles.label, ...props }) => {
  return <label className={className} {...props} />
}

export const CheckBox = forwardRef(
  ({ className = styles.checkBox, ...props }, ref) => {
    return <input type="checkbox" className={className} ref={ref} {...props} />
  }
)
