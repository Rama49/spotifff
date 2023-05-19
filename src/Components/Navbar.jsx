
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import spotify from "./image/Vector.png";


const Nave = () => {
  return (
    <Navbar bg="light" expand="lg" className=' bg-dark sticky-top '>
      <div className= 'container-fluid bg-dark '>
      <Navbar.Brand href="/">
            <img src={spotify} alt="" srcset="" />
          </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto float-end w-100">
            <Nav.Link href="#link" className='ms-auto'>
              <a href="/">
                <button className='bg-transparent  border  border-none me-3 text-white rounded-pill  p-2 fw-bolder '>Sign Up</button>
               </a>
              <a href="/">
                <button className='bg-white  rounded-pill border border-white p-2 fw-bolder '>Log in</button>
               </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
export default Nave;