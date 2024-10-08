import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();
    
    // Check if the current path is either /packages/:id or /dashboard
    const shouldShowFooter = !location.pathname.includes('/packages') && location.pathname !== '/dashboard';

    return (
        <>
            {/* Conditional footer rendering */}
            {shouldShowFooter && <Footer />}
        </>
    );
};

export default Layout;
