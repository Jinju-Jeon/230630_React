import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

// my


//components
import Home from './pages/Home';
import Product from './pages/Product';
import List from './components/List';
import Detail from './pages/Detail';

//data
import diaryData from './data/diary';
import notebookData from './data/notebook';
import albumData from './data/album'
import penData from './data/pen';

function App() {
  const [diary] = useState(diaryData)
  const [notebook] = useState(notebookData)
  const [album] = useState(albumData)
  const [pen] = useState(penData)


  return (
    <>
    <Navbar data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">Iconic</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/product/diary">Product</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='product/' element={<Product/>}>
          <Route path='diary' element={<List sublist={diary} />}></Route>
          <Route path='notebook' element={<List sublist={notebook} />}></Route>
          <Route path='album' element={<List sublist={album} />}></Route>
          <Route path='pen' element={<List sublist={pen} />}></Route>
        </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='about' element={<div>About</div>}/>
        <Route path='cart' element={<div>Cart</div>}/>
      </Routes>


    </>
  );
}

export default App;
