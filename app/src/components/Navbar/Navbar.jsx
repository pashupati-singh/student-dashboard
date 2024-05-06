import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"
import Headers from '../Headers/Headers';
const VerticalNavbar = () => {
    // const [isNavbarOpen, setIsNavbarOpen] = useState(false);


    return (
        <div style={{ position: 'relative' }}>
            <Headers />
        </div>
    );
};

export default VerticalNavbar;
