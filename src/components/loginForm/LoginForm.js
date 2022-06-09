import { useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import'./loginForm.scss';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword ] = useState('');
    const [error, setError] = useState('');
    const [login, setLogin] = useState(false);

    const auth = (email, password) => {
        axios
        .post(`${process.env.REACT_APP_SERVER_FOR_INTEGRATIONS}/users/sign-in`, { email, password })
        .then(response => {
            console.log(response)
            // localStorage.setItem('data', JSON.stringify(response.data));
            setLogin(true);
        })
        .catch(e => {
            console.log(e);
            setError('Inccorect data. Please check you email or password');
        });
    };

    if (login) {
        return (
            <Redirect to = '/dashboard' />
        )
    }

    return (
        <div className = 'loginFormWrapper'>
            <div>
            <img src={`${process.env.PUBLIC_URL}/img/login.png`}
                    alt = 'rxicon' width = {650}
                    />
            </div>
            <div className = 'loginForm'>
                <p className = 'loginFormTitle'> Sign in </p>
                <p> <input className = 'loginFormInpt' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/> </p>
                <p> <input className = 'loginFormInpt' type = 'password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/> </p>
                <p className = 'signUpFormError'> { error } </p>
                <button className='signInFormBtn' onClick={() => auth(email, password)}> Enter the dashboard </button>
                <p> You don't have an account <Link to = '/signup'> Create </Link> </p>
            </div>
        </div>
    );
};