import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Headers.scss';

const Headers = () => {
    const user = useSelector((state) => state.auth.user);
    const [userdata, setUserdata] = useState({});

    const logout = () => {
        window.open("http://localhost:3001/logout", "_self");
    };

    return (
        <header>
            <nav>
                <div className="left">
                <NavLink to="/"><h1 className='logo'>Poetry Blog</h1></NavLink>
                </div>
                <div className="right">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        {user ? (
                            <>
                                
                                <li>
                                    <NavLink to="/dashboard">Dashboard</NavLink>
                                </li>
                                <li onClick={logout}>Logout</li>
                                <li>
                                    <img
                                        src={user.image}
                                        style={{ width: "50px", borderRadius: "50%" }}
                                        alt="User"
                                    />
                                </li>
                            </>
                        ) : (
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Headers;