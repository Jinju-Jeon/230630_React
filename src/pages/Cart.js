import React from 'react'
import { Table, Container } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'



import './cart.scss'
import { deleteItem } from '../data/store'


export default function Cart() {
  const state = useSelector((state)=>(state))
  const dispatch = useDispatch()
  const products = state.cart

  return (
    <Container className='cart'>
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
              {products.map((item,i)=>{
                return(
                <tr key={i}>
                  <td>{i+1}</td>
                  <td className='item_info'>
                    <p><img src={item.img}></img></p>
                    <p>{item.name}</p>
                  </td>
                  <td>{item.salePrice.toLocaleString()}원</td>
                  <td className='item_quant'>
                    <div>
                      <input type='number' value={item.quant}></input>
                      <div>
                        <p><FontAwesomeIcon icon={faChevronUp} /></p>
                        <p><FontAwesomeIcon icon={faChevronDown} /></p>
                      </div>
                    </div>
                  </td>
                  <td>{(item.salePrice*item.quant).toLocaleString()}원</td>
                  <td className='delete_btn' onClick={()=>{
                    dispatch(deleteItem(products[i]))
                  }}>x</td>
                </tr>)
              })}
            </tbody>
        </Table>
    </Container>
  )
}
