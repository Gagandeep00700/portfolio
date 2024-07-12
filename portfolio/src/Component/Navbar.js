import './Navbar.css'
function Navbar() {
  return (
    <>
    <div className="Navbar">
      <nav class="bg-primary d-flex">
       <img className="logoimg" src="1000131482-removebg-preview.png"></img>
        <ul className="">
          <a href="#MYDETAIL"><li>HOME</li></a>
          <li>PROJECTS</li>
          <li id="ABOUT">ABOUT ME</li>
        </ul>
      </nav>
    </div>
    </>
  );
}

export default Navbar;
