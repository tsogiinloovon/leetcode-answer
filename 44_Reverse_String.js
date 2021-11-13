/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

//two pointer
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let pramp = s[left];
    s[left] = s[right];
    s[right] = pramp;
    left++;
    right--;
  }
};

//recursion
var reverseString = function (s) {
  if (!s.length) return "";
  let a = s.pop();
  return reverseString(s) + s.unshift(a);
};

// "h","e","l","l","o"  -> "o","l","l","e","h"

// "h",e","l","l"  -> "o"    "o","l","l","e","h"
// "h",e","l"      -> "l"    "l",l","e","h"
// "h",e"          -> "l"    "l","e",h"
// "h"             -> "e"    "e","h"
//                 -> "h"    "e"
