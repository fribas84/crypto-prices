import React from 'react';
import tw from "tailwind-styled-components";
import useSelectCoins from '../hooks/useSelectCoins';

const InputSubmit = tw.input`
    font-bold
    py-2
    mt-1
    px-4
    rounded
    bg-blue-500
    text-white
    hover:bg-blue-700
    uppercase
    transition duration-500 ease-in-out
    transform hover:-translate-y-1 hover:scale-110
    cursor-pointer
    center
`

const Form = () => {
    const [SelectFiatCoins] = useSelectCoins('Select your Fiat coin');
    const [SelectCryptoCoins] = useSelectCoins('Select your Crypto');

    
  return (
    <form>
    
        <SelectFiatCoins />
        <SelectCryptoCoins />
        <InputSubmit  type='submit' value='Check Price' />
    </form>
  )
}

export default Form