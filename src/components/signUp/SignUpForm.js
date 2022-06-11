import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './signUpForm.scss';
import axios from 'axios';

export const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [auth, setAuth] = useState(false);

    const register = (email, username, password, confirmPassword) => {
        if (email.length === 0 || username.length === 0 || password.length === 0 || confirmPassword.length === 0) {
            setError('Enter your data. Your must provide your email, name and password');
        };

        if (password !== confirmPassword) {
            setError('The entered passwords do not match, please check the data');
        };

        axios
        .post(`${process.env.REACT_APP_SERVER_FOR_INTEGRATIONS}/users/sign-up`, { email, username, password })
        .then((response) => {
            localStorage.setItem('data', JSON.stringify(response.data));
            setAuth(true);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (auth) {
        return (
            <Redirect to = '/dashboard' />
        )
    }
    
    return (
    <div className = 'signUpFormWrapper'>
        <div>
            <img src={`${process.env.PUBLIC_URL}/img/welcome.png`}
                 alt = 'rxicon' width = {650} />
        </div>
        <div className = 'signUpForm'>
            <p className = 'signUpFormTitle'> Sign up </p>
            <p> <input className = 'signUpFormInpt' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/> </p>
            <p> <input className = 'signUpFormInpt' placeholder='name' value={username} onChange={(e) => setUsername(e.target.value)}/> </p>
            <p> <input type = 'password' className = 'signUpFormInpt' placeholder = 'password' value={password} onChange={(e) => setPassword(e.target.value)}/> </p>
            <p> <input type = 'password' className = 'signUpFormInpt' placeholder = 'confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/> </p>
            <p className = 'signUpFormError'> { error } </p>
            <button className='signUpFormBtn' onClick={() => register(email, username, password, confirmPassword)}> Enter the dashboard </button>
            <p> You have an account <Link to = '/signin'> Login </Link> </p>
            {/* <p className = 'signUpFormError'> { error } </p> */}
            </div>
        </div>
    );
};