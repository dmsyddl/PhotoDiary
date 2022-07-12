import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const navigate =  useNavigate();
    const Back = () => {
        navigate(-1);
    }
    
    return (
        <section className='sidebar'>
            <Link to="/">HashTag</Link>
            <Link to="/intro">about</Link>
            <i className="fa-solid fa-arrow-left-long" onClick={Back}></i>
        </section>
    );
};

export default Sidebar;