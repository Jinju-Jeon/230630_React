import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

// my
import './common.scss'


//components & pages
import Home from './pages/Home';
import Product from './pages/Product';
import List from './components/List';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import About from './pages/About';

//data
import diaryData from './data/diary';
import notebookData from './data/notebook';
import albumData from './data/album'
import penData from './data/pen';

const allData = [
  ...diaryData,
  ...notebookData,
  ...albumData,
  ...penData
]

function App() {
  const [diary] = useState(diaryData)
  const [notebook] = useState(notebookData)
  const [album] = useState(albumData)
  const [pen] = useState(penData)
  const [allItem] = useState(allData)

  const navigate = useNavigate()



  return (
    <>
    <Navbar data-bs-theme="light">
      <Container>
        <Navbar.Brand onClick={()=>{navigate("/")}}>Iconic</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>navigate("/product/diary")}>Product</Nav.Link>
          <Nav.Link onClick={()=>navigate("/about")}>About</Nav.Link>
          <Nav.Link onClick={()=>navigate("/cart")}>Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

      <Routes>
        <Route path='/' element={<Home all={allItem}/>}/>
        <Route path='product/' element={<Product/>}>
          <Route path='diary' element={<List sublist={diary} />}></Route>
          <Route path='notebook' element={<List sublist={notebook} />}></Route>
          <Route path='album' element={<List sublist={album} />}></Route>
          <Route path='pen' element={<List sublist={pen} />}></Route>
        </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='about' element={<About/>}/>
        <Route path='cart' element={<Cart />}/>
      </Routes>

      <footer className='footer'>
        <Container>
        <ul>
          <li>회사소개</li>
          <li>이용안내</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
        </ul>
        <p>
          상호. (주)아이코닉디자인 | 대표. 김남현 | 이메일. master@icon-ic.com| 전화. 02-2231-1959 | 주소. 서울시 중구 다산로 20길 35 아이코닉빌딩<br/>
          사업자등록번호. 201-86-04923 (사업자정보확인) | 통신판매업신고번호. 2008-서울중구-0501호 | 개인정보보호책임자. 김남현(noon@icon-ic.com)<br/>
          고객님은 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 PG 사의 구매안전서비스를 이용하실 수 있습니다. (서비스가입사실확인)<br/>
        </p>
        </Container>
      </footer>


    </>
  );
}

export default App;
