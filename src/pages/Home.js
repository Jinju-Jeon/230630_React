import React from 'react'
import ControlledCarousel from '../components/Carousel'
import { Container } from 'react-bootstrap'
import { styled } from 'styled-components'
import _ from 'lodash'



/* my */
import List from '../components/List'
import './page.scss'







/* home */
export default function Home(props) {
  const tempItem = props.all  
  const allItem = new Array

  for(let i=0;i<Object.keys(tempItem).length;i++){
    allItem[i] = tempItem[i]
  }

  const bests = _.orderBy(allItem,['sales'],['desc'])
  const best12 = bests.slice(0,12)
  
  



  return (
    <div className='home_js'>
      <ControlledCarousel />
      <Container>
        <h1 className='category'>Best Item</h1>
        <List sublist={best12}></List>
      </Container>
    </div>
  )
}
