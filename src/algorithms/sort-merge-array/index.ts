import Runner from '../../runner';
import arrayData from './data';

const sortMergeArray = (data: { in: number[][], out: number[] }) => {
    let i = 0, j = 0;

    const { in: [a, b], out } = data;

    const aLength = a.length;
    const bLength = b.length;

    const c: number[] = [];

    while (i < aLength || j < bLength) {
        switch (true) {
            case (j < bLength && i === aLength): c.push(b[j]); j++; break; // if first array is ended
            case (i < aLength && j === bLength): c.push(a[i]); i++; break; // if second array is ended

            case (a[i] < b[j]): c.push(a[i]); i++; break;
            case (a[i] >= b[j]): c.push(b[j]); j++; break;

            default: throw new Error('Unexpected case');
        }
    }

    console.log("input:    ", a, b);
    console.log("result:   ", c);
    console.log("expected: ", out);
    console.log("------------------------------");
}

export default Runner(sortMergeArray, arrayData);
