export default function splitArray<T>(array: T[], numParts: number) {
    const result: Array<Array<T>> = [];

    for (let i = 0; i < array.length; i++) {
        const index = i % numParts;
        if (!result[index]) {
            result[index] = [];
        }
        result[index].push(array[i]);
    }
    return result;
}
