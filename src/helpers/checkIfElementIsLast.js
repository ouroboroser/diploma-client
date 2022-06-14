import { operatorsToDraw } from '../components/currentDiagram/operatorsToDraw';

export const checkIfElementIsLast = (allElements, currentElement ) => {
    let isLast = false;

    const currentElementIndex = allElements.indexOf(currentElement);
    const lastElement = allElements[currentElementIndex + 1];

    // console.log('LAST ELEMENT', lastElement);
    
    if (!lastElement) {
        isLast = true;
    };

    return isLast;
};