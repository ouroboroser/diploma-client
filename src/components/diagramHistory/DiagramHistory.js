import { useState, useEffect } from 'react';
import axios from 'axios';
import { Marbles } from '../marbles/Marbles';
import { operatorsToDraw } from '../currentDiagram/operatorsToDraw';
import './diagramHistory.scss';

export const DiagramHistory = () => {
    const [diagrams, setDiagram] = useState([]);
    const [loader, setLoader ] = useState(true);
    
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
            console.log(response.data);
            setDiagram(response.data);
            setLoader(false);
        })
        .catch(error => {
          console.log(error);
        });
        }, []);


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
            <>
            {diagrams.map((diagram, index) => {
            <p> {diagram.id } </p>
                return (
                <div className = 'diagramBlockWapper' key = {index}>
                    <div className = 'diagramBlockTitle'>
                        <p> <span className = 'diagramBlockSubTitle'> ID: </span> {diagram.id} </p>
                        <p> <span className = 'diagramBlockSubTitle'> DATA: </span> {diagram.data} </p>
                    </div>
                    <div className = 'diagramBlock'>
                        {/* <div> */}
                            {diagram.operations.map((o, index) => {
                                if (operatorsToDraw.includes(o.operation)) {
                                return (
                                    <Marbles allElements = {diagram.operations} index = {index} currentElement = {o} key = {index} />
                                )}
                            })}
                        {/* </div> */}
                    </div>
                    </div>
                )
            })}
        </>
    );
    }
};