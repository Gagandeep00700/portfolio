import './Navbar.css'
import React,{useRef} from 'react'
function Navbar() {
  const scrollToHome = () => {
    const homeSection = document.getElementById('HOME');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <div className="Navbar" id="">
      <nav class="bg-primary d-flex">
       <img className="logoimg" src="1000131482-removebg-preview.png"/>
        <ul className="">
          <a href="#nov"><li onClick={scrollToHome}>HOME</li></a>
          <li>PROJECTS</li>
          <a href="#MYDETAIL"><li id="ABOUT">ABOUT</li></a>
        </ul>
      </nav>
    </div>
    </>
  );
}

export default Navbar;
