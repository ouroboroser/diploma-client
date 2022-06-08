import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signUpForm.scss';
import axios from 'axios';

export const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword ] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const register = (email, password, confirmPassword) => {
        if (email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
            setError('Enter your data. Yuor must provide your email and password');
        };

        if (password !== confirmPassword) {
            setError('The entered passwords do not match, please check the data');
        };

        console.log('url:', `${process.env.REACT_APP_SERVER_FOR_INTEGRATIONS}/users/sign-up`);
        axios
        .post(`${process.env.REACT_APP_SERVER_FOR_INTEGRATIONS}/users/sign-up`, { email, password })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
    return (
    <div className = 'signUpFormWrapper'>
        <div>
            <img src={`${process.env.PUBLIC_URL}/img/welcome.png`}
                 alt = 'rxicon' width = {650} />
        </div>
        <div className = 'signUpForm'>
            <p className = 'signUpFormTitle'> Sign up </p>
            <p> <input className = 'signUpFormInpt' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/> </p>
            <p> <input type = 'password' className = 'signUpFormInpt' placeholder = 'password' value={password} onChange={(e) => setPassword(e.target.value)}/> </p>
            <p> <input type = 'password' className = 'signUpFormInpt' placeholder = 'confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/> </p>
            <p className = 'signUpFormError'> { error } </p>
            <button className='signUpFormBtn' onClick={() => register(email, password, confirmPassword)}> Enter the dashboard </button>
            <p> You have an account <Link to = '/signin'> Login </Link> </p>
            {/* <p className = 'signUpFormError'> { error } </p> */}
            </div>
        </div>
    );
};