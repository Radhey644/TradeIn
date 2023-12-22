import React from 'react'
import Marquee from "react-fast-marquee";
import Coin_card from './Coin_card';
import { Link } from '@nextui-org/react';
const Trending_Marque = ({data}:any) => {
  console.log(data)
 return (
  <div>
    <Marquee>
    {
      data?(
        data.map((coin: any)=>{
        return (<Coin_card Coin={coin}/>)
        })
      ):(<></>)
    }
    </Marquee>
    </div>
  )
}

export default Trending_Marque