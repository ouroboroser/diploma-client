import { useState, useEffect } from 'react';
import axios from 'axios';
import './apiKeys.scss';
import { GrBrush } from 'react-icons/gr';

export const APIKeys = () => {
    const [keys, setKeys] = useState([]);

    useEffect(() => {
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
            console.log('res', response);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    const changeKeyStatus = () => {
        console.log('w')
    };

    return (
        <div className = 'keyWrapper'>
            {/* <table className = 'apiKeyTableMain'> */}
                {/* <tr>
                    <th className = 'apiKeyTableMainTitle'> ID </th>
                    <th className = 'apiKeyTableMainTitle'> Key </th>
                    <th className = 'apiKeyTableMainTitle'> Date of creation </th>
                    <th className = 'apiKeyTableMainTitle'> Active </th>
                    <th className = 'apiKeyTableMainTitle'> Change key status </th>
                </tr> */}
                
                {keys.map((val, key) => {
                    const color = key % 2 === 0 ? '#cccaca': '#f2f2f2'

                    return (
                    <div key={key} className = 'key'>
                        <p className = 'apiKeyTableMainRow'> <span> ID: </span> {val.id } </p>
                        <p className = 'apiKeyTableMainRow'> {val.key } </p>
                        <p className = 'apiKeyTableMainRow'> {val.createdAt } </p>
                        <p className = 'apiKeyTableMainRow'> {val.disable ? 'yes' : 'no' } </p>
                        <p className = 'apiKeyTableMainRow'> <button style={{ background: color }} className = 'apiKeyTableMainBtn' onClick = {() => changeKeyStatus()}> <GrBrush /> </button></p>
                    </div>
                    )
                })}
            {/* </table> */}
        </div>
    );
};