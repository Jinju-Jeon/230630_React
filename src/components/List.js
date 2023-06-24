import React from 'react'
import {Row, Col, Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

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
                <Card.Title className='name'>{item.name}</Card.Title>
                <p className='origin_price'>{item.originPrice.toLocaleString()}원</p>
                <p className='sale_price'>{item.salePrice.toLocaleString()}원</p>
              </div>
            </Link>
            <div className='button_list'>
              <Button className='heart'><FontAwesomeIcon icon={faHeart} /></Button>
              <Button className='cart'><FontAwesomeIcon icon={faCartArrowDown} /></Button>
            </div>
            </Card>
            
          </Col>
          )) //map
        }
      </Row>
  )
}
