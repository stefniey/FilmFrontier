import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Search from '../../container/Cherche/Search';


const Navbar = () => {
    
    return (
        <nav>
            <div className="logo">
                <i><span>Film</span>Frontier</i>
            </div>
            <Search />

            <div className="btn">
            <Link to="/login" className='btn-log-in'>Login</Link>
            <Link to="/SignUp" className='btn-sign-up'>Sign up</Link>
            </div>

            

        </nav>
    )
}

export default Navbar

