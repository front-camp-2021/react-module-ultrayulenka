export const roundValue = ({ value, precision }) => {
    const newValue = value * Math.pow(10, precision);
    const res = Math.round(newValue) / Math.pow(10, precision)
    return res;
}