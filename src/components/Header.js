import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () =>{
    return(
        <div className="headerWrapper">
            <div className="headerTitle">
                <Link to="/">Streamr</Link>
            </div>
            <div className="otherLinks">
                <Link to="/">All Streamrs</Link>
            </div>
        </div>
    );
}

export default Header