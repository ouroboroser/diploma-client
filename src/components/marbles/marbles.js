import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isEqual } from 'lodash';
import { getRandomColor } from './colors';
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

    const drawMarbleDiagram = () => {
        axios
        .post(`${process.env.REACT_APP_SERVER}/marbles`)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    // const dataFromLocalStorage = JSON.parse(localStorage.getItem('operations'));

    // console.log('data', data)
    // console.log('local', dataFromLocalStorage);

    // const dataToDraw = data.length === 0 ? dataFromLocalStorage : data;

    // console.log('draw to data', dataToDraw);

    return(
        <div className = 'diagramWrapper'>
            <div className='diagram'>
            {data.map((d, index) => {
                const color = getRandomColor(0, 5);

                let filterResult = false;
                let mapResult = 0;
                let checkIsElementIsLast = false;

                const currentElementIndex = data.indexOf(d);
                const lastElement = data[currentElementIndex + 1];

                if (!lastElement) {
                    checkIsElementIsLast = true;
                };

                if (d.operation === 'filter_input') {
                    const getResultOfFilterFunction = data[currentElementIndex + 1];

                    if (getResultOfFilterFunction) {
                        if (getResultOfFilterFunction.operation === 'filter_output') {
                            filterResult = true;
                        }
                    };
                };

                if (d.operation === 'map_input') {
                    const getResultOfMapFunction = data[currentElementIndex + 1];

                    mapResult = getResultOfMapFunction.arg;
                };

                if (['range_created', 'filter_input', 'map_input'].includes(d.operation)) {
                    return (
                        <div className = 'marbleWrapper' key = {index}>
                            <div className = 'marble' style={{ background: color }}>
                                <p className = 'blya'> {d.operation === 'range_created' ? <p> * </p> : <p> {d.arg} </p>} </p>
                                <div className ='tooltiptext'>
                                    {d.operation === 'range_created' ? <p> start: true </p> : <p></p> }
                                    {d.operation === 'range_created' ? <p> range values: [{d.args[0]}, {d.args[1]}]</p> : <p></p> }
                                    {d.operation === 'filter_input' ? <p> function type: filter <br/> function: {d.filter} <br/> value: {d.arg} <br/> passed: {filterResult === true ? 'true' : 'false' } </p> : <p></p> }
                                    {d.operation === 'map_input' ? <p> function type: map <br/> function: {d.map} <br/> value: {d.arg} <br/> result: {mapResult} </p> : <p></p> }
                                </div>
                            </div>

                            { checkIsElementIsLast ? '' : 
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
                    onClick={() => drawMarbleDiagram()}> 
                    Build diagram
                </button>
            </div>
        </div>
    )
};