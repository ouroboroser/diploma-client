import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export const Logout = () => {
    const [logout, setLogout] = useState(false);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'));
        
        if (data) {
            localStorage.removeItem('data');
            setLogout(true);
        };

    }, []);

    if (logout) {
        return (
            <Redirect to = '/' />
        )
    }

    return (
        <div> </div>
    );
};