import React, { useState } from 'react'
import {Row, Col, Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import { addItem } from '../data/store';
import { useDispatch, useSelector } from 'react-redux';

import './components.scss'




export default function List(props) {
    const {sublist} = props

    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    

  return (
      <Row className='list_js'>
        {sublist.map((item,i,array)=>(
          <Col xs={6} md={4} lg={3} className='col' key={i}>
            <Card>
            <Link to={`/detail/${item.id}`} state={{product: item, array: array}}>
              <img src={item.img}></img>
              <div className='info'>
                <Card.Title className='name'>{item.name}</Card.Title>
                <p className='origin_price'>{item.originPrice.toLocaleString()}원</p>
                <p className='sale_price'>{item.salePrice.toLocaleString()}원</p>
              </div>
            </Link>
            <div className='button_list'>
              <Button className='heart'><FontAwesomeIcon icon={faHeart} /></Button>
              <Button className='cart'><FontAwesomeIcon icon={faCartArrowDown}
                onClick={()=>{
                  dispatch(addItem({id: item.id, img: item.img, name: item.name, salePrice: item.salePrice, quant: 1}))
                }}
               /></Button>
            </div>
            </Card>
            
          </Col>
          )) //map
        }
      </Row>
  )
}
