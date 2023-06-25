import React from 'react'
import { useLocation } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap';
import { styled } from 'styled-components';
import { useState } from 'react';


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

    const [quant, setQuant] = useState(1)
    console.log(quant)
    

  return (
    <>
    <Container className="detail">
        <Row className='info_top'>
          <Col xs={12} md={6}>
            <img src={item.img}></img>
          </Col>        
          <Col xs={12} md={6}>
            <h1 className='name'>{item.name}</h1>
            <p className='origin_price'>{item.originPrice.toLocaleString()}</p>
            <p>{item.salePrice.toLocaleString()}</p>
            <div className="quant">
              <ButtonQt type="button"
                onClick={()=>{setQuant(quant-1)}}
              >-</ButtonQt>
              <input type="number" value={quant}
                onChange={(e)=>{setQuant(parseInt(e.target.value))}}
              ></input>
              <ButtonQt type="button"
                onClick={()=>{setQuant(quant+1)}}
              >+</ButtonQt>
            </div>
          </Col>{/* quant */}
        </Row>

        <div className='info_mid'>
        <Row className="info_bar">
            <ul>
              <li className='on'>상품 상세 정보</li>
              <li>구매 정보</li>
              <li>상품 후기</li>
              <li>상품 문의</li>
              <li>관련 상품</li>
            </ul>
        </Row>

        <Row>


          <Col xl={12}>
            <img src={process.env.PUBLIC_URL + '/images/detail/d1.jpg'}></img>
          </Col>

          <Col xl={12} >
            
          </Col>
        </Row>


        </div> {/* ////info_mid */}


      </Container>
    </>
  )
}

