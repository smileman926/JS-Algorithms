/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
    const cache = {};
    return climb(0, n, cache);
};

const climb = (step, destination, cache) => {
    if (step in cache) {
        return cache[step];
    } else {
        if (step > destination) return 0;
        if (step === destination) return 1;
        else {
            cache[step] = 
                climb(step+1, destination, cache) + 
                climb(step+2, destination, cache);
            return cache[step];
        }
    }
};