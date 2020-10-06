import React,{useState} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from "react-router-dom";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Dropdown from './Dropdown';
import Button from './Button';


const Navbar=()=> {
    const[clicked, setClicked] = useState(false);
    const[dropdown, setDropdown]=useState(false);
    const handleClick = ()=>{
        setClicked(!clicked);
    }
    const closeMobMenu =()=>{
        setClicked(false);
    }

    const onMouseEnter=()=>{
        if(window.innerWidth<960){
            setDropdown(false);
        }
        else{
            setDropdown(true);
        }
    };

    const onMouseLeave=()=>{
        if(window.innerWidth<960){
            setDropdown(false);
        }
        else{
            setDropdown(false);
        }
    };

    return (
        
        <nav className="navbar">
        <Link to='/' className='navbar_logo'>
          <span>Haris <FavoriteIcon className="navbar_icon"/></span>
        </Link>
        
          <div className="navbar_menuicon">
           <IconButton onClick={handleClick} >
              {clicked? <CloseIcon className="nav_icon"/>:<MenuIcon className="nav_icon"/>}
           </IconButton>
          </div>

          <ul className={clicked? 'navbar_menu active':'navbar_menu'}>
              <li className="navbar_item">
                 <Link to="/" className="nabar_link" onClick={closeMobMenu}>
                     Home
                 </Link>
                
                </li>

                <li className="navbar_item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                 {dropdown && <Dropdown/>}
                 <Link  to="/services" className="nabar_link" onClick={closeMobMenu}>
                     <span className="navbar_span">Services<ArrowDropDownIcon className="nav_icons"/></span>
                 </Link>
                 
                </li>

                <li className="navbar_item">
                 <Link to="/contact" className="nabar_link" onClick={closeMobMenu}>
                     Contact us
                 </Link>
                </li>

                <li className="navbar_item_mobile">
                 <Link to="/signup" className="nabar_link" onClick={closeMobMenu}>
                     signup
                 </Link>
                </li>
          </ul>
        <Button />
        </nav>
    )
}

export default Navbar;
