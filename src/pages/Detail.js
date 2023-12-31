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
import { addAnswer, addItem, addQuestion, addReview, removeQuestion, removeReview } from '../data/store';
import { Link } from 'react-router-dom';

/* my */
import './page.scss'





const ButtonQt = styled.button`
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid #aaa;
`





export default function Detail() {
  const location = useLocation();
  const item = location.state.product
  const state = useSelector((state)=>(state))

    
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
    const dispatch = useDispatch()

    /* review */
    const [writing,setWriting] = useState('')
    const tempReview = state.reviews
    const nowReview = tempReview.filter((review)=>(review.item===item.id))

    let newRKey = 0
    if(tempReview.length>0){
      newRKey = tempReview[tempReview.length-1].key+1
    }
    
    /* qna */
    const [writingQna,setQna] = useState('')
    const tempQnas = state.qnas
    const nowQnas = tempQnas.filter((element)=>(element.item===item.id))


    let newQKey = 0
    if(tempQnas.length>0){
      newQKey = tempQnas[tempQnas.length-1].key+1
    }
    const [writingA,setAnswer] = useState('')




    
    /* 관련상품 */
    const tempItem = location.state.array
    const nowDetail = tempItem.findIndex((element)=>(item.id===element.id))

    let relateItem = tempItem.slice(nowDetail+1,nowDetail+5)

    const relateLength = relateItem.length
    
    if(relateLength<4){
      const tempList = tempItem.slice(0,4-relateLength)
      relateItem = relateItem.concat(tempList)
    }

    
    

    
    //li_scroll
    const itemDetail = useRef()
    const purchaseInfo = useRef()
    const review = useRef()
    const qna = useRef()
    const relative = useRef()

    const scroll = (e)=>{
      e.current.scrollIntoView()
    }

    function InfoList(props) {
      const now = props.now
    
    return (
      <ul className="info_bar">
          <li className={now==1 ? 'on' : ''} onClick={()=>{scroll(itemDetail)}}>상품 상세 정보</li>
          <li className={now==2 ? 'on' : ''} onClick={()=>{scroll(purchaseInfo)}}>구매 정보</li>
          <li className={now==3 ? 'on' : ''} onClick={()=>{scroll(review)}}>상품 후기</li>
          <li className={now==4 ? 'on' : ''} onClick={()=>{scroll(qna)}}>상품 문의</li>
          <li className={now==5 ? 'on' : ''} onClick={()=>{scroll(relative)}}>관련 상품</li>
      </ul>
    )
    }
    
    
    

  return (
    <>
    <Container className="detail_js">
        <Row className='info_top'>
          <Col xs={12} md={6} lg={5} className='left'>
            <img src={process.env.PUBLIC_URL+item.img}></img>
          </Col>        
          <Col xs={12} md={6} lg={5} className='right'>
            <div className='name'>
              <h1>{item.name}</h1>
              <p>{item.subtxt}</p> 
            </div>
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
                  <Button 
                    onClick={()=>{dispatch(addItem({id: item.id, img: item.img, name: item.name, salePrice: item.salePrice, quant: quant}
                    ))}}>
                      <FontAwesomeIcon icon={faCartArrowDown}/>장바구니
                  </Button>
                </div>

            </div>{/* //buy_action */}
          </Col>
        </Row>
        <div className='info_bottom'>
          <Row xl={12} className='item_detail' ref={itemDetail}>
              <InfoList now={1} />
            <img src={process.env.PUBLIC_URL + '/images/detail/d1.jpg'}></img>
          </Row>

          <Row xl={12} className='purchase_info' ref={purchaseInfo}>
            <InfoList now={2} />

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
          </Row>

          <Row xl={12} className='review' ref={review}>              
            <InfoList now={3} />
            <h6 className='col_tit'>상품 후기</h6>
            <div className='review_list'>
            {nowReview.length>0 ?  nowReview.map((item,i)=>{
              return(<div key={i} className='now_review'>
                <p>{item.reviewText.split('\n').map((line,k)=>
                  (<span key={k}>{line}<br/></span>)
                )}
                </p>
                <p onClick={()=>{
                  dispatch(removeReview(item.key))
                }}>삭제 x</p>
                </div>)
            }) : <div>아직 리뷰가 없습니다. 첫 리뷰를 작성해주세요.</div>
            }
            </div>
            <div className='review_writing'>
              <h6>리뷰 작성하기</h6>
              <div>
              <textarea id="reviewArea" value={writing} onChange={(e)=>{setWriting(e.target.value)}} placeholder='리뷰를 작성해주세요(10자 이상)'></textarea>
              <Button onClick={()=>{
                if(writing.length<10){
                  alert('10자 이상 작성해주세요')
                  document.querySelector('#reviewArea').select()
                } else{
                  dispatch(addReview({key: newRKey, item: item.id, reviewText: writing}))
                  setWriting('')
                }
              }}>작성</Button>
              </div>
            </div>
          </Row>

          <Row xl={12} className='qna' ref={qna}>
            <InfoList now={4} />
            <h6 className='col_tit'>상품 문의</h6>

            <div className='qna_list'>
            {nowQnas.length>0 ?  nowQnas.map((item,i)=>{
              return(
              <div key={i} className='now_qna'>
                <div className='question'>
                  <p onClick={()=>{
                    document.getElementById('answer'+i).style.display = 'block'
                  }}>{item.qnaText.split('\n').map((line,k)=>
                    (<span key={k}>{line}<br/></span>)
                  )}
                  </p>
                  <p onClick={()=>{
                    console.log(item.key)
                    dispatch(removeQuestion(item.key))
                  }}> 삭제 x</p>
                </div>
                <div className='answer' id={'answer'+i}>
                  {item.answer!=='' ? <p className='answered'>{
                    item.answer.split('\n').map((line,j)=>{
                      return(<span key={j}>{line}<br/></span>)
                  }) //answer-답변있음
                  }</p> :
                  <>
                    <h6>답변 작성</h6>
                    <div>
                        <textarea id={item.key+'answer'} onChange={(e)=>{
                          setAnswer(e.target.value)}
                        } value={writingA}></textarea> 
                        <Button onClick={()=>{
                          dispatch(addAnswer({key: item.key, answer: writingA}))
                          setAnswer('')
                        }}>답변</Button>
                    </div>
                  </> //answer-답변없음
                  } 
                  <p className='answer_close' onClick={()=>{
                    document.getElementById('answer'+i).style.display = 'none'
                  }}>답변 닫기▲</p>
                </div> {/* answer */}
                </div>)
            }) : <div>아직 문의사항이 없습니다.</div>
            }
            </div>

            <div className='qna_writing'>
              <h6>문의 작성하기</h6>
              <div>
              <textarea id="qnaArea" value={writingQna} onChange={(e)=>{setQna(e.target.value)}} placeholder='문의사항을 작성해주세요(10자 이상)'></textarea>
              <Button onClick={()=>{
                if(writingQna.length<10){
                  alert('10자 이상 작성해주세요')
                  document.querySelector('#qnaArea').select()
                } else{
                  dispatch(addQuestion({key: newQKey, item: item.id, qnaText: writingQna, answer: ''}))
                  setQna('')
                }
              }}>작성</Button>
              </div>
            </div>
          </Row>

          <Row xl={12} className='relative' ref={relative}>              
          <InfoList now={5} />

            <h6 className='col_tit'>관련 상품</h6>
            <div className='relate_list'>
                {relateItem.map((item,i)=>{
                    return(
                      <Link to={`/detail/${item.id}`} state={{product: item, array: tempItem}}>
                      <img src={process.env.PUBLIC_URL+item.img}></img>
                      <p className='relate_tit'>{item.name}</p>
                      <p className='origin_price'>{item.originPrice.toLocaleString()}원</p>
                      <p className='sale_price'>{item.salePrice.toLocaleString()}원</p>
                      </Link>
                      ) 
                  
                })}
              </div>
          </Row>
        </div>



      </Container>
    </>
  )
}

