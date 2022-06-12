import { useState, useEffect } from 'react';
import axios from 'axios';

export const DiagramHistory = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'));
        
        const requestParams = {
            method: 'get',
            url: `${process.env.REACT_APP_SERVER_FOR_INTEGRATIONS}/diagrams/history`,
            headers: {
                Authorization: `Bearer ${data.token}`,
            },
        };
        
        axios(requestParams)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
        }, []);

    return (
        <div>
            text
        </div>
    );
};