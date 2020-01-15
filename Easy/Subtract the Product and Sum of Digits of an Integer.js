/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var sub=n.toString();
    var output=[];
    var sum=0;
    var multiple=1;
    for(var i=0;i<sub.length;i++)
        {
            multiple*=Number(sub.charAt(i));
            sum+= Number(sub.charAt(i));
        }
    return multiple-sum;
};