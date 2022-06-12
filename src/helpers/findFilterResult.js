export const findFilterResult = (allElements, currentElement) => {
    let filterResult = false;
    
    const currentElementIndex = allElements.indexOf(currentElement);

    if (currentElement.operation === 'filter_input') {
        const getResultOfFilterFunction = allElements[currentElementIndex + 1];
        
        if (getResultOfFilterFunction) {
            if (getResultOfFilterFunction.operation === 'filter_output') {
                filterResult = true;
            }
        };
    };

    return filterResult;
};