import React from 'react'
import {Row, Col, Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './list.scss'


export default function List(props) {
    const {sublist} = props

  return (
      <Row>
        {sublist.map((item,i)=>(
          <Col xs={6} md={4} lg={3} className='col' key={i}>
            <Card>
            <Link to={`/detail/${item.id}`} state={{product: item}}>
              <img src={item.img}></img>
              <div className='info'>
                <p className='name'>{item.name}</p>
                <p className='origin_price'>{item.originPrice}</p>
                <p className='salePrice'>{item.salePrice}</p>
              </div>
            </Link>
            <Button className='heart'>여기찜하기</Button>
            <Button className='cart'>여기장바구니</Button>
            </Card>
            
          </Col>
          )) //map
        }
      </Row>
  )
}
