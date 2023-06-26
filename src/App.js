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
        <Route path='about' element={<div>About</div>}/>
        <Route path='cart' element={<Cart />}/>
      </Routes>


    </>
  );
}

export default App;
