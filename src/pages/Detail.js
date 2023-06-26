import React from 'react'
import { useLocation } from 'react-router-dom'
import { Row, Col, Container, Button } from 'react-bootstrap';
import { styled } from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

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

    
    /* 구매 수량/총액 관리 */
    const [quant, setQuant] = useState(1)
    const [itemprice, setPrice] = useState(item.salePrice)
    const priceChange = function(v){
      if(v<1){
        alert('상품은 1개 이상 구매 가능합니다.')
        return
      }
      setQuant(v)
      setPrice(v*item.salePrice)
    }

    /* redux */
    const state = useSelector(state=>state)
    console.log(state)
    const dispatch = useDispatch()
    


    
    //li_scroll
    const itemDetail = useRef()
    const purchaseInfo = useRef()
    const review = useRef()
    const qna = useRef()
    const relative = useRef()

    const scroll = (e)=>{
      e.current.scrollIntoView()
    }
    

  return (
    <>
    <Container className="detail">
        <Row className='info_top'>
          <Col xs={12} md={6} lg={5} className='left'>
            <img src={item.img}></img>
          </Col>        
          <Col xs={12} md={6} lg={5} className='right'>
            <h1 className='name'>{item.name}</h1>
            <div className='price'>
            <p className='origin_price'>{item.originPrice.toLocaleString()}</p>
            <p className='sale_price'>{item.salePrice.toLocaleString()}</p>
            </div>

            <div className='buy_action'>            
              <div className="quant">
                <p className='btn_title'>구매 수량</p>
                <div className='btn_cover'>
                <ButtonQt type="button"
                  onClick={()=>{priceChange(quant-1)}}
                >-</ButtonQt>
                <input type="number" value={quant}
                  onChange={(e)=>{
                    priceChange(parseInt(e.target.value))
                  }}
                ></input>
                <ButtonQt type="button"
                  onClick={()=>{priceChange(quant+1)}}
                >+</ButtonQt></div>
              </div>{/* quant */}

                <div className='item_total'>
                    <p className='btn_title'>총 상품 금액</p>
                  <div>
                    <p className='total_price'>{itemprice.toLocaleString()}원</p>
                  </div>
                </div>

                <div className='add_btn'>
                  <Button>바로 구매</Button>
                  <Button><FontAwesomeIcon icon={faHeart} />찜하기</Button>
                  <Button><FontAwesomeIcon
                    icon={faCartArrowDown}
                  />장바구니</Button>
                </div>

            </div>{/* //buy_action */}
          </Col>
        </Row>

          <Row className='info_bottom'>
            <Col xl={12} className='item_detail' ref={itemDetail}>
                <ul className='info_bar'>
                  <li className='on' onClick={()=>{scroll(itemDetail)}}>상품 상세 정보</li>
                  <li onClick={()=>{scroll(purchaseInfo)}}>구매 정보</li>
                  <li onClick={()=>{scroll(review)}}>상품 후기</li>
                  <li onClick={()=>{scroll(qna)}}>상품 문의</li>
                  <li onClick={()=>{scroll(relative)}}>관련 상품</li>
                </ul>
              <img src={process.env.PUBLIC_URL + '/images/detail/d1.jpg'}></img>
            </Col>

            <Col xl={12} className='purchase_info' ref={purchaseInfo}>
              <ul className="info_bar">
                <li onClick={()=>{scroll(itemDetail)}}>상품 상세 정보</li>
                <li onClick={()=>{scroll(purchaseInfo)}} className='on'>구매 정보</li>
                <li onClick={()=>{scroll(review)}}>상품 후기</li>
                <li onClick={()=>{scroll(qna)}}>상품 문의</li>
                <li onClick={()=>{scroll(relative)}}>관련 상품</li>
              </ul>

              <ul>
                <h6 className='col_tit'>구매 정보</h6>
                <li className='li_tit'>* 배송안내</li>
                <li>배송방법 : 롯데택배,CJ대한통운 (그랜드바인더,클래시접착앨범)</li>
                <li>배송비용 : 총 결제 금액이 30,000원 미만일 경우 3,000원이 추가됩니다.</li>
                <li>산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가 있습니다.</li>
                <li>오후 3시 이전 결제건은 재고가 있는 상품에 한해 당일 발송됩니다.</li>
                <li>다만, 재고 여부에 따라 시간이 더 소요될 수 있습니다.(지연되는 경우 별도로 연락을 드립니다.)</li>
                <li>배송은 일반적으로 결제완료 후 2~3일 이내(토요일, 공휴일 제외)에 수령하실 수 있지만, 지역에 따라 혹은 택배사의 사정에 따라 시간이 더 소요될 수 있습니다.</li>
              </ul>

                <ul>
                  <li className='li_tit'>* 적립금 안내</li>
                  <li>적립금사용시 최소구매가능적립금(구매가능한 적립금 요구선)은 5,000원 입니다.</li>
                  <li>적립금은 2만원 이상 구매시 사용할 수 있습니다.</li>
                  <li>주문취소/환불시에 상품구매로 적립된 적립금은 함께 취소됩니다.</li>
                  <li>회원 탈퇴시에는 적립금은 자동적으로 소멸됩니다.</li>
              </ul>
            </Col>

            <Col xl={12} className='review' ref={review}>
              
            <ul className="info_bar">
                <li onClick={()=>{scroll(itemDetail)}}>상품 상세 정보</li>
                <li onClick={()=>{scroll(purchaseInfo)}}>구매 정보</li>
                <li onClick={()=>{scroll(review)}}  className='on'>상품 후기</li>
                <li onClick={()=>{scroll(qna)}}>상품 문의</li>
                <li onClick={()=>{scroll(relative)}}>관련 상품</li>
              </ul>

              <h6 className='col_tit'>상품 후기</h6>
            </Col>

            <Col xl={12} className='qna' ref={qna}>
              
            <ul className="info_bar">
                <li onClick={()=>{scroll(itemDetail)}}>상품 상세 정보</li>
                <li onClick={()=>{scroll(purchaseInfo)}}>구매 정보</li>
                <li onClick={()=>{scroll(review)}}>상품 후기</li>
                <li onClick={()=>{scroll(qna)}}  className='on'>상품 문의</li>
                <li onClick={()=>{scroll(relative)}}>관련 상품</li>
              </ul>

              <h6 className='col_tit'>상품 문의</h6>
            </Col>

            <Col xl={12} className='relative' ref={relative}>
              
            <ul className="info_bar">
                <li onClick={()=>{scroll(itemDetail)}}>상품 상세 정보</li>
                <li onClick={()=>{scroll(purchaseInfo)}}>구매 정보</li>
                <li onClick={()=>{scroll(review)}}>상품 후기</li>
                <li onClick={()=>{scroll(qna)}}>상품 문의</li>
                <li onClick={()=>{scroll(relative)}}  className='on'>관련 상품</li>
              </ul>

              <h6 className='col_tit'>관련 상품</h6>
              이건 근처 아이디의 상품 보여주는 걸로? 
              배열상에서 -2 -1 +1 +2 하고 싶은데 가능하려나
            </Col>
          </Row>



      </Container>
    </>
  )
}

