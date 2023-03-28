import React from 'react'
import tw from "tailwind-styled-components"


const H1 = tw.h1 `
    text-5xl
    text-center
    md:w-2/3
    mx-auto
    text-white
    my-10
    
`

const Header = () => {
  return (
    <H1>Crypto Prices</H1>
  )
}

export default Header

