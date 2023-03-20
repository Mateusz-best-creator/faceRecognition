import React, {useState} from "react";

// styling
import './sign-up.styles.scss';
// firebase sign up function
import {
    signUpUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../utils/firebase.utils';

const defaultValues = {
    firstame: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {

    const [inputFields, setInputFields] = useState(defaultValues);
    const { displayName, email, password, confirmPassword } = inputFields;

    const handleSignUp = async (event) => {
        event.preventDefault();
        
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
        }

        try {
            const {user} = await signUpUserWithEmailAndPassword(email, password);
            
            await createUserDocumentFromAuth(user);

        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email arleady in use');
            } else {
                console.log("Error: ", error);
            }
        };
        
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputFields({...inputFields, [name]: value})
    }

    return (
        <div className='sign-up-container'>
            <main className="pa4 black-80 sign-up-form">
                <form onSubmit={handleSignUp} className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="first-name">First Name</label>
                        <input onChange={handleChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="firstame"  id="first-name" value={displayName} />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input onChange={handleChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email-address" value={email}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input onChange={handleChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" value={password}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
                        <input onChange={handleChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="confirmPassword"  id="password" value={confirmPassword} />
                    </div>
                    </fieldset>
                    <div className="">
                    <input style={{width: '100%', padding: '0.8rem'}} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                    <input style={{width: '100%', padding: '0.8rem'}} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign up" />
                    </div>
                </form>
            </main>
        </div>
    )
}

export default SignUp;