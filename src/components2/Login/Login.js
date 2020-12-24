import React , { useState } from 'react';
import './Login.css';
import { Link,useHistory } from 'react-router-dom';
import { auth } from '../Firebase/Firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) => {
                history.push('/');
            })
            .catch( e => alert(e.message));
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/');
            })
            .catch( e => alert(e.message));
    }
    return (
        <div  className="login">
            <Link to="/">
                <img 
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
                alt="">
                </img>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={(event) => setEmail(event.target.value)} type="email"></input>
                    <h5>Password</h5>
                    <input value={password} onChange={(event) => setPassword(event.target.value)} type="password"></input>
                    <button className="login__signInButton" onClick={login} type="submit">Sign In</button>
                </form>
                <p className="p">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__RegisterButton">Create Your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login;
