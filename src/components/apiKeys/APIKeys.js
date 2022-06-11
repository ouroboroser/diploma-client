import { useState } from 'react';
import axios from 'axios';
import { data } from './data';

export const APIKeys = () => {
    const [keys, setKeys] = useState([]);

    const getKeys = () => {
        const data = JSON.parse(localStorage.getItem('data'));

        const requestParams = {
            method: 'get',
            url: `${process.env.REACT_APP_SERVER_FOR_INTEGRATIONS}/diagrams/api-key`,
            headers: {
                Authorization: `Bearer ${data.token}`,
            },
        };
        
        axios(requestParams)
        .then(response => {
            setKeys(response.data);
            console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }; 

    return (
        <div>
            {data.map((key, index) => {
                return (
                    <div>
                        <span> {key.id} </span>
                        <span> {key.key} </span>
                        <span> {key.createdAt } </span>
                        <span> {key.disable } </span>
                    </div>
                )
            })}
            <button className='signInFormBtn' onClick={() => getKeys()}> Enter the dashboard </button>
        </div>
    );
};