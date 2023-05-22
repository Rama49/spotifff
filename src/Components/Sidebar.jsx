import { BsFillHouseDoorFill,BsSearch, BsJustifyLeft,BsFillPlusCircleFill,BsFillChatSquareHeartFill, BsGlobe } from "react-icons/bs";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Side = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid bg-dark">
      <>
      <div className="d-flex justify-content-end fixed-top">
      <Button variant="primary" onClick={handleShow} className="bg-dark d-md-none w-25  d-sm-inline border-ligth">
       Menu
      </Button>
      </div>
     

      <Offcanvas show={show} onHide={handleClose} className='bg-dark d-lg-none d-sm-inline w-25'>
        
        <Offcanvas.Body>
          <div className="row">
         <div className="col-auto min-vh-100 bg-dark text-white  pt-5   side  ">
            <ul>
              <il>
                <a href="/" className="nav-link  mb-3">
                   <BsFillHouseDoorFill />
                   <span className="ms-3 mb-2 d-none d-sm-inline">Home</span>
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                <BsSearch />
                  <span className="ms-3  d-none d-sm-inline">Search</span> 
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                   <BsJustifyLeft />   
                   <span className="ms-3 d-none d-sm-inline">Your library</span> 
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                   <BsFillPlusCircleFill />
                   <span className="ms-3 mb-2 d-none d-sm-inline">Create Playlist</span>
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                <BsFillChatSquareHeartFill />
                  <span className="ms-3  d-none d-sm-inline">Liked song</span> 
                </a>
              </il>
              {/* <il>
              <a href="/">
                <button className='mb-3 bg-transparent  border border-transparent me-3 text-danger rounded-pill  p-2 fw-bolder '>Sign Up</button>
               </a><br />
              <a href="/">
                <button className='bg-white  rounded-pill border border-white p-2 fw-bolder '>Log in</button>
               </a>
              </il> */}
            </ul>
            <div className="texto">
            <div className=" mt-5 pt-5 ">
              <p className="leg">Legal</p>
              <p className="leg">Privacy Career</p>
              <p className="leg">Privacy Policy</p>
            </div>
            <div className="">
                  <p className="leg">Cookies</p>
                  <p className="leg"> About</p>
                  <p className="leg"> Ads</p>
            </div> 
            <a href="/">
                <button className='bg-transparent text-white mt-5 rounded-pill border border-white p-2 fw-bolder leg '><BsGlobe /> English</button>
               </a>
            </div>
         </div>
      </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    <div className="row">
         <div className="col-auto min-vh-100 bg-dark text-white  pt-5 d-none d-md-block   side  ">
            <ul>
              <il>
                <a href="/" className="nav-link  mb-3">
                   <BsFillHouseDoorFill />
                   <span className="ms-3 mb-2 ">Home</span>
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                <BsSearch />
                  <span className="ms-3  ">Search</span> 
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                   <BsJustifyLeft />   
                   <span className="ms-3 ">Your library</span> 
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                   <BsFillPlusCircleFill />
                   <span className="ms-3 mb-2 ">Create Playlist</span>
                </a>
              </il>
              <il>
                <a href="/" className="nav-link  mb-3">
                <BsFillChatSquareHeartFill />
                  <span className="ms-3  ">Liked song</span> 
                </a>
              </il>
             
              
           
              
            </ul>
            <div className="texto">
            <div className="d-flex justify-content-between mt-5 pt-5 ">
              <p className="leg">Legal</p>
              <p className="leg">Privacy Career</p>
              <p className="leg">Privacy Policy</p>
            </div>
            <div className="d-flex justify-content-between">
                  <p className="leg">Cookies</p>
                  <p className="leg"> About</p>
                  <p className="leg"> Ads</p>
            </div> 
            <a href="/">
             
                <button className='bg-transparent text-white  rounded-pill border border-white p-2 fw-bolder leg '> < BsGlobe /> English</button>
               </a>
            </div>
         </div>
         <div>
         </div>
      </div>
    </div>
  )
}
export default Side;