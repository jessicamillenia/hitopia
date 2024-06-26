function highestPalindrome(s, k) {
    let numbers = s.split('');
    let replacement = 0;

    function palindrome(start, end, isPalindrome) {
        if (isPalindrome) {
            if (replacement === k || replacement + 1 === k) {
                return numbers.join('');
            }
            if (numbers[start] != '9') {
                numbers[start] = '9';
                numbers[end] = '9';
                replacement += 2;
            }
            return palindrome(start + 1, end - 1, true);
        }
        if (start > end) {
            if (replacement === k || replacement + 1 === k){
                return numbers.join('');
            } else if (replacement<k) {
                return palindrome(0, numbers.length - 1, true);
            } else {
                return '-1';
            }
        }
        
        if (numbers[start] === numbers[end]) {
            return palindrome(start + 1, end - 1, false);
        } else {
            const maxNumber = Math.max(numbers[start], numbers[end]);
            numbers[start] = maxNumber;
            numbers[end] = maxNumber;
            replacement++;
            return palindrome(start + 1, end - 1, false);
        }
    }

    return palindrome(0, numbers.length - 1, false);
}

console.log(highestPalindrome("3943", 1));
console.log(highestPalindrome("932239", 2));
