import { useEffect, useState } from 'react';
import tw from "tailwind-styled-components"
import Header from './Components/Header';
import Form from './Components/Form';
import PriceDisplay from './Components/PriceDisplay';

const Container = tw.div `
  flex
  items-center
  justify-center
  flex-col
  w-90
  grid-cols-1
  mt-15
  pt-10
  mx-auto
`


function App() {
  const [coins, setCoins] =  useState({})
  const [result, setResult] = useState({})

  useEffect(() => {
    if(Object.keys(coins).length>0){
      const getData = async () =>{
        const {fiatCoin,crypto} = coins;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${fiatCoin}`;
        const res = await fetch(url);
        const resData  = await res.json();
        setResult(resData.DISPLAY[crypto][fiatCoin]);
      }
      getData();
    }
  }, [coins])
  
  return (
    <Container >
      <Header/>
      <Form setCoins={setCoins}/>
      {result.PRICE &&
      <PriceDisplay result={result} />}
    </Container>
    
  )
}

export default App
