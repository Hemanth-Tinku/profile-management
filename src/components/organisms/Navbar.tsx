import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbarBrand">
                <h1>Profile Management</h1>
            </div>
            <ul className="navbarLinks">
                <li>
                    <Link to="/profile-form">Profile Form</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
