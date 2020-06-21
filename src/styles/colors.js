
const COLORS = {
    blue: 'rgb(0, 122, 255)',
    green: 'rgb(52, 199, 89)',
    indigo: 'rgb(88, 86, 214)',
    lightindigo: 'rgb(125, 122, 255)',
    orange: 'rgb(255, 149, 0)',
    lightorange: 'rgb(255, 179, 64)',
    pink: 'rgb(255, 45, 85)',
    lightpink: 'rgb(255, 100, 130)',
    purple: 'rgb(175, 82, 222)',
    lightpurple: 'rgb(218, 143, 255)',
    red: 'rgb(255, 59, 48)',
    darkRed: '#aa0000',
    lightred: 'rgb(255, 105, 97)',
    teal: 'rgb(00, 200, 250)',
    lightteal: 'rgb(112, 215, 255)',
    yellow: 'rgb(255, 204, 0)',
    lightyellow: 'rgb(255, 212, 38)',

    darkBlue: 'rgb(0,56,165)',
    lightblue: 'rgb(89 ,191 ,229)',
    lightgreen: '#77BC1F',
    lightorange: '#f9a938',

    tdp_lightPurple: '#52589B',
    tdp_purple: '#34368d',

    signIn: '#c2312a',

    // green scale
    tealGreen: '#128C7E',
    tealGreenDark: '#075E54',
    lightGreen: '#25D366',
    smoothGreen: '#4CAF50',


    // gray scale
    white: 'rgb(255, 255, 255)',

    lightgray: "#f6f6f6",
    lightgray7: 'rgb(138, 132, 125)',
    lightgray6: 'rgb(242, 242, 247)',
    lightgray5: 'rgb(229, 229, 234)',
    lightgray4: 'rgb(209, 209, 214)',
    lightgray3: 'rgb(199, 199, 204)',
    lightgray2: 'rgb(174, 174, 178)',

    gray: '#CCCCCC',
    darkgray2: 'rgb(99, 99, 102)',
    darkgray3: 'rgb(72, 72, 74)',
    darkgray4: 'rgb(58, 58, 60)',
    darkgray5: 'rgb(44, 44, 46)',
    darkgray6: 'rgb(28, 28, 30)',
    darkgray7: 'rgb(20, 20, 22)',
    darkgray8: 'rgb(10, 10, 12)',
    black: 'rgb(0, 0, 0)',

    // brands
    facebook: 'rgb(60, 90, 153)',

    // defaults
    transparent: 'rgba(255, 255, 255, 0)',
    // background: 'rgb(254, 254, 254)'
    background: 'rgb(0, 0, 0)',
    background_gray: 'rgb(254, 254, 254)',
}

export const rgba = (name, opacity) => {
    return COLORS[name].replace(')', `, ${opacity})`).replace('rgb', 'rgba');
};

export default COLORS;