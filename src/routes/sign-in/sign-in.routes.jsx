import React, {useState} from "react";

// styling
import './sign-in.styles.scss';

// firebase utils
import { signInUserWithEmailAndPassword } from "../../utils/firebase.utils";

// navigate hook
import { useNavigate } from "react-router-dom";

// redux hooks
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.actions";

const defaultValues = {
    email: '',
    password: '',
}

const SignIn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputFields, setInputFields] = useState(defaultValues);
    const {email, password} = inputFields

    const handleSignIn = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInUserWithEmailAndPassword(email, password);

            dispatch(setCurrentUser(user));
            
            navigate('/home-page')
        }catch(error) {
            if (error.code === 'auth/wrong-password') {
                alert('Wrong password.');
            } else if (error.code === 'auth/user-not-found') {
                alert('User not found.');
            }else {
                console.log("Error: ", error);
            }
        };
    }
    

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputFields({...inputFields, [name] : value});
    }

    const goToSignUpHandler = () => {
        navigate('/sign-up');
    }

    return (
        <div className='sign-in-container'>
            <main className="pa4 black-80 sign-in-form">
                <form onSubmit={handleSignIn} className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input onChange={handleChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email-address" value={email} />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input onChange={handleChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" value={password} />
                    </div>
                    </fieldset>
                    <div className="">
                    <input style={{width: '100%', padding: '0.8rem'}} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                    <input onClick={() => goToSignUpHandler()} style={{width: '100%', padding: '0.8rem'}} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Go To Sign Up Form" />
                    </div>
                </form>
            </main>
        </div>
    )
}

export default SignIn;