import { useState } from 'react';
import { Link } from 'react-router-dom';
import'./loginForm.scss';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword ] = useState('');

    const auth = (email, password) => {
        console.log(email, password);
    };

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
                <p> <input className = 'loginFormInpt' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/> </p>
                <button className='signInFormBtn' onClick={() => auth(email, password)}> Enter the dashboard </button>
                <p> You don't have an account <Link to = '/signup'> Create </Link> </p>
            </div>
        </div>
    );
};