import {useEffect, useState} from 'react';
import tw from "tailwind-styled-components";
import useSelectCoins from '../hooks/useSelectCoins';
import { fiatCoins } from '../data/fiatCoins'; 

const InputSubmit = tw.input`
    font-bold
    py-2
    mt-5
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
    w-full
`

const Form = () => {

    const [cryptos, setCryptos] = useState([]);
    const [fiatCoin, SelectFiatCoins] = useSelectCoins('Select your Fiat Coin',fiatCoins);
    const [crypto, SelectCryptoCoins] = useSelectCoins('Select your Crypto',cryptos);

    useEffect(()=>{
        const getData = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const res = await fetch(url);
            const resData  = await res.json();
            const arrayData = resData.Data.map(cr =>{
                const obj = {
                    id: cr.CoinInfo.Name,
                    name: cr.CoinInfo.FullName
                }
                return obj;
            });
            setCryptos(arrayData);          
        }
        getData();
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('en handleSubmit');
    }
    
  return (
    <form
        onSubmit={handleSubmit}>
        <SelectFiatCoins />
        <SelectCryptoCoins />
        <InputSubmit  type='submit' value='Check Price' />
    </form>
  )
}

export default Form