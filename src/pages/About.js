import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
  return (
    <Container className='about'>
        <div>
          <h1>ICON OF ALL YOURS</h1>
          <Row>
            <Col xs={12} md={6}>
              <p>
              아이코닉은 사용자의 상징(icon)이 되는 제품을 만듭니다.<br/>
              우리의 라이프스타일을 고스란히 담아내고 겉으로 드러나기 어려운 무형의 가치들을 제품 하나하나에 담아 사용자에게 돌려주고자 합니다.
              </p>
              <p>
              단순히 아름답거나 실용적인 디자인에 그치는 것이 아니라 우리가 살아가는 현재를 대변하는 Iconic Design을 추구합니다.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <p>
              Iconic Design makes the products which can be the user’s icon.<br/>
              We try to put your lifestyle, and intangible values into all our products and give them back to you.
              </p>
              <p>
              Iconic Design pursues the iconic design not only beautiful and practical, but also representing our daily life.
              </p>
            </Col>
          </Row>
          
        </div>
        <div>
          <h1>SHARING BY DESIGN</h1>
          <Row>
            <Col xs={12} md={6}>
            <p>
              아이코닉의 디자인은 나누어 공유하는 것에서 출발합니다.
            </p>
            <p>
              감성을 나누다<br/>
              특별한 무언가가 아닌, 늘 곁에 있는 것.<br/>
              누구에게나 마음 한 켠에 자리잡고 있을 따뜻한 기억과 색감.
            </p>
            <p>
              경험을 나누다<br/>
              사용자의 일상적 바람들을 공유하는 것.<br/>
              경험하고 나서야 일상에서 늘 원해왔던 것임을 깨닫게 되는 것.	
            </p>
            <p>
              가치를 나누다<br/>
              작은 배려에서 오는 특별함의 가치.<br/>
              기본에 충실하고 쓰임에 합리적인 제품으로 우리의 생활이 조금 더 즐거워지는 것.	
            </p>
            </Col>
            <Col xs={12} md={6}>
            <p>
              Iconic Design starts with sharing by design.
            </p>
            <p>
              Sharing Sensibility<br/>
              Not something special, but always be near by.<br/>
              Warm memories and colors that stays in every person’s mind.
            </p>
            <p>
              Sharing Experience<br/>
              Sharing user’s everyday hopes and dreams.<br/>
              After the experience, we realize that it was needed always.
            </p>
            <p>
              Sharing Values <br/>
              The value of specificity that comes from careful concerns.<br/>
              Our life becomes a bit more joyful by basic, faithful and reasonable products.
            </p>
            </Col>
          </Row>
        </div>
        <div>
          <h1>LIFESTYLE DESIGN BRAND</h1>
          <Row>
            <Col xs={12} md={6}>
            <p>
              창의적인 생각과 순수한 열정을 제품에 담아
              우리의 일상을 보다 즐겁고 풍요롭게 하는
              라이프스타일 디자인 브랜드로 성장 해 나가겠습니다.
            </p>
            </Col>
            <Col xs={12} md={6}>
            <p>
              Iconic Design, as lifestyle design brand,
              will continue to carry creative thinking and passion
              in our products that enriches our daily life.
            </p>
            </Col>
          </Row>
        </div>
    </Container>
  )
}
