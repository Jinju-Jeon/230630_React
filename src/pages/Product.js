import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom'


/* my */
import './product.css'

export default function Product() {
  return (
    <>
        <div className='second_nav'>
            <Link to='diary'>Diary</Link>
            <Link to='notebook'>Notebook</Link>
            <Link to='album'>Album</Link>
            <Link to='pen'>Pen</Link>
        </div>
        
        <Outlet></Outlet>
        
    </>
  )
}
