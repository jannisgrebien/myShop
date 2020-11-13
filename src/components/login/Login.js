import React, {useState} from 'react';
import './Login.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //database login
    }

    const register = e => {
        e.preventDefault();

        //create user in database
    }

    return (
        
        <div className="login">
            <Link to="/">
                <img src={logo} className="login-logo"/>
            </Link>

            <div className="login-container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-Mail</h5>
                    <input type="text" value={email} onChange=
                    {e => setEmail(e.target.value)} />
                    
                    <h5>Password</h5>
                    <input type="password" value={password} onChange=
                    {e => setPassword(e.target.value)} />

                    <button onClick={signIn} 
                    className="login-signin-button" type="submit">Sign In</button>
                </form>

                
                <p>By signing-in you agree to JStore's
                        Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies
                        and our Interest-Based Ads.
                </p>

                <button onClick={register}
                 className="login-register-button" >Create your new Account</button>
            </div>
        </div>

    )
}

export default Login
