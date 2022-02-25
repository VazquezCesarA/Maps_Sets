//The following code runs: {1,2,3,4}; 

//The following code returns: 'ref';

/*  
M looks like:
{
    [1,2,3]: true,
    [1,2,3]: false
}
*/

hasDuplicate = a => a.length !== new Set(a).size;



//compare arr with set

function vowelCount(string) {
    const vowels = 'aeiou';
    let vowelCounter = new Map();
    [...string].forEach((val) => {
        if (vowels.indexOf(val) !== -1){
            let temp = vowelCounter.get(val);
            if (typeof temp === "undefined") {
                temp = 0;
            }
            vowelCounter.set(val, temp +1);
        } 
    })
    return vowelCounter;
}
//if the vowel exist add one using a counter

console.log(vowelCount("awesome"));