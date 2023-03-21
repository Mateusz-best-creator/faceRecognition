import React from "react";
// react router
import { Outlet } from "react-router-dom";

// react-router hook
import { useNavigate } from "react-router-dom";
// styling
import './navigation.styles.scss';

// redux hooks
import { useDispatch } from "react-redux";
import {setCurrentUser} from '../../store/user/user.actions';

const Navigation = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navigateSignOut = () => {
        dispatch(setCurrentUser(null));
        // we sign out but we go to sign in component
        navigate('/');
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