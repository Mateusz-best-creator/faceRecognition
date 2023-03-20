import React from "react";
// react router
import { Outlet } from "react-router-dom";

// react-router hook
import { useNavigate } from "react-router-dom";
// styling
import './navigation.styles.scss';

const Navigation = () => {

    const navigate = useNavigate();
    const navigateSignOut = () => {
        // we sign out but we go to sign in component
        navigate('/sign-in');
    }

    return (
        <>
            <div className='navigation'>
                <h2 onClick={navigateSignOut} className="nav-link">SIGN OUT</h2>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;