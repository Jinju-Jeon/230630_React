import React from 'react'
import { Table, Container } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'



import './page.scss'
import { deleteItem, quantUp, quantDown, quantChange } from '../data/store'


export default function Cart() {
  const state = useSelector((state)=>(state))
  const dispatch = useDispatch()
  const products = state.cart
  let total = 0;
  products.forEach((item)=>{
    total+=(item.quant*item.salePrice)
  })

  return (
    <Container className='cart_js'>
        <h1 className='cart_banner'>Cart<span>장바구니</span></h1>      
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>상품 정보</th>
                <th>판매가</th>
                <th>수량</th>
                <th>합계</th>
                <th>취소</th>
              </tr>
            </thead>
            <tbody>
              {products.length>0 ? products.map((item,i)=>{
                return(
                <tr key={i}>
                  <td>{i+1}</td>
                  <td className='item_info'>
                    <p><img src={process.env.PUBLIC_URL+item.img}></img></p>
                    <p>{item.name}</p>
                  </td>
                  <td>{item.salePrice.toLocaleString()}원</td>
                  <td className='item_quant'>
                    <div>
                      <input type='number' value={item.quant} onChange={(e)=>{
                        dispatch(quantChange({id: item.id,newValue: e.target.value}))
                      }}></input>
                      <div>
                        <button onClick={()=>{
                          dispatch(quantUp(item.id))
                        }}
                        ><FontAwesomeIcon icon={faChevronUp} /></button>
                        <button onClick={()=>{
                          dispatch(quantDown(item.id))
                        }}
                        ><FontAwesomeIcon icon={faChevronDown} /></button>
                      </div>
                    </div>
                  </td>
                  <td>{(item.salePrice*item.quant).toLocaleString()}원</td>
                  <td><button
                  onClick={()=>{
                    dispatch(deleteItem(products[i]))
                  }}
                  >x</button></td>
                </tr>)
              }) :
              <tr className='no_product'>
                <td></td>
                <td colSpan={5}>아직 장바구니에 상품이 없습니다.</td>
                </tr> }
              <tr className='total'>
                <td colSpan={4} className='total_text'>금액 총 합계</td>
                <td colSpan={2} className='total_price'>{total.toLocaleString()}원</td>

              </tr>
            </tbody>
        </Table>
    </Container>
  )
}
