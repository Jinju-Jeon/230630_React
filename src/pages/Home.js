import React from 'react'
import ControlledCarousel from '../components/Carousel'
import { Container, Row, Col } from 'react-bootstrap'
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
  const best8 = bests.slice(0,8)
  
  



  return (
    <div className='home_js'>
      <ControlledCarousel />

      <div className='event'>
        <Container>
        <h1>Event</h1>
          <Row>
            <Col xs={12} md={6}>
              <img src={process.env.PUBLIC_URL+'/images/event1.jpg'}></img>
            </Col>
            <Col xs={6} md={3}>
              <img src={process.env.PUBLIC_URL+'/images/event2.jpg'}></img>
            </Col>
            <Col xs={6} md={3}>
              <img src={process.env.PUBLIC_URL+'/images/event3.jpg'}></img>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <h1 className='category'>Best Item</h1>
        <List sublist={best8}></List>
      </Container>
    </div>
  )
}
