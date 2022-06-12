export const checkIfElementIsLast = (allElements, currentElement ) => {
    let isLast = false;
    
    const currentElementIndex = allElements.indexOf(currentElement);
    const lastElement = allElements[currentElementIndex + 1];
    
    if (!lastElement) {
        isLast = true;
    };

    return isLast;
};