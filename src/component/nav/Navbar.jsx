
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
// import logo from '../../../public/asset/image/logo.png';

function Navbar() {
   const [loading, setLoading] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // 화면 크기에 따라서 버튼이 보이고 안보이도록 설정한다.
  const showButton = () => {
    setLoading(true);
    if (window.innerWidth <= 960) {
      setButton(false);
      
    } else {
      setButton(true);
    }
   
  };

  // SIGNUP버튼이 사이즈가 줄어들면 없어지도록 한다.
  useEffect(() => {
    
    showButton();
     return () => setLoading(false);
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* 모바일버전에서 클릭하면 메뉴 보이도록 설정하는 것도 한다. (close Mobile Menu)는 다시 버튼 누르면 없어지고 생기고 하도록 한다.  */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="./asset/image/MainLogop.png" alt="로고" className="logos"></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/charge" className="nav-links" onClick={closeMobileMenu}>
                머니 충전
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sell" className="nav-links" onClick={closeMobileMenu}>
                머니 결제
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/board" className="nav-links" onClick={closeMobileMenu}>
                거래 내역
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/game" className="nav-links" onClick={closeMobileMenu}>
                게임
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">SIGN IN</Button>} */}
        </div>
          </nav>
         <Outlet/> 
    </>
  );
}

export default Navbar;