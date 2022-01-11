/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  s.push(...s.reverse());
  for (let i: number = 0; i < s.length; i++) {
    s.shift();
  }
}

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
