import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signUpForm.scss';

export const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword ] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);

    const register = (email, password, confirmPassword) => {
        //if 
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
            <button className='signUpFormBtn' onClick={() => register(email, password, confirmPassword)}> Enter the dashboard </button>
            <p> You have an account <Link to = '/signin'> Login </Link> </p>
            { error ? 'error' : 'nie error'}
            </div>
        </div>
    );
};