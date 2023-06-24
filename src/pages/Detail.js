import React from 'react'
import { useLocation } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap';
import { styled } from 'styled-components';


/* my */
import './detail.scss'
const ButtonQt = styled.button`
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid #aaa;
`


export default function Detail() {
    const location = useLocation();
    const item = location.state.product

  return (
    <>
    <Container className="detail">
        <Row>
          <Col xs={12} md={6}>
            <img src={item.img}></img>
          </Col>        
          <Col xs={12} md={6}>
            <h1 className='name'>{item.name}</h1>
            <p className='origin_price'>{item.originPrice.toLocaleString()}</p>
            <p>{item.salePrice.toLocaleString()}</p>
            <div className="quant">
              <ButtonQt type="button" id="q_minus"
                onClick={()=>{}}
              >-</ButtonQt>
              <input type="number" id="quant" value={1}></input>
              <ButtonQt type="button" id="q_plus"
                onClick={()=>{}}
              >+</ButtonQt>
            </div>
          </Col>{/* quant */}
        </Row>
      </Container>
    </>
  )
}

