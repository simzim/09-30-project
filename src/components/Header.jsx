0222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222220import './Header.css';
import Logo from '../img/Logo.svg';
import SearchLogo from '../img/Search.svg';
import ShopIcon from '../img/chart.svg';
import React, { useState, useRef } from 'react';  
import { NavLink } from 'react-router-dom';

export default function Header(){

        const [active, setActive] = useState(false);  
        const inputRef = useRef(null);  
    
        const handleClick = () => {  
            setActive(!active); // Perjungti 'active' klasę  
            if (inputRef.current) {  
                inputRef.current.focus(); // Fokusas į input laukelį  
            }  
        };  
    



    return(
        <div className="header-bg">
            <div className="wrapper header">
                <a><img src={Logo}/></a>
                <nav className='header-links'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/about'>About us</NavLink>
                    <NavLink to='/contact'>Contact us</NavLink>
                </nav>
                <div>
                <div className='header-right'>
                    <div id='search' className={active ? 'search active' : 'search'}>
                        <input ref={inputRef}  type="text" placeholder="Search" className="inputsearch" id='inputsearch'/>
                        <button className="btn" id='btn' onClick={handleClick}><img src={SearchLogo} alt="Search icon" /></button>
                    </div>
                    
                    <a href="#" className='shopcart'><img src={ShopIcon} alt="Shop icon" />3</a>
                </div>
                </div>
            </div>
        </div>
    );
}