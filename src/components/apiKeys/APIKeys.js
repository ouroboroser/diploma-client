import { useState, useEffect } from 'react';
import axios from 'axios';
import './apiKeys.scss';

export const APIKeys = () => {
    const [keys, setKeys] = useState([]);
    const [username, setUsername] = useState('');
    const [loader, setLoader ] = useState(true);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'));
        setUsername(data.username);

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
            setLoader(false);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    const changeKeyStatus = () => {
        console.log('w')
    };

    if (loader) {
        return (
            <div className = 'loader'>
                <img style = {{marginTop: 10 }} src={`${process.env.PUBLIC_URL}/img/catLoader.gif`}
                 alt = 'rxicon' width = {700}
                 />
                 <p className = 'loaderTitle' > We need time ... </p>
            </div>
        );
    } else {


    return (
        <div className = 'keyWrapper'>
            <p> {username}, here you can see the whole list of keys </p>
            {keys.map((val, key) => {
                const data = String(val.createdAt).split('T')[0];

                return (
                <div key={key} className = 'key'>
                    <p className = 'keyItem'> <span className = 'keyItemName'> ID: </span> <span> {val.id } </span> </p>
                    <p className = 'keyItem'> <span className = 'keyItemName'> KEY: </span> {val.key } </p>
                    <p className = 'keyItem'> <span className = 'keyItemName'> DATA: </span> <span> {data} </span> </p>
                    <p className = 'keyItem'> <span className = 'keyItemName'> ACTIVE: </span> <span> {val.disable ? 'yes' : 'no' } </span> </p>
                    <p className = 'keyItem'> <span className = 'keyItemName'> CHANGE STATUS: </span> <span> <button className='keyItemBtn'onClick={() => changeKeyStatus()}> edit </button> </span> </p>
                </div>
                )
            })}
        </div>
    );
        };
};