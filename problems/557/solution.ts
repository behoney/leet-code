function reverseWords(s: string): string {
  let result = "";
  const words = s.split(" ");
  for (const word of words) {
    for (let i = word.length - 1; i >= 0; i--) {
      result += word.charAt(i);
    }
    if (result.length !== s.length) result += " ";
  }
  return result;
}

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
