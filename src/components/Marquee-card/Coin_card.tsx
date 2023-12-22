import React from 'react'

const Coin_card = ({Coin}:any) => {
  return (
    <div className='p-2 px-4 flex gap-2 rounded-md shadow-sm shadow-default-100 mx-2 bg-slate-900'>
    <img src={Coin.image} alt="" className='rounded-full h-7'/>
    <p className='font-semibold'>{Coin.name}</p>
    </div>
  )
}

export default Coin_card