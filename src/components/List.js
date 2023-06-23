import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './list.css'

export default function List(props) {
    const {sublist} = props

  return (
    <Container>
      <Row>
        {sublist.map((item,i)=>(
          <Col xs={6} sm={4} lg={3} className='col' key={i}>
            <Link to={`/detail/${item.id}`} state={{product: item}}>
              <img src={item.img}></img>
            </Link>
            
          </Col>
          )) //map
        }
      </Row>
    </Container>
  )
}
