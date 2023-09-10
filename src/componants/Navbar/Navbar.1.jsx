import { useState } from "react"
import "./navbar.css"
import NavItem from './NavItem'
import { useNavigate, useParams } from "react-router-dom"

export default function Navbar() {
  
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const navDetails = [
    // {
    //     name:"HOME"
    // },
            {
                name:"About me"
            },
            {
                name:"Skills"
            },
            {
                name:"Projects"
            },
            {
                name:"Contact"
            },
            {
                name:"Resume",
                 link:"https://drive.google.com/file/d/1PbmOoY-g6xvYau2ypxCFPmJdyI8uw47H/view?usp=sharing"
            }
        ]
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <b>Sudharshan Kamavaram</b>
      </a>
      <img className="dpImg"style={{marginLeft:"20px",border:"2px solid", width:"50px",height:"50px",borderRadius:"50%",objectFit:"cover"}} src="https://i.ibb.co/FXbrHp4/Sudharshan.jpg" alt="sudharshan"/>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
        {navDetails.map((Item) => <NavItem Item = {Item}/>)}
         
        </ul>
      </div>
    </nav>
  );
}