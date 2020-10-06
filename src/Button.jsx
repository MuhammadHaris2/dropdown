import React from 'react'
import {Link} from "react-router-dom";

const Button=()=> {
    return (
        <div>
            <Link to='signup'>
                <button className="btn_signup">Signup</button>
            </Link>
        </div>
    )
}

export default Button;
