function lengthOfLongestSubstring(s) {
  let set = new Set();
  let max = 0;
  let left = (right = 0);

  for (; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(right - left + 1, max);
  }
  return max
}

console.log(lengthOfLongestSubstring("abcabcbb"));
