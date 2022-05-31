import React, {useState} from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CgArrowLongRight } from 'react-icons/cg';
import { RiArrowDropRightLine } from 'react-icons/ri';
//import { randomColor } from 'randomcolor';
import { getRandomColor } from './colors';

import axios from 'axios';
import './styles.scss';

export const Marbles = () => {
    const [data, setData] = useState([]);

    console.log('test')

    const drawMarbleDiagram = () => {
        axios
        .get(`${process.env.REACT_APP_SERVER}/marbles`)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return(
        <div className = 'diagramWrapper'>
            <div className='diagram'>
            {data.map((d, index) => {
                const color = getRandomColor(1, 9);

                let filterResult = false;
                let mapResult = 0;
                let checkIsElementIsLast = false;

                const currentElementIndex = data.indexOf(d);
                const lastElement = data[currentElementIndex + 1];

                console.log('last:', lastElement);

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
                    Show diagram
                </button>
            </div>
        </div>
    )
};