import React from 'react';
import Logo from '../Components/Logo/Logo';
import authImg from '../assets/image/authImage.png';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
                <Logo />
            </div>
            <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
                {/* Form Section */}
                <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <div className="w-full max-w-md">
                        <Outlet />
                    </div>
                </div>
                
                {/* Image Section - Hidden on mobile */}
                <div className="flex-1 hidden lg:flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 p-8">
                    <img 
                        src={authImg} 
                        alt="Authentication illustration" 
                        className="max-w-full h-auto object-contain max-h-[600px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;