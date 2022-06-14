import { MdOutlineHttp } from 'react-icons/md';
import { TooltipText } from '../tooltiptext/TooltipText';
import { getRandomColor } from '../currentDiagram/functional/colors';
import { checkIfElementIsLast } from '../../helpers/checkIfElementIsLast';
import { findFilterResult } from '../../helpers/findFilterResult';
import { findMapResult } from '../../helpers/findMapResult';
import { operatorsToDraw } from '../currentDiagram/operatorsToDraw';
import './marbles.scss';

export const Marbles = props => {
    const color = getRandomColor(0, 5);

    const filteredData = [];
            
    props.allElements.forEach(el => {
        if (operatorsToDraw.includes(el.operation)) {
            filteredData.push(el);
        };
    });

    const isLast = checkIfElementIsLast(filteredData, props.currentElement);
    const filterResult = findFilterResult(props.allElements, props.currentElement);
    const mapResult = findMapResult(props.allElements, props.currentElement);

    console.log('map', mapResult)

    // let m;

    // if (props.currentElement.operation === 'range_created') {
    //     console.log('1');
    //     m = <p className = 'marbleItemArg' > {props.currentElement.operation === 'range_created' ? <p> * </p> : <p> {props.currentElement.arg} </p>} </p>
    // };

    // if (props.currentElement.operation === 'range_created') {
    //     console.log('2');
    //     m = <p className = 'marbleItemArg' > {props.currentElement.operation === 'of_created' ? <p> * </p> : <p> {props.currentElement.arg} </p>} </p>
    // }

    return (
    <div className = 'marbleWrapper' key = {props.index}>
        <div className = 'marbleItem' style={{ background: color }}>
            {/* {() => {
                if (props.currentElement.operation === 'range_created') {
                    return (<p className = 'marbleItemArg' > {props.currentElement.operation === 'range_created' ? <p> * </p> : <p> {props.currentElement.arg} </p>} </p>)
                } else {
                    return (<p className = 'marbleItemArg' > {props.currentElement.operation === 'of_created' ? <p> * </p> : <p> {props.currentElement.arg} </p>} </p>)
                }
            }} */}
            {
                props.currentElement.operation === 'range_created' ?
                <p className = 'marbleItemArg' > {props.currentElement.operation === 'range_created' ? <p> * </p> : <p> {props.currentElement.arg} </p>} </p> :
                props.currentElement.operation === 'of_created' ? 
                <p className = 'marbleItemArg' > {props.currentElement.operation === 'of_created' ? <p> * </p> : <p> {props.currentElement.arg} </p>} </p> :


                <p className = 'marbleItemArg' > {props.currentElement.operation === 'map_input' ? <p> {props.currentElement.arg} </p> : <p> { props.currentElement.operation === 'filter_input' ? <p> {props.currentElement.arg} </p> : <MdOutlineHttp size = {35}/>} </p>} </p>
            }
            <TooltipText element = {props.currentElement} filter = {filterResult} map = {mapResult ? mapResult : 'will be done http request'} />
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