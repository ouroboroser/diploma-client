import { useState, useEffect } from 'react';
import axios from 'axios';
import './createApiKeyForm.scss';

export const CreateApiKeyForm = () => {
    const [apiKey, setApiKey] = useState('');
    const [apiKeyIsExists, setApiKeyIsExists] = useState(false);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(false);
    const [confirm, setConfirm] = useState('');

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'));

        const requestParams = {
            method: 'get',
            url: `${process.env.REACT_APP_SERVER_FOR_INTEGRATIONS}/diagrams/api-key/active`,
            headers: {
                Authorization: `Bearer ${data.token}`,
            },
        };
        
        axios(requestParams)
        .then(response => {
            // setKeys(response.data);
            console.log('res', response.data);
            setApiKeyIsExists(response.data.apiKeyStatus);
            setApiKey(response.data.apiKey);
            setLoader(false);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    const createApiKey = (confirm) => {
        if (confirm.length === 0) {
            setError(true);
        };

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
                { loader ?   <img className = 'createApiKeyFormWrapperFormLoader' style = {{marginTop: 10}} src={`${process.env.PUBLIC_URL}/img/loader.gif`} 
                                  alt = 'rxicon' 
                                  width = {30}
                />
                : '' }
                {/* <p className = 'createApiKeyFormWrapperFormTitleUnderInpt'> Your API Key </p> */}
                <p> <input className = 'createApiKeyFormWrapperFormInpt' placeholder = 'Enter confirm' value={confirm} onChange={(e) => setConfirm(e.target.value)}/> </p>
                <p className = 'createApiKeyFormWrapperFormError'> {error ? 'You need to confirm action' :  '' } </p>
                {/* <p className = 'createApiKeyFormWrapperFormTitleUnderInpt'> please enter <span> confirm </span> to proceed </p> */}
                <button disabled = {apiKeyIsExists ? true : error ? true : false } className = 'createApiKeyFormWrapperFormBtn' style = {{background: apiKeyIsExists ? '#ec8480' : error ?'#ec8480' : '#EC615B'}} onClick={() => createApiKey(confirm)}> Create </button>
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