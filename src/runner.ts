const Runner = (task: (data: { in: number, out: number }) => void, arrayData: { in: number, out: number }[]) => ({
    run: () => {
        for (const data of arrayData) task(data)
    }
});


export default Runner;
