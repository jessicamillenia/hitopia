function isBalancedBracket(brackets) {
    const checkIsBalaced = [];
    const openingBracket = ['{', '[', '('];
    const closingBracket = ['}', ']', ')'];
    const mapClosingBracket = {
        ']': '[',
        ')': '(',
        '}': '{'
    };

    for (let i=0;i<brackets.length;i++) {
        if (openingBracket.includes(brackets[i])) {
            checkIsBalaced.push(brackets[i]);
        } else if (closingBracket.includes(brackets[i])) {
            if (checkIsBalaced.length === 0 || checkIsBalaced[checkIsBalaced.length - 1] !== mapClosingBracket[brackets[i]]) {
                return "NO";
            }
            checkIsBalaced.pop();
        }
    }

    return checkIsBalaced.length === 0 ? "YES" : "NO";
}

console.log(isBalancedBracket("{ [ ( ) ] }")); //YES
console.log(isBalancedBracket("{ [ ( ] ) }")); //NO
console.log(isBalancedBracket("{ ( ( [ ] ) [ ] ) [ ] }")); //YES
