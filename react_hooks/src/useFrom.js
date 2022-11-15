import { useState } from "react"

// custom hook to capture logic

export const useFrom = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  
  return [values, e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }]

}