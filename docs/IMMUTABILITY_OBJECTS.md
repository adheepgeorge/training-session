# Immutability of Objects in JavaScript

### What is Immutability? 🤔

Immutability is a programming concept where data cannot be changed after it's created. In JavaScript, objects are mutable by default, but we can implement immutability patterns to prevent changes to our objects. This is like creating a "read-only" version of an object.

![Read only](../assets/read_only.gif)

### Why Does Immutability Matter? 🎯

1. **Predictability**: When objects don't change unexpectedly, your code becomes more predictable
2. **Debugging**: Easier to track down bugs when you know objects won't change
3. **Performance**: Helps with optimization in frameworks like React

### JavaScript's Data Types and Mutability 📝

#### Primitive Types (Immutable by Nature)

```js
let name = "John";
let newName = name;
newName = "Jane";
console.log(name); // "John" - original unchanged
console.log(newName); // "Jane"
```

#### Reference Types (Mutable by Default)

![Time for change](../assets/time_for_change.gif)

```js
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Jane";
console.log(person.name); // "Jane" - original changed!
console.log(newPerson.name); // "Jane"
```

### Achieving Immutability in JavaScript 🛠️

#### 1. Using Object.freeze()

![freeze](../assets/freeze.gif)

```javascript
const user = Object.freeze({
  name: "John",
  address: { city: "New York" },
});

user.name = "Jane"; // Won't work in strict mode
user.address.city = "Boston"; // Still works! (shallow freeze)
```

#### 2. Creating New Objects (Not Immutable, but Common Pattern)

Spread and rest operators share the same syntax (...)

<img src="../assets/spread_operator.gif" width="400" height="300" alt="Spread animation"/>

##### Spread Operator

function arguments or array literals, it spreads

```js
// Spreading arrays
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

// Spreading objects
const person = { name: "John" };
const updatedPerson = { ...person, age: 30 }; // { name: "John", age: 30 }
```

```javascript
const original = { name: "John", age: 30 };
const copy = { ...original, age: 31 };
```

The spread operator (`...`) and Object.assign() are often used in immutable programming patterns, but they don't make objects immutable. Instead, they:

- Create new objects instead of modifying existing ones
- Help follow the principle of "never mutate state directly"
- Are commonly used in React and other frameworks

##### Rest Operator

used in a place where a collection is expected (like function parameters or destructuring), it collects

Collects or gathers elements. It's like gathering remaining items into a collection.

In function parameters to collect arguments
In destructuring to collect remaining properties
To gather remaining elements into an array/object

#### Object Destructing

```js
// Rest in function parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3, 4); // 10

// Rest in object destructuring
const user = { name: "John", age: 30, email: "john@example.com" };
const { name, ...rest } = user;
// name = "John"
// rest = { age: 30, email: "john@example.com" }
```

⚠️ **Important Note**: These methods don't make objects immutable. They just create new copies. The original object can still be modified if you have a reference to it.

To achieve true immutability, you should:

1. Use Object.freeze() for shallow immutability
2. Use deep freezing for nested objects
3. Consider using libraries like Immer that handle immutability properly

### Popular Libraries for Immutability 📚

- **Immer**: Uses a concept called "producers" to handle immutable updates
- **Immutable.js**: Provides persistent immutable data structures

### Best Practices for Real-World Projects 💡

1. Always create new objects instead of modifying existing ones
2. Use the spread operator for simple object copies
3. Consider using Immer for complex state management
4. Document your immutability patterns in team guidelines

### Summary 📝

- JavaScript objects are mutable by default
- Immutability helps prevent bugs and makes code more predictable
- Use Object.freeze(), spread operator, or libraries to enforce immutability
- Remember that Object.freeze() is shallow - nested objects can still be modified

### One Good Practice to Follow 🎯

When working with state in your applications, always treat objects as immutable. Instead of:

```javascript
user.name = "Jane"; // ❌ Don't do this
```

Do this:

```javascript
const updatedUser = { ...user, name: "Jane" }; // ✅ Do this instead
```
