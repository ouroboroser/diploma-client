import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isEqual } from 'lodash';
import { operatorsToDraw } from './operatorsToDraw';
import { Marbles } from '../marbles/Marbles';
import './styles.scss';

export const CurrentDiagram = () => {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     setInterval(() => {
    //         axios
    //         .post(`${process.env.REACT_APP_SERVER}/marbles`)
    //         .then((response) => {
    //             const retrievedDataFromServer = response.data;
    //             const retrievedDataFromLocalStorage = JSON.parse(localStorage.getItem('operations'));

    //             const equal = isEqual(retrievedDataFromLocalStorage, retrievedDataFromServer);
                
    //             if (!equal) {
    //                 localStorage.setItem('operations', JSON.stringify(retrievedDataFromServer, null, 2));
    //                 setData(retrievedDataFromServer);
    //             };
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    //     }, 1000)});

    const buildMarbleDiagram = () => {
        axios
        .post(`${process.env.REACT_APP_SERVER}/marbles`)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const saveMarbleDiagram = () => {
        console.log('work');
    };

    return(
        <div className = 'diagramWrapper'>
            <p className = 'diagramWrapperTitle'> Your chart will be reflected at the bottom </p>

            <div className='diagram'>
            {data.map((el, key) => {
                if (operatorsToDraw.includes(el.operation)) {
                    return (<Marbles allElements = {data} index = {key} currentElement = {el} />);
                };
            })}
            </div>

            <div className = 'showMarblesDiagram'>
                <button className = 'showMarblesDiagramBtn' 
                    onClick={() => buildMarbleDiagram()}> 
                    Build diagram
                </button>
                <button className = 'showMarblesDiagramBtn' 
                    onClick={() => saveMarbleDiagram()}> 
                    Save your diagram
                </button>
            </div>
            
        </div>
    )
};