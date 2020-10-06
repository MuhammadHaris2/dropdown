import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {MenuItem} from './MenuItem';

const Dropdown=()=> {
    const[clicked, setClicked] = useState(false);
    const handleClick = ()=>{
        setClicked(!clicked);
    }


    return (
        <div>
           <ul onClick={handleClick} className={clicked? 'dropdown_menu clicked':'dropdown_menu'}>
               {
                   MenuItem.map((item,index)=>{
                       return(
                           <li key={index}>

                            <Link to={item.path} className={item.cName} onClick={()=>setClicked(false)}>
                            {item.title}
                            </Link>

                           </li>
                       )
                   })
               }
           </ul>
        </div>
    )
}

export default Dropdown;
