import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Detail() {
    const location = useLocation();
    const item = location.state.item
    console.log(item.id)

  return (
    <div>Detail</div>
  )
}
