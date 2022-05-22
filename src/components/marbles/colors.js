const colors = [
    '#b6acd4',
    '#e0d3e3',
    '#f0dad3',
    '#f0cad6',
    '#e3dfa4',
    '#c0dfb1',
    '#fddb93',
    '#fcc590',
    '#f2b898',
    '#d1d5eb',
];

export const getRandomColor = (min, max) => {
    const color = (Math.random() * (max - min) + min).toFixed(0);

    return colors[color];
}