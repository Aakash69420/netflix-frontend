import React, { useContext } from 'react'
import {useState} from 'react'
import { Link } from "react-router-dom";
import "./navbar.scss"
import {Search, Notifications, ArrowDropDown} from "@mui/icons-material"
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

const Navbar = () => {
 const [isScrolled, setIsScrolled] = useState(false);
 const { dispatch } = useContext(AuthContext)

 window.onscroll = () => {
  setIsScrolled(window.scrollY === 0 ? false:true);
  return() => (window.onscroll = null);
 };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
     <div className="container">
     <div className="left">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="Netflix" />
      <Link to = "/" className='link'>
      <span>Homepage</span>
      </Link>
      <Link to = "/series" className='link'>
      <span>Series</span>
      </Link>
      <Link to = "/movies" className='link'>
      <span>Movies</span>
      </Link>
      <span>New and Popular</span>
      <span>My List</span>
     </div>
     <div className="right">
      <Search className="icon"/>
      <span>KIDS</span>
      <Notifications className="icon"/>
      <img src="https://c8.alamy.com/comp/KW30FB/supercell-logo-250px-KW30FB.jpg" alt="Profile" />
      <div className="profile">
      <ArrowDropDown className="icon"/>
      <div className="options">
       <span>Settings</span>
       <span onClick={()=>dispatch(logout())}>Logout</span>
      </div>
     </div>
     </div>
    </div>
    </div>
  )
}

export default Navbar