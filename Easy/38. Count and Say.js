const countAndSay = (n) =>{
    if(n <= 1) return '1';
    let prev = '1';
    
    for(let i = 2; i <= n; i++) {
        prev = buildResult(prev);
    }
    
    return prev;
};

const buildResult = (expr) => {
    let digit = expr[0];
    let multiplier = 0;
    let result = '';
    for(const char of expr) {
        if(digit === char) {
            multiplier +=1;
        } else {
            result = joinResult(result, multiplier, digit);
            multiplier = 1;
            digit = char;
        }
    }
    
    // last digit
    result = joinResult(result, multiplier, digit);
    
    return result;
};

const joinResult = (prev, multiplier, digit) => {
    return `${prev}${multiplier}${digit}`;
};