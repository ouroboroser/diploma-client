import { TooltipText } from '../tooltiptext/TooltipText';

import { getRandomColor } from '../currentDiagram/functional/colors';
import { checkIfElementIsLast } from '../../helpers/checkIfElementIsLast';
import { findFilterResult } from '../../helpers/findFilterResult';
import { findMapResult } from '../../helpers/findMapResult';
import './marbles.scss';

export const Marbles = props => {
    const color = getRandomColor(0, 5);

    const isLast = checkIfElementIsLast(props.allElements, props.currentElement);
    const filterResult = findFilterResult(props.allElements, props.currentElement);
    const mapResult = findMapResult(props.allElements, props.currentElement);

    return (
    <div className = 'marbleWrapper' key = {props.index}>
        <div className = 'marbleItem' style={{ background: color }}>
            <p className = 'marbleItemArg' > {props.currentElement.operation === 'range_created' ? <p> * </p> : <p> {props.currentElement.arg} </p>} </p>
            <TooltipText element = {props.currentElement} filter = {filterResult} map = {mapResult} />
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