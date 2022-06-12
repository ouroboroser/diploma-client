export const findMapResult = (allElements, currentElement) => {
    let mapResult = 0;

    const currentElementIndex = allElements.indexOf(currentElement);

    if (currentElement.operation === 'map_input') {
        const getResultOfMapFunction = allElements[currentElementIndex + 1];
        mapResult = getResultOfMapFunction.arg;
    };

    return mapResult;
};