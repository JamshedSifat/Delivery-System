import React, { useState } from 'react';
import Logo from '../../../Components/Logo/Logo';
import { NavLink } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const links = (
        <>
            <li><NavLink to="/" className="hover:text-green-600 transition-colors duration-200">Home</NavLink></li>
            <li><NavLink to="/services" className="hover:text-green-600 transition-colors duration-200">Services</NavLink></li>
            <li><NavLink to="/about" className="hover:text-green-600 transition-colors duration-200">About</NavLink></li>
            <li><NavLink to="/delivery" className="hover:text-green-600 transition-colors duration-200">Delivery</NavLink></li>
            <li><NavLink to="/coverage" className="hover:text-green-600 transition-colors duration-200">Coverage</NavLink></li>
        </>
    );
    
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Logo />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-6 font-medium text-gray-700">
                            <li><NavLink to="/" className={({ isActive }) => `hover:text-green-600 transition-colors duration-200 ${isActive ? 'text-green-600' : ''}`}>Home</NavLink></li>
                            <li><NavLink to="/services" className={({ isActive }) => `hover:text-green-600 transition-colors duration-200 ${isActive ? 'text-green-600' : ''}`}>Services</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => `hover:text-green-600 transition-colors duration-200 ${isActive ? 'text-green-600' : ''}`}>About</NavLink></li>
                            <li><NavLink to="/delivery" className={({ isActive }) => `hover:text-green-600 transition-colors duration-200 ${isActive ? 'text-green-600' : ''}`}>Delivery</NavLink></li>
                            <li><NavLink to="/coverage" className={({ isActive }) => `hover:text-green-600 transition-colors duration-200 ${isActive ? 'text-green-600' : ''}`}>Coverage</NavLink></li>
                        </ul>
                    </div>

                    {/* Auth Buttons Section */}
                    <div className="hidden md:flex items-center gap-3">
                        <NavLink to="/signin" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
                            Sign In
                        </NavLink>
                        <NavLink to="/signup">
                            <button className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg">
                                Sign Up
                            </button>
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-green-600 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 py-4">
                        <ul className="space-y-3 font-medium text-gray-700">
                            <li><NavLink to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200">Home</NavLink></li>
                            <li><NavLink to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200">Services</NavLink></li>
                            <li><NavLink to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200">About</NavLink></li>
                            <li><NavLink to="/delivery" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200">Delivery</NavLink></li>
                            <li><NavLink to="/coverage" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200">Coverage</NavLink></li>
                            <li className="border-t border-gray-100 pt-3 mt-2">
                                <NavLink to="/signin" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200">
                                    Sign In
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup" onClick={() => setIsOpen(false)}>
                                    <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                                        Sign Up
                                    </button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;