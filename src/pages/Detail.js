import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Detail() {
    const location = useLocation();
    console.log('location:',location)
    const item = location.state.product

  return (
    <div>
        <img src={item.img}/>
    </div>
  )
}

