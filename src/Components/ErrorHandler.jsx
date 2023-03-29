import React from 'react'
import tw from "tailwind-styled-components";

const Error = tw.div`
  text-white
  text-center
  uppercase
  font-bold
  p-3 mb-3
  rounded-md
  bg-red-600
`

const ErrorHandler = ({errorText}) => {
  return (
    <Error>
      <p>{errorText}</p>
    </Error>
  )
}

export default ErrorHandler