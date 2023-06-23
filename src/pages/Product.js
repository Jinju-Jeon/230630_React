import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import {Button, ButtonGroup, Container} from 'react-bootstrap';
import { Outlet } from 'react-router-dom'


/* my */
import './product.scss'


export default function Product() {
  let category = '', chk=0
  const location = useLocation()
  const nowLoca = location.pathname.replace('/product/','')
  switch(nowLoca){
    case 'diary': category='Diary / Planner'; chk=0;
      break;
    case 'notebook': category='Notebook / Memo'; chk=1;
      break;
    case 'album': category='Album / RecordBook'; chk=2;
      break;
    case 'pen': category='Pen / PencilCase'; chk=3;
      break;

    default: category='존재하지 않는 항목입니다.';chk=-1
  }

  return (
    <>
      <Container>
        <div className='category'>{category}</div>
        <ButtonGroup aria-label="Basic example">
          <Link to='diary'><Button variant="secondary" className={chk===0 ? 'on' : ''}>Diary / Planner</Button></Link>
          <Link to='notebook'><Button variant="secondary"className={chk===1 ? 'on' : ''}>Notebook / Memo</Button></Link>
          <Link to='album'><Button variant="secondary" className={chk===2 ? 'on' : ''}>Album / RecordBook</Button></Link>
          <Link to='pen'><Button variant="secondary" className={chk===3 ? 'on' : ''}>Pen / PencilCase</Button></Link>
        </ButtonGroup>
      <Outlet></Outlet>
    </Container>  
        
    </>
  )
}
