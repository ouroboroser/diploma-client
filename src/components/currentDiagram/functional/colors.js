// const colors = [
//     '#b6acd4',
//     '#e0d3e3',
//     '#f0dad3',
//     '#f0cad6',
//     '#e3dfa4',
//     '#c0dfb1',
//     '#fddb93',
//     '#fcc590',
//     '#f2b898',
//     '#d1d5eb',
// ];

const colors = [
    '#62bfc7',
    '#f0a41f',
    '#de594f',
    '#6769c2',
    '#2b686e',
    '#d15c54'
];

export const getRandomColor = (min, max) => {
    const color = (Math.random() * (max - min) + min).toFixed(0);

    // if (color > 3) {
    //     return colors[3];
    // }

    return colors[color];
}