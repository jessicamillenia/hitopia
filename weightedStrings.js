const mapStringToNumber = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
};

function weightedStrings(s, queries) {
    const weights = [];
    let prev = '';
    let prevWeights = 0;
    for (let i=0;i<s.length;i++){
        const num = mapStringToNumber[s[i]];
        if (prev === s[i]){
            prevWeights += num;
            weights.push(prevWeights);
        } else {
            weights.push(num);
            prevWeights = num;
        }
        prev = s[i];
    }
    
    const answer = [];
    for (let j=0;j<queries.length;j++){
        if (weights.includes(queries[j])) {
            answer.push("Yes");
        } else {
            answer.push("No");
        }
    }
    return answer;
}

console.log(weightedStrings("abbcccd", [1, 3, 9, 8])); //[ 'Yes', 'Yes', 'Yes', 'No' ]
console.log(weightedStrings("aaabbdd", [1, 3, 6, 9])); //[ 'Yes', 'Yes', 'No', 'No' ]
console.log(weightedStrings("aabccccd", [1, 3, 7, 9])); //[ 'Yes', 'Yes', 'No', 'Yes' ]
