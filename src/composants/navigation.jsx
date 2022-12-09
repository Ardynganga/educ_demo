import React from 'react';
import {Link} from "react-router-dom";

function Navigation(){
    return (
        <nav>
            <Link to="/">connection</Link><br/>
            <Link to="/connect"> inscription</Link>
        </nav>
    )
};
export default Navigation;