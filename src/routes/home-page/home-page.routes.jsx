// react parrallax tilt
import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

import { useState, useEffect } from 'react';

// png image
import WorkingLogo from '../../assets/working.png'

// styles
import './home-page.styles.scss';

const HomePage = () => {

    const defaultUrlValue = '';
    const [imageUrlInput, setImageUrlInput] = useState(defaultUrlValue);
    const [imageUrl, setImageUrl] = useState(defaultUrlValue);

    const handleUrlChange = (event) => {
        setImageUrlInput(event.target.value);
    }

    const showPhotoHanlder = () => {
        setImageUrl(imageUrlInput);
    }

    return (
        <>
            <div className='home-page-container'> 
                <div className='photo-container'>
                    <Tilt>
                        <img className="home-logo" src={WorkingLogo} alt='' />
                    </Tilt>
                </div>

                <p className='user-counter'>currentUserName, you have uploaded 10 photos so far </p>
                <h2 style={{color: 'white'}}>You can put url in first input, give it a try!</h2>
                <div className='input-container'>
                    <div className='single-input'>
                        <input onChange={handleUrlChange} type='text' placeholder="place your image url here" value={imageUrlInput} />
                        <button onClick={showPhotoHanlder}>Show photo</button>
                    </div>
                    {/* <div className='single-input'>
                        <input type='file' placeholder="place your image url here" />
                    </div> */}
                </div>
            </div>
            <div className='image-container'>
                {console.log("image url :", imageUrl)}
                    {
                        imageUrl 
                        ? <img className='displayed-photo' src={imageUrl} alt='' />
                        : ''
                    }
            </div>
        </>
    )
}

export default HomePage