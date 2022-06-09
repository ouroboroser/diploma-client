import { useState } from 'react';
import axios from 'axios';
import './createApiKeyForm.scss';

export const CreateApiKeyForm = () => {
    const [apiKey, setApiKey] = useState('');

    const createApiKey = () => {
        const data = JSON.parse(localStorage.getItem('data'));

        const requestParams = {
            method: 'post',
            url: `${process.env.REACT_APP_SERVER_FOR_INTEGRATIONS}/diagrams/api-key`,
            headers: {
                Authorization: `Bearer ${data.token}`,
                // Host: 'pets-api.phandev.net',
            },
        };

        axios(requestParams)
        .then(response => {
            setApiKey(response.data.apiKey);
            console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    };

    return (
        <div className = 'mainWrapper'>
        <div className = 'createApiKeyFormWrapper'>
            {/* <div>
                <img src={`${process.env.PUBLIC_URL}/img/space-discovery.png`}
                     alt='rxicon'
                     className = 'createApiKeyFormWrapperImg'/>
            </div> */}
            <div className = 'createApiKeyFormWrapperForm'>
                <p className = 'createApiKeyFormWrapperFormDescription'> API Key authentication lets apps verify users’ account with an API key that is passed along with every API call </p>
                <p className = 'createApiKeyFormWrapperFormTitle'> To allow our app communicate with your app create API key </p>
                {/* <p className = 'createApiKeyFormWrapperFormTitleUnderInpt'> Your API Key </p> */}
                <p> <input className = 'createApiKeyFormWrapperFormInpt' placeholder = 'Enter confirm'/> </p>
                {/* <p className = 'createApiKeyFormWrapperFormTitleUnderInpt'> please enter <span> confirm </span> to proceed </p> */}
                <button className = 'createApiKeyFormWrapperFormBtn' onClick={() => createApiKey()}> Create </button>
                <p className = 'createApiKeyFormWrapperFormTitleUnderInpt'> Your API Key: </p>
                <p> <span className = 'createApiKeyFormWrapperFormApiKey'> {apiKey} </span> </p>
            </div>
            <div>
                <img src={`${process.env.PUBLIC_URL}/img/space-discovery.png`}
                     alt='rxicon'
                     className = 'createApiKeyFormWrapperImg'/>
            </div>
        </div>
        </div>
    );
};