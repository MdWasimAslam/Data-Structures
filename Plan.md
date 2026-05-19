# DSA Mastery Plan with JavaScript — 1 Month Roadmap (v2)

**Profile:** 2-3 hours/day · Beginner DSA · Comfortable JS · Target: Gulf-based / mid-level companies

> **About this plan:** Aligned with Namaste DSA's 17-topic curriculum (Akshay Saini). Every YouTube resource teaches in JavaScript only — no Python, Java, or C++ resources. Free path equivalent to Namaste DSA's coverage.

> **Honest expectation:** This plan makes you interview-ready for **service companies, Gulf-based mid-tier (Careem, Talabat, Property Finder, Noon, etc.), and Indian mid-tier product companies**. For FAANG / top product, you'll need 2-3 more months after this to deepen advanced topics.

---

## How to Use This Plan

1. Each topic is **completely isolated**. Finish before moving on.
2. For every topic: learn concepts → master JS methods → 10 practice (basic) → 10 LeetCode → self-check.
3. **Daily time split (2.5 hrs avg):**
   - 30-40 min: Watch video / read concept
   - 90-120 min: Solve problems (struggle 30 min before peeking)
   - 10-15 min: Update tracking sheet / re-solve one old problem
4. **Don't move on if self-check fails.** Add a buffer day.
5. **Tracking sheet (Google Sheet):** `Date | Topic | Problem | Difficulty | Solved unaided? | Re-solve date`

---

## The 30-Day Schedule (Aligned with Namaste DSA Topics)

| Days  | Topic                           | Namaste DSA Equivalent       |
| ----- | ------------------------------- | ---------------------------- |
| 1-2   | Big-O & Complexity Analysis     | Time Complexity              |
| 3-4   | Star Patterns + Math Problems   | Nested Loops, Patterns, Math |
| 5-7   | Arrays                          | Arrays                       |
| 8-9   | Strings (basic)                 | Strings                      |
| 10-11 | Searching (Linear, Binary)      | Searching                    |
| 12-13 | Sorting Algorithms              | Sorting                      |
| 14-15 | Recursion + Backtracking basics | Recursion + Backtracking     |
| 16-17 | Hashing (Map, Set, Object)      | Hash Tables                  |
| 18-19 | Two Pointers & Sliding Window   | Patterns                     |
| 20-21 | Linked Lists                    | Linked Lists                 |
| 22-23 | Stacks & Queues                 | Stacks + Queues              |
| 24-26 | Trees (Binary Tree + BST)       | Trees + BST                  |
| 27    | Heap / Priority Queue (basics)  | Heaps                        |
| 28    | Graphs (BFS, DFS basics)        | Graphs                       |
| 29    | Greedy + DP intro               | Greedy + DP                  |
| 30    | Mock interview + Review         | —                            |

> **Skipped from Namaste DSA** (intentionally — too advanced for 30 days, not commonly asked at mid-level): Advanced graph algorithms (Dijkstra, MST), 2D DP, advanced string algorithms (KMP, Rabin-Karp), Trie, Segment Tree. Tackle in month 2.

---

## Primary JavaScript Resources (Use Throughout)

These are your **only** resources. Don't add more. All teach in JavaScript or are JS-native.

| Resource                                  | What it's for                                                       | Link                                                                                                                                                  |
| ----------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **NeetCode.io**                           | Every problem with JS solution tab + video                          | [neetcode.io/roadmap](https://neetcode.io/roadmap)                                                                                                    |
| **NeetCode YouTube**                      | Problem walkthroughs (Python on video; use neetcode.io for JS code) | [youtube.com/@NeetCode](https://youtube.com/@NeetCode)                                                                                                |
| **freeCodeCamp DSA in JS — Beau Carnes**  | Free 7-hour JS-only DSA course on YouTube                           | Search YouTube: "Data Structures and Algorithms in JavaScript Full Course freeCodeCamp"                                                               |
| **Web Dev Simplified**                    | JS-native concept explanations                                      | [youtube.com/@WebDevSimplified](https://youtube.com/@WebDevSimplified)                                                                                |
| **Roadside Coder**                        | DSA in JavaScript (Hindi/English)                                   | YouTube channel: "Roadside Coder"                                                                                                                     |
| **GeeksforGeeks JS DSA**                  | Written reference with JS code                                      | [geeksforgeeks.org/learn-data-structures-with-javascript-dsa-tutorial](https://geeksforgeeks.org/learn-data-structures-with-javascript-dsa-tutorial/) |
| **JavaScript Algorithms repo (trekhleb)** | All DS & algorithms in clean JS                                     | [github.com/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)                                                        |
| **LeetCode**                              | Practice (set language to JavaScript)                               | [leetcode.com](https://leetcode.com)                                                                                                                  |

> **NeetCode note:** he codes in Python on YouTube. Watch for _intuition and approach_, then write the solution in JavaScript yourself. neetcode.io has a **JavaScript tab** with the clean solution for verification.

---

# Topic 1 — Big-O & Complexity Analysis (Days 1-2)

## Concepts

- Time complexity, space complexity
- O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ)
- Best / Average / Worst case
- Complexity of nested loops, recursion
- Complexity of common JS operations

## Complexity of common JS operations

- `push / pop`: O(1)
- `shift / unshift`: O(n)
- `slice`: O(n)
- `splice`: O(n)
- `includes / indexOf / find`: O(n)
- `sort`: O(n log n)
- Spread `[...arr]`: O(n)
- `Map.get / Map.set / Set.has`: O(1) average

## JavaScript YouTube resources

- **Web Dev Simplified — "Big O Notation Explained with Examples"**
- **freeCodeCamp — "Big O Notation in JS"** (Beau Carnes section)
- **GeeksforGeeks — Analysis of Algorithms** article

## Practice questions (10)

1. Single `for` loop from 0 to n → derive complexity
2. Two nested loops, both 0 to n → ?
3. Loop where `i = i * 2` → ?
4. Two separate (non-nested) loops of size n → ?
5. Loop from 0 to n, inside another from 0 to n/2 → ?
6. Recursive `f(n) = f(n-1) + 1` → ?
7. Recursive `f(n) = f(n/2) + 1` → ?
8. Compare `arr.includes(x)` vs `set.has(x)` — which is faster?
9. `[...arr1, ...arr2]` for sizes n and m → ?
10. `arr.unshift(x)` vs `arr.push(x)` — why do they differ?

## LeetCode questions (10)

1. [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)
2. [Richest Customer Wealth](https://leetcode.com/problems/richest-customer-wealth/)
3. [Number of Steps to Reduce a Number to Zero](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/)
4. [Count Odd Numbers in an Interval Range](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)
5. [Average Salary Excluding the Minimum and Maximum Salary](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)
6. [Find Numbers with Even Number of Digits](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)
7. [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)
8. [Build Array from Permutation](https://leetcode.com/problems/build-array-from-permutation/)
9. [Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/)
10. [Final Value of Variable After Performing Operations](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/)

## Self-check

- [ ] State complexity of any 3-loop snippet at a glance
- [ ] Explain why `unshift` is O(n) but `push` is O(1)
- [ ] Explain log n vs n vs n² with examples

---

# Topic 2 — Star Patterns + Math Problems (Days 3-4)

## Concepts

- Nested loop control
- Row/column reasoning
- Number theory: prime, factors, GCD, LCM, factorial

## JavaScript YouTube resources

- **Roadside Coder — Patterns in JavaScript** (playlist)
- **freeCodeCamp — JavaScript Basics** (Beau Carnes loops section)
- **GeeksforGeeks — Pattern Programs in JavaScript** (article)

## Practice questions (10)

1. Square pattern of `*` (n x n)
2. Right-angled triangle of `*`
3. Inverted right-angled triangle
4. Number pyramid:
   ```
        1
       1 2
      1 2 3
   ```
5. Floyd's triangle (1, 2, 3, ... in pyramid)
6. Check if number is prime
7. Print all primes from 1 to N (Sieve of Eratosthenes)
8. GCD of two numbers (Euclidean)
9. LCM of two numbers
10. Armstrong number (153 = 1³ + 5³ + 3³)

## LeetCode questions (10)

1. [Fizz Buzz](https://leetcode.com/problems/fizz-buzz/)
2. [Palindrome Number](https://leetcode.com/problems/palindrome-number/)
3. [Reverse Integer](https://leetcode.com/problems/reverse-integer/)
4. [Power of Two](https://leetcode.com/problems/power-of-two/)
5. [Power of Three](https://leetcode.com/problems/power-of-three/)
6. [Happy Number](https://leetcode.com/problems/happy-number/)
7. [Count Primes](https://leetcode.com/problems/count-primes/)
8. [Add Digits](https://leetcode.com/problems/add-digits/)
9. [Ugly Number](https://leetcode.com/problems/ugly-number/)
10. [Excel Sheet Column Number](https://leetcode.com/problems/excel-sheet-column-number/)

## Self-check

- [ ] Write any pattern with two nested loops in under 5 min
- [ ] Write prime check in 30 seconds
- [ ] Explain why GCD uses `%` and not subtraction

---

# Topic 3 — Arrays (Days 5-7)

## Concepts

- Memory layout, indexing, dynamic arrays
- Why insertion at front is O(n)
- Iteration patterns
- Prefix sum (intro)
- In-place vs new-array operations

## JS array methods to master

**Mutating:**

- `push(x)` — O(1)
- `pop()` — O(1)
- `shift()` — O(n)
- `unshift(x)` — O(n)
- `splice(start, count, ...items)` — O(n)
- `sort(comparator)` — O(n log n)
- `reverse()` — O(n)
- `fill(value)` — O(n)

**Non-mutating:**

- `slice(start, end)` — O(n)
- `concat(arr)` — O(n + m)
- `indexOf` / `includes` — O(n)
- `find` / `findIndex` — O(n)
- `filter` — O(n)
- `map` — O(n)
- `reduce` — O(n)
- `forEach` — O(n)
- `flat` / `flatMap` — O(n)
- `every` / `some` — O(n)
- `join(sep)` — O(n)

**Creation:**

- `Array.from`, `Array.of`, `new Array(n).fill(0)`, spread

## JavaScript YouTube resources

- **freeCodeCamp Beau Carnes — Arrays section in JS DSA course**
- **Web Dev Simplified — "Learn Array Methods In 15 Minutes"**
- **NeetCode.io Arrays & Hashing playlist** (JS tab)
- **Roadside Coder — Arrays DSA playlist**

## Practice questions (10) — implement from scratch

1. Find the largest element
2. Find the second largest (without sorting)
3. Reverse in-place (two-pointer swap)
4. Check if sorted
5. Remove duplicates from sorted array in-place
6. Left rotate by 1
7. Left rotate by k positions
8. Move all zeros to end (preserve order)
9. Union of two sorted arrays
10. Missing number in 1 to N (sum formula)

## LeetCode questions (10) — pure array

1. [Two Sum](https://leetcode.com/problems/two-sum/) — _NeetCode 150_
2. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) — _NeetCode 150_
3. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) — _NeetCode 150_
4. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
5. [Move Zeroes](https://leetcode.com/problems/move-zeroes/)
6. [Plus One](https://leetcode.com/problems/plus-one/)
7. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
8. [Rotate Array](https://leetcode.com/problems/rotate-array/)
9. [Majority Element](https://leetcode.com/problems/majority-element/)
10. [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) — _NeetCode 150_

## Self-check

- [ ] Implement reverse, rotate, remove-duplicates without looking
- [ ] Know complexity of every method above
- [ ] Solve Two Sum in O(n) and explain

---

# Topic 4 — Strings (Days 8-9)

## Concepts

- Strings are immutable in JS
- ASCII via `charCodeAt` / `String.fromCharCode`
- Patterns: palindrome, anagram, character frequency

## JS string methods to master

- `length`, `charAt(i)` / `str[i]` / `at(i)`
- `charCodeAt(i)` / `String.fromCharCode(code)`
- `indexOf` / `lastIndexOf` / `includes`
- `slice(start, end)` / `substring(start, end)`
- `split(sep)` / `join('')`
- `toUpperCase` / `toLowerCase`
- `trim` / `trimStart` / `trimEnd`
- `replace` / `replaceAll`
- `repeat(n)`, `padStart` / `padEnd`
- `startsWith` / `endsWith`
- `match` / `matchAll`

## JavaScript YouTube resources

- **freeCodeCamp Beau Carnes — String section in JS DSA course**
- **Web Dev Simplified — String methods in JS**
- **Roadside Coder — Strings playlist**

## Practice questions (10)

1. Reverse a string (two pointers)
2. Check palindrome
3. Count vowels and consonants
4. Character frequency map
5. Remove duplicates from string (preserve order)
6. Check anagram
7. First non-repeating character
8. Capitalize first letter of each word
9. Count words in a string
10. Replace spaces with `%20`

## LeetCode questions (10)

1. [Valid Anagram](https://leetcode.com/problems/valid-anagram/) — _NeetCode 150_
2. [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) — _NeetCode 150_
3. [Reverse String](https://leetcode.com/problems/reverse-string/)
4. [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)
5. [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)
6. [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
7. [Roman to Integer](https://leetcode.com/problems/roman-to-integer/)
8. [Length of Last Word](https://leetcode.com/problems/length-of-last-word/)
9. [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/)
10. [Group Anagrams](https://leetcode.com/problems/group-anagrams/) — _NeetCode 150_

## Self-check

- [ ] Palindrome check with two pointers in under 5 min
- [ ] Anagram check using frequency map
- [ ] Explain why string concat in loop is O(n²)

---

# Topic 5 — Searching (Days 10-11)

## Concepts

- Linear search — O(n)
- Binary search — O(log n), requires sorted
- Variants: first occurrence, last occurrence, lower/upper bound
- `mid = low + Math.floor((high - low) / 2)`

## JavaScript YouTube resources

- **NeetCode.io Binary Search playlist** (JS tab)
- **Web Dev Simplified — Binary Search in JavaScript**
- **freeCodeCamp Beau Carnes — Searching section**

## Practice questions (10)

1. Linear search (return index or -1)
2. Find max and min in single pass
3. Binary search iterative
4. Binary search recursive
5. First occurrence (with duplicates)
6. Last occurrence
7. Count occurrences in sorted array
8. Floor of x in sorted array
9. Ceiling of x in sorted array
10. Integer square root via binary search

## LeetCode questions (10)

1. [Binary Search](https://leetcode.com/problems/binary-search/) — _NeetCode 150_
2. [Search Insert Position](https://leetcode.com/problems/search-insert-position/)
3. [First Bad Version](https://leetcode.com/problems/first-bad-version/)
4. [Sqrt(x)](https://leetcode.com/problems/sqrtx/)
5. [Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/)
6. [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
7. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) — _NeetCode 150_
8. [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) — _NeetCode 150_
9. [Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/)
10. [Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/)

## Self-check

- [ ] Write binary search from scratch without bugs
- [ ] Explain overflow bug with `(low + high) / 2`
- [ ] Modify binary search for "first occurrence"

---

# Topic 6 — Sorting Algorithms (Days 12-13)

## Concepts

- Bubble — O(n²) (understanding only)
- Selection — O(n²)
- Insertion — O(n²) (best for nearly-sorted)
- Merge — O(n log n) divide & conquer
- Quick — O(n log n) avg, O(n²) worst
- Stable vs unstable
- JS `arr.sort()` defaults to lexicographic — pass comparator for numbers

## JavaScript YouTube resources

- **freeCodeCamp Beau Carnes — Sorting Algorithms in JS** (covers all 5)
- **NeetCode.io — sorting problem walkthroughs** (JS tab)
- **Web Dev Simplified — Merge Sort + Quick Sort in JavaScript**

## Practice questions (10) — implement in JS

1. Bubble Sort
2. Selection Sort
3. Insertion Sort
4. Merge Sort
5. Quick Sort
6. Dutch National Flag (sort 0s, 1s, 2s)
7. Sort array by absolute value
8. Sort objects by property
9. Sort strings by length
10. Custom comparator: numbers as strings vs numbers

## LeetCode questions (10)

1. [Sort an Array](https://leetcode.com/problems/sort-an-array/)
2. [Sort Colors](https://leetcode.com/problems/sort-colors/)
3. [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
4. [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)
5. [Largest Number](https://leetcode.com/problems/largest-number/)
6. [Merge Intervals](https://leetcode.com/problems/merge-intervals/) — _NeetCode 150_
7. [Insert Interval](https://leetcode.com/problems/insert-interval/) — _NeetCode 150_
8. [Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)
9. [Relative Sort Array](https://leetcode.com/problems/relative-sort-array/)
10. [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) — _NeetCode 150_

## Self-check

- [ ] Implement merge sort from scratch in 15 min
- [ ] Explain why `[10, 2, 1].sort()` gives `[1, 10, 2]` in JS
- [ ] Write comparator for multi-key sort

---

# Topic 7 — Recursion + Backtracking Basics (Days 14-15)

## Concepts

- Base case + recursive case
- Stack frame mental model, recursion tree
- Backtracking = recursion + undo

## JavaScript YouTube resources

- **freeCodeCamp Beau Carnes — Recursion section in JS DSA course**
- **NeetCode.io Backtracking playlist** (JS tab)
- **Web Dev Simplified — Recursion in JavaScript**
- **Roadside Coder — Recursion playlist (JS)**

## Practice questions (10)

1. Factorial of n
2. Sum of first n natural numbers
3. Print 1 to n
4. Print n to 1
5. Fibonacci nth term
6. Power: x^n in O(log n)
7. Reverse a string recursively
8. Check palindrome recursively
9. Print all subsets of an array
10. Print all permutations of a string

## LeetCode questions (10)

1. [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
2. [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) — _NeetCode 150_
3. [Power of Two](https://leetcode.com/problems/power-of-two/)
4. [Pow(x, n)](https://leetcode.com/problems/powx-n/)
5. [Reverse String](https://leetcode.com/problems/reverse-string/) — recursive
6. [Subsets](https://leetcode.com/problems/subsets/) — _NeetCode 150_
7. [Permutations](https://leetcode.com/problems/permutations/) — _NeetCode 150_
8. [Combinations](https://leetcode.com/problems/combinations/)
9. [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) — _NeetCode 150_
10. [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) — _NeetCode 150_

## Self-check

- [ ] Draw recursion tree for fibonacci
- [ ] Explain why subsets is 2^n and permutations is n!
- [ ] Identify base case in any recursive problem

---

# Topic 8 — Hashing (Days 16-17)

## Concepts

- Object vs Map vs Set — when to use which
- O(1) average lookup
- Trade space for time

## JS hash structures

- **Object `{}`** — string/symbol keys, prototype baggage
- **Map** — any key type, ordered, `.set / .get / .has / .delete / .size`
- **Set** — unique values, `.add / .has / .delete / .size`
- **WeakMap / WeakSet** — object keys, garbage-collected

**Pick Map over Object when:** non-string keys, need insertion order, need `.size`, frequent add/delete.

## JavaScript YouTube resources

- **Web Dev Simplified — "JavaScript Map vs Object"**
- **NeetCode.io Arrays & Hashing playlist** (JS tab)
- **freeCodeCamp Beau Carnes — Hash Tables in JS**

## Practice questions (10)

1. Character frequency map
2. First non-repeating character
3. Common element between two arrays
4. Intersection of two arrays
5. Union of two arrays
6. Majority element (n/2)
7. Pair with given sum
8. Count distinct elements
9. Group strings by length
10. Check if string has all unique characters

## LeetCode questions (10)

1. [Two Sum](https://leetcode.com/problems/two-sum/) — revisit with hashmap
2. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
3. [Valid Anagram](https://leetcode.com/problems/valid-anagram/)
4. [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)
5. [Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/)
6. [Happy Number](https://leetcode.com/problems/happy-number/)
7. [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/)
8. [Group Anagrams](https://leetcode.com/problems/group-anagrams/) — _NeetCode 150_
9. [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) — _NeetCode 150_
10. [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) — _NeetCode 150_

## Self-check

- [ ] Know when to pick Map over Object
- [ ] Two Sum in O(n) single pass
- [ ] Build frequency counter from memory

---

# Topic 9 — Two Pointers & Sliding Window (Days 18-19)

## Concepts

**Two Pointers** — sorted input or both ends:

- Opposite ends (palindrome, pair sum)
- Same direction (fast/slow)

**Sliding Window** — contiguous subarray/substring:

- Fixed size
- Variable size (expand & shrink)

## JavaScript YouTube resources

- **NeetCode.io Two Pointers playlist** (JS tab)
- **NeetCode.io Sliding Window playlist** (JS tab)
- **Roadside Coder — Two Pointers & Sliding Window playlist (JS)**

## Practice questions (10)

1. Pair sum in sorted array
2. Triplet sum equal to target
3. Reverse array using two pointers
4. Remove duplicates from sorted array
5. Container with most water (intuition)
6. Max sum of k consecutive elements
7. First negative number in every window of size k
8. Longest substring with all distinct characters
9. Longest substring with at most k distinct
10. Smallest subarray with sum ≥ target

## LeetCode questions (10)

**Two Pointers:**

1. [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) — _NeetCode 150_
2. [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) — _NeetCode 150_
3. [3Sum](https://leetcode.com/problems/3sum/) — _NeetCode 150_
4. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) — _NeetCode 150_
5. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

**Sliding Window:** 6. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) — _NeetCode 150_ 7. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) — _NeetCode 150_ 8. [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) 9. [Permutation in String](https://leetcode.com/problems/permutation-in-string/) — _NeetCode 150_ 10. [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) — _NeetCode 150_

## Self-check

- [ ] Recognize two pointers vs sliding window
- [ ] Write sliding window template by heart
- [ ] Solve "longest substring without repeating" in O(n)

---

# Topic 10 — Linked Lists (Days 20-21)

## Concepts

- Node: `{ val, next }`
- Singly vs doubly
- Patterns: dummy node, fast/slow pointer, reverse traversal
- Trade-offs vs arrays

## JS template

```javascript
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
```

## JavaScript YouTube resources

- **NeetCode.io Linked List playlist** (JS tab)
- **freeCodeCamp Beau Carnes — Linked List in JS**
- **Roadside Coder — Linked List playlist (JS)**

## Practice questions (10)

1. Implement LinkedList class (insert, delete, print)
2. Find length
3. Search for a value
4. Insert at head, tail, position k
5. Delete by value
6. Reverse iteratively
7. Reverse recursively
8. Detect cycle (Floyd's)
9. Find middle (fast/slow)
10. Merge two sorted lists

## LeetCode questions (10)

1. [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) — _NeetCode 150_
2. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) — _NeetCode 150_
3. [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) — _NeetCode 150_
4. [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
5. [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)
6. [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)
7. [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)
8. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) — _NeetCode 150_
9. [Reorder List](https://leetcode.com/problems/reorder-list/) — _NeetCode 150_
10. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) — _NeetCode 150_

## Self-check

- [ ] Reverse linked list iteratively AND recursively
- [ ] Find middle in one pass
- [ ] Detect cycle and explain Floyd's

---

# Topic 11 — Stacks & Queues (Days 22-23)

## Concepts

**Stack (LIFO):** array with `push` / `pop` — both O(1)
**Queue (FIFO):** array with `push` / `shift` — but `shift` is O(n)! Use two-stack queue or linked list for performance

## JavaScript YouTube resources

- **NeetCode.io Stack playlist** (JS tab)
- **freeCodeCamp Beau Carnes — Stacks and Queues in JS**
- **Web Dev Simplified — Stack & Queue in JS**

## Practice questions (10)

1. Implement Stack (array)
2. Implement Queue (array)
3. Queue using two stacks
4. Stack using two queues
5. Balanced parentheses `()[]{}`
6. Reverse string using stack
7. Min stack (push, pop, top, getMin — all O(1))
8. Next greater element (monotonic stack)
9. Circular queue
10. Evaluate postfix expression

## LeetCode questions (10)

1. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) — _NeetCode 150_
2. [Min Stack](https://leetcode.com/problems/min-stack/) — _NeetCode 150_
3. [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)
4. [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)
5. [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) — _NeetCode 150_
6. [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) — _NeetCode 150_
7. [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)
8. [Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)
9. [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) — _NeetCode 150_
10. [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/)

## Self-check

- [ ] Implement stack and queue from scratch
- [ ] Solve Valid Parens in under 10 min
- [ ] Understand monotonic stack for "next greater"

---

# Topic 12 — Trees (Binary Tree + BST) (Days 24-26)

## Concepts

**Binary Tree:**

- Node: `{ val, left, right }`
- Traversals: Inorder (L-Root-R), Preorder (Root-L-R), Postorder (L-R-Root)
- BFS (level order) — queue
- DFS — recursion
- Height, depth, diameter

**BST:**

- Left < Root < Right
- Search/insert/delete: O(log n) avg, O(n) worst
- Inorder of BST → sorted

## JS template

```javascript
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

## JavaScript YouTube resources

- **NeetCode.io Trees playlist** (JS tab — do every problem)
- **freeCodeCamp Beau Carnes — Binary Search Tree in JS**
- **Roadside Coder — Trees playlist (JS)**

## Practice questions (10)

1. Insert in BST
2. Search in BST
3. Inorder traversal (recursive)
4. Preorder traversal (recursive)
5. Postorder traversal (recursive)
6. Level order (BFS with queue)
7. Height of tree
8. Count nodes
9. Count leaf nodes
10. Min and max in BST

## LeetCode questions (10)

1. [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) — _NeetCode 150_
2. [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) — _NeetCode 150_
3. [Same Tree](https://leetcode.com/problems/same-tree/) — _NeetCode 150_
4. [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)
5. [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) — _NeetCode 150_
6. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) — _NeetCode 150_
7. [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) — _NeetCode 150_
8. [Path Sum](https://leetcode.com/problems/path-sum/)
9. [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) — _NeetCode 150_
10. [Lowest Common Ancestor of a BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) — _NeetCode 150_

## Self-check

- [ ] Write all 3 DFS traversals from memory
- [ ] BFS with queue
- [ ] Max depth + diameter recursively
- [ ] Use BST property for O(log n) search

---

# Topic 13 — Heap / Priority Queue (Day 27)

## Concepts

- Min-heap vs max-heap
- Heap = complete binary tree in array
- Parent: `(i-1)/2`, children: `2i+1`, `2i+2`
- `insert` O(log n), `extractMin/Max` O(log n), `peek` O(1)
- **JS has NO built-in PQ** — implement one OR use `@datastructures-js/priority-queue` (available on LeetCode)
- Use for: top K, scheduling

## JavaScript YouTube resources

- **NeetCode.io Heap / Priority Queue playlist** (JS tab)
- **freeCodeCamp Beau Carnes — Heap Data Structure in JS**
- **Web Dev Simplified — Priority Queue in JS**

## Practice questions (10)

1. Implement Min Heap (insert + extractMin)
2. Implement Max Heap
3. Build heap from array (heapify)
4. K smallest elements
5. K largest elements
6. Heap Sort
7. Validate min-heap array
8. Kth smallest in unsorted
9. Kth largest in unsorted
10. Merge K sorted arrays (intro)

## LeetCode questions (10)

1. [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) — _NeetCode 150_
2. [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) — _NeetCode 150_
3. [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) — _NeetCode 150_
4. [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) — _NeetCode 150_
5. [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) — _NeetCode 150_
6. [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)
7. [Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)
8. [Reorganize String](https://leetcode.com/problems/reorganize-string/)
9. [Task Scheduler](https://leetcode.com/problems/task-scheduler/) — _NeetCode 150_
10. [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) — _NeetCode 150_

## Self-check

- [ ] Implement min-heap from scratch OR use library confidently
- [ ] Recognize "find K largest/smallest" → heap
- [ ] Understand O(n log k) for top-K

---

# Topic 14 — Graphs (BFS, DFS basics) (Day 28)

## Concepts

- Representation: adjacency list (Map) vs adjacency matrix
- Directed vs undirected
- BFS — queue, shortest path in unweighted
- DFS — recursion or stack
- Visited set is mandatory
- Grid problems = graph problems

## JS template

```javascript
const graph = new Map();
graph.set(1, [2, 3]);

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
```

## JavaScript YouTube resources

- **NeetCode.io Graphs playlist** (JS tab)
- **freeCodeCamp Beau Carnes — Graphs in JS**
- **Roadside Coder — Graph DSA (JS)**

## Practice questions (10)

1. Build adjacency list from edges
2. BFS traversal
3. DFS traversal (recursive)
4. Detect cycle in undirected graph
5. Count connected components
6. BFS on grid (shortest path)
7. DFS on grid (flood fill)
8. Check if path exists
9. Print all paths source → dest
10. Reverse a directed graph (transpose)

## LeetCode questions (10)

1. [Number of Islands](https://leetcode.com/problems/number-of-islands/) — _NeetCode 150_
2. [Flood Fill](https://leetcode.com/problems/flood-fill/)
3. [Max Area of Island](https://leetcode.com/problems/max-area-of-island/)
4. [Clone Graph](https://leetcode.com/problems/clone-graph/) — _NeetCode 150_
5. [Walls and Gates](https://leetcode.com/problems/walls-and-gates/)
6. [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) — _NeetCode 150_
7. [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) — _NeetCode 150_
8. [Course Schedule](https://leetcode.com/problems/course-schedule/) — _NeetCode 150_
9. [Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
10. [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)

## Self-check

- [ ] Write BFS and DFS templates from memory
- [ ] Recognize grid as graph
- [ ] Solve Number of Islands without help

---

# Topic 15 — Greedy + DP intro (Day 29)

## Concepts

**Greedy:** locally optimal → globally optimal. Activity selection, coin change (canonical), Huffman.

**DP:** memoization (top-down) + tabulation (bottom-up). Overlapping subproblems + optimal substructure. 1D DP only at this stage.

## JavaScript YouTube resources

- **NeetCode.io 1D DP playlist** (JS tab)
- **NeetCode.io Greedy playlist** (JS tab)
- **freeCodeCamp Beau Carnes — Dynamic Programming in JS**
- **Web Dev Simplified — Memoization in JS**

## Practice questions (10)

1. Coin change — greedy (canonical denominations)
2. Activity selection problem
3. Fibonacci with memoization
4. Fibonacci with tabulation
5. Climbing stairs (1 or 2)
6. Climbing stairs (1, 2, or 3)
7. House Robber (no adjacent)
8. Min cost climbing stairs
9. Coin Change — min coins (DP)
10. Coin Change — number of ways (DP)

## LeetCode questions (10)

**Greedy:**

1. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) — _NeetCode 150_
2. [Jump Game](https://leetcode.com/problems/jump-game/) — _NeetCode 150_
3. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) (Kadane)
4. [Assign Cookies](https://leetcode.com/problems/assign-cookies/)
5. [Lemonade Change](https://leetcode.com/problems/lemonade-change/)

**DP:** 6. [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) — _NeetCode 150_ 7. [House Robber](https://leetcode.com/problems/house-robber/) — _NeetCode 150_ 8. [Coin Change](https://leetcode.com/problems/coin-change/) — _NeetCode 150_ 9. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) — _NeetCode 150_ 10. [Word Break](https://leetcode.com/problems/word-break/) — _NeetCode 150_

## Self-check

- [ ] Fibonacci memoized AND tabulated
- [ ] Solve climbing stairs + house robber unaided
- [ ] Distinguish top-down vs bottom-up
- [ ] Identify when problem is greedy vs DP

---

# Day 30 — Mock Interview + Review

## Morning (1.5 hrs)

- Random LeetCode Easy + Medium
- 45 min timer each
- Think aloud, write clean JS, test edge cases
- No peeking

## Afternoon (1 hr)

- Open tracking sheet
- Topics with most "No" answers → re-solve 3-5 problems each

## Evening (30 min)

- Plan month 2:
  - Weakest topic → first 3 days
  - Add 2-3 mediums daily
  - Target: 100 more problems

---

# After This Plan: Is It Enough?

| Target                                                       | Verdict                   | What you still need                                               |
| ------------------------------------------------------------ | ------------------------- | ----------------------------------------------------------------- |
| TCS / Infosys / Wipro / Cognizant                            | ✅ More than enough       | Nothing — focus on aptitude + behavioral                          |
| Gulf-based mid-tier (Careem, Talabat, Noon, Property Finder) | ✅ Enough if 70%+ unaided | Mock interviews, system design basics                             |
| Indian product mid-tier (Zomato, Swiggy, Razorpay)           | ⚠️ Borderline             | Re-solve NeetCode 150 once more, 100 mediums                      |
| FAANG / top product                                          | ❌ Not enough in 30 days  | 2-3 more months: 400+ problems, advanced graphs/DP, system design |

**Month 2 priorities** (if pushing further):

1. Re-solve NeetCode 150 entirely
2. 2D DP, advanced graphs (Dijkstra, Union-Find), Tries
3. Mock interviews on [pramp.com](https://pramp.com)
4. Apply — real interviews are the best practice

---

# Daily Discipline Rules

1. **Always brute force first.** Even when you see the optimal.
2. **Struggle 30 min before peeking.** The struggle is the learning.
3. **Re-solve old problems weekly.** First = familiarity. Third = mastery.
4. **One resource per topic.** Resource overload kills more learners than anything else.
5. **JavaScript only.** No translating from Python or Java in your head.
6. **Track everything.** No tracking = no improvement.
7. **One topic per day.** No mixing arrays and trees in the same session.

---

# Resources Cheat Sheet (JavaScript Only)

| Resource                             | Link                                                                                                                                                  | Use For                               |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| NeetCode.io roadmap                  | [neetcode.io/roadmap](https://neetcode.io/roadmap)                                                                                                    | Curated 150 problems (JS tab on each) |
| NeetCode YouTube                     | [youtube.com/@NeetCode](https://youtube.com/@NeetCode)                                                                                                | Problem walkthroughs                  |
| freeCodeCamp DSA in JS — Beau Carnes | YouTube search: "Data Structures and Algorithms in JavaScript Full Course freeCodeCamp"                                                               | JS-native theory                      |
| Web Dev Simplified                   | [youtube.com/@WebDevSimplified](https://youtube.com/@WebDevSimplified)                                                                                | Short JS-native explanations          |
| Roadside Coder                       | YouTube: "Roadside Coder"                                                                                                                             | DSA in JS playlists (Hindi/English)   |
| GeeksforGeeks JS DSA                 | [geeksforgeeks.org/learn-data-structures-with-javascript-dsa-tutorial](https://geeksforgeeks.org/learn-data-structures-with-javascript-dsa-tutorial/) | Written reference with JS code        |
| JavaScript Algorithms repo           | [github.com/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)                                                        | Clean JS implementations              |
| LeetCode                             | [leetcode.com](https://leetcode.com)                                                                                                                  | Practice (JS language setting)        |
| Pramp                                | [pramp.com](https://pramp.com)                                                                                                                        | Free peer mock interviews             |

---

**Final word:** Mastery is solving the same problems multiple times, not finding new resources. Trust the plan. Show up daily. In 30 days you'll be a different programmer.

Good luck. 🚀
