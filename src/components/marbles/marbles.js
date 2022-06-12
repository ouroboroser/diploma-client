import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isEqual } from 'lodash';
import { getRandomColor } from './colors';
import { checkIfElementIsLast } from '../../helpers/checkIfElementIsLast';
import { findFilterResult } from '../../helpers/findFilterResult';
import { findMapResult } from '../../helpers/findMapResult';
import { operatorsToDraw } from './operatorsToDraw';
import './styles.scss';

export const Marbles = () => {
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


    // const dataFromLocalStorage = JSON.parse(localStorage.getItem('operations'));

    // console.log('data', data)
    // console.log('local', dataFromLocalStorage);

    // const dataToDraw = data.length === 0 ? dataFromLocalStorage : data;

    // console.log('draw to data', dataToDraw);

    return(
        <div className = 'diagramWrapper'>
            <p className = 'diagramWrapperTitle'> Your chart will be reflected at the bottom </p>
            <div className='diagram'>
            {data.map((currentElement, index) => {
                const color = getRandomColor(0, 5);

                const isLast = checkIfElementIsLast(data, currentElement);
                const filterResult = findFilterResult(data, currentElement);
                const mapResult = findMapResult(data, currentElement);

                if (operatorsToDraw.includes(currentElement.operation)) {
                    return (
                        <div className = 'marbleWrapper' key = {index}>
                            <div className = 'marble' style={{ background: color }}>
                                <p className = 'blya'> {currentElement.operation === 'range_created' ? <p> * </p> : <p> {currentElement.arg} </p>} </p>
                                <div className ='tooltiptext'>
                                    {currentElement.operation === 'range_created' ? <p> start: true </p> : <p></p> }
                                    {currentElement.operation === 'range_created' ? <p> range values: [{currentElement.args[0]}, {currentElement.args[1]}]</p> : <p></p> }
                                    {currentElement.operation === 'filter_input' ? <p> function type: filter <br/> function: {currentElement.filter} <br/> value: {currentElement.arg} <br/> passed: {filterResult === true ? 'true' : 'false' } </p> : <p></p> }
                                    {currentElement.operation === 'map_input' ? <p> function type: map <br/> function: {currentElement.map} <br/> value: {currentElement.arg} <br/> result: {mapResult} </p> : <p></p> }
                                </div>
                            </div>

                            { isLast ? '' : 
                                <div id = 'marbleArrowId' className = 'marbleArrow'>
                                    <img src={`${process.env.PUBLIC_URL}/img/arro10.png`}
                                        alt='login'
                                        className='marbleArrow'/>
                                </div>
                            }
                        </div>
                    )
                };
            })}
            </div>
            <div className = 'showMarblesDiagram'>
                <button id = 'showMarblesDiagramBtn' 
                    onClick={() => buildMarbleDiagram()}> 
                    Build diagram
                </button>
                <button id = 'showMarblesDiagramBtn' 
                    onClick={() => saveMarbleDiagram()}> 
                    Save your diagram
                </button>
            </div>
        </div>
    )
};