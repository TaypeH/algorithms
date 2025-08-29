const Runner = <T>(task: (data: T) => void, arrayData: T[]) => ({
    run: () => {
        for (const data of arrayData) task(data)
    }
});


export default Runner;
