import React from 'react';
import tw from "tailwind-styled-components";

const Div = tw.div`
font-bold
mt-2
text-white
block
justify-self-auto
text-lg 

`
const PriceDisplay = ({result}) => {
    const {PRICE, LASTUPDATE, HIGHDAY, LOWDAY, CHANGE24HOUR, TOTALVOLUME24H, IMAGEURL} = result;
  return (
    <Div>
        <p>Current price is: <span>{PRICE}</span></p>
        <p>Last Update: <span>{LASTUPDATE}</span></p>
        <p>Highest Today: <span>{HIGHDAY}</span></p>
        <p>Lowest Today: <span>{LOWDAY}</span></p>
        <p>Change last 24 hours: <span>{CHANGE24HOUR}</span></p>

        
    </Div>
  )
}

export default PriceDisplay;