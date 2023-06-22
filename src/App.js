import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// my
import './App.css';

//components
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">Iconic</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/product">Product</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='product/*' element={<Product/>}>
        <Route path='diary' element={<>diary</>}></Route>
        <Route path='notebook' element={<>notebook</>}></Route>
        <Route path='album' element={<>album</>}></Route>
        <Route path='pen' element={<>pen</>}></Route>
      </Route>
      <Route path='about' element={<div>About</div>}/>
      <Route path='cart' element={<div>Cart</div>}/>
    </Routes>


    </>
  );
}

export default App;
