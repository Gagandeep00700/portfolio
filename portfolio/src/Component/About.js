import './About.css'
import React from 'react'
export default function About(){
  return(
    <>
      <footer>
        <code>
          Practical Usage:Standardization: CSS3 standardized the double colon syntax to improve clarity and make a clear distinction between pseudo-elements and pseudo-classes.
        </code>
Practical Usage:Standardization: CSS3 standardized the double colon syntax to improve clarity and make a clear distinction between pseudo-elements and pseudo-classes.

Practical Usage:Standardization: CSS3 standardized the double colon syntax to improve clarity and make a clear distinction between pseudo-elements and pseudo-classes.
Practical Usage:Standardization: CSS3 standardized the double colon syntax to improve clarity and make a clear distinction between pseudo-elements and pseudo-classes.
Practical Usage:Standardization: CSS3 standardized the double colon syntax to improve clarity and make a clear distinction between pseudo-elements and pseudo-classes.
Practical Usage:Standardization: CSS3 standardized the double colon syntax to improve clarity and make a clear distinction between pseudo-elements and pseudo-classes.
Practical Usage:Standardization: CSS3 standardized the double colon syntax to improve clarity and make a clear distinction between pseudo-elements and pseudo-classes.
Practical Usage:Standardization: CSS3 standardized the double colon syntax to improve clarity and make a clear distinction between pseudo-elements and pseudo-classes.
Practical Usage:Standardization: CSS3 standardized the double colon syntax to improve clarity and make a clear distinction between pseudo-elements and pseudo-classes.
Practical Usage:Standardization: CSS3 standardized the double colon syntax to improve clarity and make a clear distinction between pseudo-elements and pseudo-classes.
Practical Usage:Standardization: CSS3 standardized the double colon syntax to improve clarity and make a clear distinction between pseudo-elements and pseudo-classes.
Practical Usage:Standardization: CSS3 standardized the double colon syntax to improve clarity and make a clear distinction between pseudo-elements and pseudo-classes.
Practical Usage:Standardization: CSS3 standardized the double colon syntax to improve clarity and make a clear distinction between pseudo-elements and pseudo-classes.
Practical Usage:
        <div className="mydetails" id="MYDETAIL">
         ABOUT ME<br/>
           &nbsp;
          <hr/><br/>
           HELLO, I AM WEBSITE DEVELOPER. MY LEARNED LANGUAGES ARE HTML CSS JS REACT. I HOPE YOU LIKE MY PORTFOLIO. I WANNA UPGRADE MY SKILLS IN JS AND MAKING MORE JS PROJECTS. AND IT IS ALSO THE PART OF THAT PROJECTS.STUDYING IN BCA 3RD YEAR.<br/>
           <button id="CONTACT_ME" onClick={()=>{
             document.getElementById("CONTACT_ME").display="block"
           }}>CONTACT US</button>
        </div>
        <div className="CONTACT_ME" hidden>
          <form>
            <h1>CONTACT ME</h1>
          <input type="email" placeholder="Enter Your Email"/>
          <input type="text" placeholder="Enter message"/>
          <button type="submit" placeholder="submit">SUBMIT</button>
          </form>
        </div>
      </footer> 
    </>
  )
}