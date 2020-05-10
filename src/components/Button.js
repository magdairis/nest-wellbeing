import React from "react"

const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-2 py-1 rounded-md shadow-md bg-teal-500 text-white"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
