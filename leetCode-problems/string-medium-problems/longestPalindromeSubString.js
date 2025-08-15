// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s; // If the string is empty or has one character, it's already a palindrome

    let start = 0, end = 0;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // Length of the palindrome
    };

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i); // Odd length palindromes
        const len2 = expandAroundCenter(i, i + 1); // Even length palindromes
        const len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1); // Return the longest palindromic substring
};
// Example usage:
const s = "babad";
console.log(longestPalindrome(s)); // Output: "bab" or "aba"