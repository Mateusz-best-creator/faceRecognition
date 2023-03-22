import React, {useState, useEffect} from "react";
// react router
import { Outlet } from "react-router-dom";

// redux hook and selectors
import { useDispatch } from "react-redux";
import { setCurrentDirection } from "../../store/navigation/navigation.actions";
import { useSelector } from "react-redux";
import {selectCurrentNavigation} from '../../store/navigation/navigation.selector';

// react-router hook
import { useNavigate } from "react-router-dom";
// styling
import './navigation.styles.scss';

import { signOutUser } from "../../utils/firebase.utils";

const Navigation = () => {

    const [text, setText] = useState('SIGN OUT ');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentDirection = useSelector(selectCurrentNavigation)

    useEffect(() => {
        if (currentDirection === 'sign-in') {
            setText('SING UP');
        } else if (currentDirection === 'sign-up') {
            setText('SING IN');
        } else {
            setText('SIGN OUT');
        }
    }, [currentDirection])


    const navigateHanlder = () => {
        if (currentDirection === 'sign-in') {
            dispatch(setCurrentDirection('sign-up'))
            navigate('/sign-up');
        } else if (currentDirection === 'sign-up') {
            dispatch(setCurrentDirection('sign-in'))
            navigate('/');
        } else {
            dispatch(setCurrentDirection('sign-in'))
            navigate('/')
            signOutUser();
        }   
    }

    return (
        <>
            <div className='navigation'>
                <h2 onClick={navigateHanlder} className="nav-link">{text}</h2>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;