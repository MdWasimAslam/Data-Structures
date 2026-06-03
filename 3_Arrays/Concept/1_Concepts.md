# JavaScript Arrays - Quick Interview Notes

## Memory Layout

```js
const arr = [10, 20, 30];
```

* Variable `arr` is stored on the **stack**
* Actual array is stored in the **heap**
* `arr` contains a **reference** to the array

```text
Stack                Heap
-----                ----
arr -------------> [10, 20, 30]
```

---

## Arrays are Objects

```js
typeof [1, 2, 3]; // "object"
```

Internally similar to:

```js
{
  0: 1,
  1: 2,
  2: 3,
  length: 3
}
```

---

## Time Complexity

| Operation              | Complexity |
| ---------------------- | ---------- |
| Access `arr[i]`        | O(1)       |
| Push (end)             | O(1)       |
| Pop (end)              | O(1)       |
| Insert Front (unshift) | O(n)       |
| Delete Front (shift)   | O(n)       |
| Search                 | O(n)       |

### Why is Front Insertion O(n)?

```js
arr.unshift(5);
```

All existing elements must shift right.

```text
Before: [10,20,30]
After : [5,10,20,30]
```

---

## Arrays Store References

```js
const user = { name: "Wasim" };
const arr = [user];
```

```js
arr[0].name = "John";
```

`user.name` also becomes `"John"` because both reference the same object.

---

## Array Assignment vs Copy

### Assignment

```js
const a = [1,2,3];
const b = a;
```

Both point to the same array.

### Copy

```js
const b = [...a];
```

Creates a new array.

---

## Iteration Patterns

### For Loop

```js
for(let i = 0; i < arr.length; i++) {}
```

Use when index is needed.

### for...of

```js
for(const item of arr) {}
```

Use when only values are needed.

### forEach

```js
arr.forEach(item => {});
```

Readable iteration.

### map

```js
const result = arr.map(x => x * 2);
```

Creates a new array.

---

## Prefix Sum

Stores running totals.

```js
[2,4,6,8]
```

Becomes:

```js
[2,6,12,20]
```

Useful for fast range-sum calculations.

---

## In-Place vs New Array

### In-Place (modifies original)

```js
push()
pop()
shift()
unshift()
sort()
reverse()
```

### New Array (returns new array)

```js
map()
filter()
slice()
concat()
```

---

# 30-Second Interview Answer

"JavaScript arrays are objects stored in heap memory, while variables store references on the stack. Array access is usually O(1) because JavaScript engines optimize arrays. Inserting at the front is O(n) because elements must be shifted. Arrays store references to objects, not copies. Methods like push and pop are in-place, while map and filter create new arrays."
