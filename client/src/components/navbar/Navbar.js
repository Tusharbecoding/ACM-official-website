import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shift fixed-top navbar-light bg-light">
        <a className="navbar-brand acmlogonav">
          <Link to="/">
            <img src={logo} alt="ACM Logo" />
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="col-md-4" />
        <div className="col-md-3" />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <a className="nav-link">
                <Link to="/team">Team</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
              <Link to="/projects">Projects</Link>
              </a>
            </li>
            <li className="nav-item main">
              <a className="nav-link">
                <Link to="/events">Events</Link>  
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link to="/videos">Videos</Link>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link">
              <Link to="/blogs">Blogs</Link>

              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../images/logo.svg';
// import { GiHamburgerMenu } from "react-icons/gi"
// import { useState } from 'react';

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg shift fixed-top navbar-light bg-light">
//         <div className="logo">
//         <a className="navbar-brand acmlogonav">
//           <Link to="/">
//             <img src={logo} alt="ACM Logo" />
//           </Link>
//         </a>
//         </div>
//         <div className="hamburger">
//               <a href="#" onClick={}>
//                 <GiHamburgerMenu />
//               </a>
//         </div>
//         <div className="col-md-4" />
//         <div className="col-md-3" />
        
//         <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
            
//              <li className="nav-item">
//                <a className="nav-link">
//                  <Link to="/team">Team</Link>
//                </a>
//              </li>
//              <li className="nav-item">
//                <a className="nav-link">
//                <Link to="/projects">Projects</Link>
//                </a>
//              </li>
//              <li className="nav-item main">
//                <a className="nav-link">
//                  <Link to="/events">Events</Link>  
//                </a>
//              </li>
//              <li className="nav-item">
//                <a className="nav-link">
//                  <Link to="/videos">Videos</Link>
//                </a>
//              </li>
           
//            </ul>
//            </div>
           
           
//       </nav>
//     </>
//   )
// }

// export default Navbar