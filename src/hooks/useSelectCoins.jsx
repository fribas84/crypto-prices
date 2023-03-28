import React from 'react'
import tw from "tailwind-styled-components";

const Label = tw.label`
    font-bold
    mt-2
    text-white
    flex
    center
`

const useSelectCoins = (label) => {

    const SelectCoins = () =>{

        return (<Label>{label}</Label>)
        
    }

    return [SelectCoins]
}

export default useSelectCoins