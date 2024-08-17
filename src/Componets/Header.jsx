import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
// import About from './About';
// import Contact from './Contact';

function Header() {
    return (
        <Router>
            <div className="flex justify-around items-center bg-[#F1F2F2]">
                <div>
                    <img
                        src="https://clipground.com/images/food-company-logo.png"
                        alt="Logo"
                        width={"200px"}
                        className="cursor-pointer"
                    />
                </div>
                <div className="">
                    <ul className="flex gap-11">
                        <li className="cursor-pointer hover:underline hover:border-gray-400">
                            <Link to="/">HOME</Link>
                        </li>
                        <li className="cursor-pointer hover:underline hover:border-gray-400">
                            <Link to="/about">ABOUT</Link>
                        </li>
                        <li className="cursor-pointer hover:underline hover:border-gray-400">
                            <Link to="/contact">CONTACT US</Link>
                        </li>
                        <li className="cursor-pointer hover:underline hover:border-gray-400">
                            SERVICES
                        </li>
                    </ul>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Uncomment these routes once you've imported the components */}
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </Router>
    );
}

export default Header;
