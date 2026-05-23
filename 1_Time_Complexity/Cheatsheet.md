# 🎯 Big O Cheat Sheet — Simple & Complete

> **What is Big O?**
> Big O tells you: **"When my input gets bigger, how much slower does my code get?"**
>
> It's NOT about seconds. It's about the **pattern** of slowdown.

---

## 🎨 The 5 Patterns (Simple Names)

From **FASTEST** to **SLOWEST**:

| Big O | Simple Name | What It Means |
|-------|-------------|---------------|
| **O(1)** | ⚡ Same Speed | Speed never changes, no matter the input size |
| **O(log n)** | 🪜 Halving | Each step cuts the work in half — very fast |
| **O(n)** | 📏 Straight Line | Speed grows the same as input (10 items = 10 steps) |
| **O(n log n)** | 📏🪜 Line + Halving | A loop with halving inside it |
| **O(n²)** | 💣 Explosion | Speed explodes — a loop inside a loop |

**Order to remember:** ⚡ < 🪜 < 📏 < 📏🪜 < 💣

---

## 📐 The 3 Golden Rules

### Rule 1: Throw Away Numbers (Constants)
- `2n` → `n`
- `100n` → `n`
- `n²/2` → `n²`

**Why?** Big O cares about the **pattern**, not the exact count.

### Rule 2: Side by Side = ADD, Keep the Biggest
- `n + log n` → `n` (n is bigger, keep it)
- `n² + n` → `n²` (n² is bigger, keep it)

**When loops are NEXT to each other → add → keep the bigger one.**

### Rule 3: Inside Each Other = MULTIPLY
- Loop of `n` **inside** loop of `n` → `n × n` = `n²`
- Loop of `n` **inside** loop of `log n` → `n × log n` = `n log n`

**When a loop is INSIDE another loop → multiply them.**

---

## 🔍 How to Spot Each Pattern

### ⚡ O(1) — Same Speed
**Sign:** No loops. Just grabbing something or doing a fixed number of steps.

```javascript
function getFirst(arr) {
  return arr[0];     // 1 step, done
}

function print5Times() {
  console.log("a");
  console.log("b");
  console.log("c");
  console.log("d");
  console.log("e");  // 5 is FIXED, not based on input → still O(1)
}
```

**Test:** Does the work change when input gets bigger? **No → O(1).**

---

### 🪜 O(log n) — Halving Pattern
**Sign:** Counter is **doubled** (`i *= 2`) or **halved** (`n / 2`) each step.

```javascript
function halving(n) {
  while (n > 1) {
    n = Math.floor(n / 2);   // n cuts in half each time
  }
}

function doubling(arr) {
  for (let i = 1; i < arr.length; i *= 2) {  // i doubles: 1, 2, 4, 8...
    console.log(i);
  }
}
```

**Test:** Is the counter doubled or halved? **Yes → O(log n).**

**Real example:** Binary search (keeps cutting the array in half).

---

### 📏 O(n) — Straight Line
**Sign:** One loop that touches every item.

```javascript
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);   // 10 items = 10 prints
  }
}
```

**Even two loops are still O(n) if they're NOT nested:**
```javascript
function twoLoops(arr) {
  for (let i = 0; i < arr.length; i++) { ... }   // n steps
  for (let i = 0; i < arr.length; i++) { ... }   // n steps
  // Total: 2n → throw away the 2 → O(n)
}
```

---

### 📏🪜 O(n log n) — Line + Halving
**Sign:** A loop through the data, with halving/doubling INSIDE it.

```javascript
function lineWithHalving(arr) {
  for (let i = 0; i < arr.length; i++) {   // outer: n times
    let n = arr.length;
    while (n > 1) {                         // inner: log n times
      n = Math.floor(n / 2);
    }
  }
  // n × log n → O(n log n)
}
```

**Real example:** Smart sorting (Merge Sort, Quick Sort).

---

### 💣 O(n²) — Explosion
**Sign:** A loop INSIDE another loop, both depending on `n`.

```javascript
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);   // 10 items = 100 prints, 100 = 10,000!
    }
  }
}
```

**⚠️ Even when the inner loop shrinks, still O(n²):**
```javascript
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {   // shrinks but still O(n²)
    ...
  }
}
```

---

## 📚 ALL Array Methods — Big O Reference

### ⚡ O(1) — Same Speed (FAST)

| Method | What It Does | Why O(1)? |
|--------|--------------|-----------|
| `arr[i]` | Access by index | Jumps straight to any position |
| `arr.length` | Get the size | Just a lookup |
| `push(x)` | Add to **end** | No other items move |
| `pop()` | Remove from **end** | No other items move |

```javascript
const arr = [10, 20, 30];
arr[1];        // 20    → O(1)
arr.length;    // 3     → O(1)
arr.push(40);  // [10, 20, 30, 40]  → O(1)
arr.pop();     // [10, 20, 30]      → O(1)
```

---

### 📏 O(n) — Straight Line (Touches Every Item)

| Method | What It Does | Why O(n)? |
|--------|--------------|-----------|
| `shift()` | Remove from **front** | Every other item shifts left |
| `unshift(x)` | Add to **front** | Every existing item shifts right |
| `indexOf(x)` | Find index of value | Checks items one by one |
| `includes(x)` | Check if value exists | Checks items one by one |
| `find()` | Find first matching item | Checks items one by one |
| `filter()` | Keep matching items | Checks every item |
| `map()` | Transform every item | Visits every item |
| `forEach()` | Loop through items | Visits every item |
| `reduce()` | Combine into one value | Visits every item |
| `reverse()` | Flip the order | Swaps every item |
| `slice()` | Copy part of array | Copies each item in range |
| `concat()` | Join two arrays | Copies all items |
| `join()` | Convert to string | Visits every item |
| `splice()` | Add/remove anywhere | Shifts items after the change |
| `flat()` | Flatten nested arrays | Visits every item |

```javascript
const arr = [1, 2, 3, 4, 5];

arr.shift();           // [2, 3, 4, 5]    → O(n)
arr.unshift(0);        // [0, 2, 3, 4, 5] → O(n)
arr.indexOf(3);        // 2               → O(n)
arr.includes(4);       // true            → O(n)
arr.find(x => x > 2);  // 3               → O(n)
arr.filter(x => x > 2);// [3, 4, 5]       → O(n)
arr.map(x => x * 2);   // [2, 4, 6, 8, 10]→ O(n)
arr.reverse();         // flips order     → O(n)
arr.slice(1, 3);       // copies items    → O(n)
```

---

### 📏🪜 O(n log n) — Line + Halving

| Method | What It Does | Why O(n log n)? |
|--------|--------------|-----------------|
| `sort()` | Sort the array | Uses smart sorting under the hood |

```javascript
const arr = [3, 1, 4, 1, 5, 9];
arr.sort();   // [1, 1, 3, 4, 5, 9]  → O(n log n)
```

---

## 🎯 The MOST Important Patterns to Remember

### 1️⃣ End is FAST, Front is SLOW
```javascript
arr.push(x);    // ✅ O(1) — fast
arr.pop();      // ✅ O(1) — fast
arr.unshift(x); // ❌ O(n) — slow
arr.shift();    // ❌ O(n) — slow
```
**Lesson:** When you can choose, always work with the **end** of the array.

### 2️⃣ Anything That "Visits Every Item" is O(n)
`map`, `filter`, `forEach`, `reduce`, `find` — all O(n).

### 3️⃣ Searching an Array is O(n)
`indexOf`, `includes`, `find` — all walk through one by one.
**💡 Tip:** Need fast lookups? Use a **Set** or **Object/Map** — those are O(1).

### 4️⃣ Hidden O(n²) Trap
**Calling an O(n) method INSIDE an O(n) loop = O(n²).**

```javascript
// ❌ O(n²) — slow!
for (let i = 0; i < arr.length; i++) {   // O(n)
  if (arr.includes(something)) { ... }    // O(n) inside!
}

// ✅ O(n) — fast
const set = new Set(arr);                  // O(n) once
for (let i = 0; i < arr.length; i++) {     // O(n)
  if (set.has(something)) { ... }          // O(1) — fast lookup!
}
```

---

## ⚠️ The 3 Traps Everyone Falls Into

### Trap 1: Fixed Numbers Are NOT n
```javascript
for (let i = 0; i < arr.length; i++) {
  for (let k = 0; k < 100; k++) {   // 100 is FIXED!
    ...
  }
}
// n × 100 → throw away the 100 → O(n) (NOT O(n²))
```
**Lesson:** Only loops that depend on `n` count toward Big O.

### Trap 2: Side by Side vs Inside
```javascript
// SIDE BY SIDE (add): O(n) + O(log n) = O(n)
for (let i = 0; i < arr.length; i++) { ... }
while (n > 1) { n = n / 2; }

// INSIDE (multiply): O(n) × O(log n) = O(n log n)
for (let i = 0; i < arr.length; i++) {
  while (n > 1) { n = n / 2; }
}
```

### Trap 3: `i *= 2` is NOT Straight Line
```javascript
for (let i = 1; i < arr.length; i *= 2) { ... }
// i goes 1, 2, 4, 8, 16... it DOUBLES
// → O(log n), NOT O(n)
```

---

## 🧠 The ONE Question to Ask

For each loop, ask:

> **"How does the number of steps change when input gets bigger?"**

| What You See | Pattern |
|--------------|---------|
| `i++` or `i--` | Grows in a straight line → **O(n)** |
| `i *= 2` or `i /= 2` | Grows by halving → **O(log n)** |
| `i < 100` (fixed number) | Doesn't grow → **O(1)** |
| No loop at all | **O(1)** |

---

## 📝 Step-by-Step Method for ANY Problem

1. **Count the loops.**
2. **Figure out the Big O of each loop** (use the table above).
3. **Are loops inside each other, or side by side?**
   - Inside → **multiply**
   - Side by side → **add, keep the biggest**
4. **Throw away constants** (`100n` → `n`).
5. **Throw away smaller terms** (`n² + n` → `n²`).

---

## ✅ Practice Examples With Solutions

### Example 1
```javascript
function example(arr) {
  return arr[0] + arr[arr.length - 1];
}
```
**Answer: O(1)** — No loops, just two lookups.

---

### Example 2
```javascript
function example(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```
**Answer: O(n)** — One loop through every item.

---

### Example 3
```javascript
function example(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```
**Answer: O(n²)** — Loop inside a loop. n × n = n².

---

### Example 4
```javascript
function example(n) {
  while (n > 1) {
    n = Math.floor(n / 2);
  }
}
```
**Answer: O(log n)** — n is halved each step.

---

### Example 5
```javascript
function example(arr) {
  // Part A
  for (let i = 0; i < arr.length; i++) { ... }
  // Part B
  let n = arr.length;
  while (n > 1) { n = n / 2; }
}
```
**Answer: O(n)** — Side by side: n + log n → keep the bigger → O(n).

---

### Example 6
```javascript
function example(arr) {
  for (let i = 0; i < arr.length; i++) {
    let n = arr.length;
    while (n > 1) { n = n / 2; }
  }
}
```
**Answer: O(n log n)** — Inside each other: n × log n.

---

### Example 7
```javascript
function example(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < 50; k++) {
      console.log(i, k);
    }
  }
}
```
**Answer: O(n)** — Inner loop is FIXED at 50. n × 50 → throw away 50 → O(n).

---

### Example 8
```javascript
function example(arr) {
  for (let i = 1; i < arr.length; i *= 2) {
    console.log(i);
  }
}
```
**Answer: O(log n)** — `i` doubles each step.

---

### Example 9 — Watch the trap!
```javascript
function example(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {   // O(n)
    if (!result.includes(arr[i])) {         // O(n) inside!
      result.push(arr[i]);
    }
  }
  return result;
}
```
**Answer: O(n²)** — `includes` is O(n), inside an O(n) loop = O(n²).

---

### Example 10
```javascript
function example(arr) {
  arr.push(1);     // O(1)
  arr.pop();       // O(1)
  arr.sort();      // O(n log n)
  return arr[0];   // O(1)
}
```
**Answer: O(n log n)** — Side by side: O(1) + O(1) + O(n log n) + O(1) → keep the biggest → O(n log n).

---

## 🚀 Final Quick Reference

When you read code, just ask yourself:

| What You See | Answer |
|--------------|--------|
| No loop, fixed steps, or `arr[i]` / `push` / `pop` / `length` | **O(1)** ⚡ |
| Counter doubles or halves (`i *= 2`, `n / 2`) | **O(log n)** 🪜 |
| One loop, or array methods like `map`/`filter`/`includes` | **O(n)** 📏 |
| Loop with halving inside, or `sort()` | **O(n log n)** 📏🪜 |
| Loop inside a loop, or O(n) method inside O(n) loop | **O(n²)** 💣 |

---

## 💡 Pro Tips for Writing Fast Code

1. **Prefer `push`/`pop` over `shift`/`unshift`** — work with the end of arrays.
2. **Use `Set` or `Object/Map` instead of `includes`/`indexOf` inside loops** — turn O(n²) into O(n).
3. **Don't sort unless you need to** — sorting is O(n log n), which is slower than O(n).
4. **Avoid nested loops if you can** — they're usually O(n²).

---

**🎉 You've got this. Big O is just labels for patterns — and now you know the patterns. Just read the code and ask: "How does the work grow?"**