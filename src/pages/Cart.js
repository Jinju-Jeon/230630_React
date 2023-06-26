import React from 'react'
import { Table, Container } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function Cart() {
  const state = useSelector((state)=>(state))
  console.log(state)
  

  return (
    <Container>
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
              <tr>
                <td>store내 index+1</td>
                <td className='cartitem_info'>
                    <p><img src=""></img></p>
                    <p>상품명</p>
                </td>
                <td>가격</td>
                <td><input type="number" ></input></td>
                <td>어떻게든 가격*수량... 이것도 store로 관리해주면 되지 않을까</td>
                <td>취소(배열 내에서 삭제)</td>
              </tr>
            </tbody>
        </Table>
    </Container>
  )
}
