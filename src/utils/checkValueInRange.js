export const checkFrom = ({ min, from, to }) => {
    if(from < min) {
        return min;
    } 
    const res = from - min;
    if(to - res <= min) {
        return to;
    } else {
        return from;
    }
}

export const checkTo = ({ max, from, to }) => {
    if(to > max) {
        return max;
    }
    const res = max - to;
    if(from + res >= max) {
        return from;
    } else {
        return to;
    };
}