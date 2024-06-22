export function scale(
    value: number,
    inputRange: Array<number>,
    outputRange: Array<number>,
) {
    const [inMin, inMax] = inputRange;
    const [outMin, outMax] = outputRange;
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}