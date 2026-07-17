# Short Response Questions

Answer each question completely but concisely. Use proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or MDN, but do NOT copy and paste definitions verbatim — write answers in your own words.

You can earn up to **6 points per question** (3 points for technical content, 3 points for writing quality).

Before submitting, use a spell checker to ensure your responses are free of grammar and spelling errors.

---

### Question 1: Scope

The following code throws a `ReferenceError` at runtime. Explain **why** this error occurs. Your answer must use the word **scope**.

```js
const calculateFinalPrice = (price, hasCoupon) => {
  const taxMultiplier = 1.1;
  if (hasCoupon) {
    let finalPrice = (price - 5) * taxMultiplier;  
  } else {
    let finalPrice = price * taxMultiplier;
  }
  return finalPrice;
}

calculateFinalPrice(50, true);
```

**Your Answer:**
`taxMultiplier` and `finalPrice` are block-scoped, meaning they are only reachable within the block, causing a reference error.

### Question 2: Encapsulation and Private Fields

Explain what **encapsulation** means in object-oriented programming. What does the `#` syntax do in a JavaScript class, and why is it useful?

**Your Answer:**
`Encapsulation` is taking large pieces of data and methods, bundling them together, and operating on them as a single object.

 I like to think about it as classifying the common important data that holds important info with the class. ` Object-oriented programming` encapsulates data with functionality.

 We can name and create functions that allow us to manage tasks using encapsulation and OOP. Setting a class and applying methods allow us to view, reuse, and save lists, then add and print things in the list, which allows us to manage **properties**.

 The `#` syntax in a javascript class makes objects that class private it, it holds values.

### Question 3: Flexbox vs. CSS Grid

Explain the difference between **Flexbox** and **CSS Grid** and provide an example of a component of a website that would use each.

**Your Answer:**
`Flexbox` is a CSS layout system that acts as a flex container(the parent) for a row or column. And flex items are referred to as the children. 

The parent container is usually displayed up and down
As soon as we add the style `display: flex` they get stacked side by side.
 Different background colors, padding, and styles can be added.

 We can control flex items from the parent container and arrange things within the child container inside the parent container.

 CSS grid allows us to arrange containers somewhat like Flexbox but in an organised way by centering containers horizonatally and vertically, or together.
 By together, I mean two-dimensional. Grid is a display type that allows us to arrange items in two dimensions: rows and columns.

 We can create more complex layouts by arranging rows and columns in a complex way.

 For example:
 Grid:

 `justify-content`
Spaces columns **horizontally**

`align-items`
Aligns items **vertically** within their row

We can control the height and more of these containers with specific method names.

---

### Question 4: Async Execution Order

In what order will the numbers be logged when this code runs? List them and explain why they appear in that order.

```js
console.log('1');

const loadRecipe = async (id) => {
  console.log('2');
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await response.json();
  console.log('3');
  return data;
};

loadRecipe(1);
console.log('4');
```

**Your Answer:**
It would run [1, 2, 3].
the 1st console.log(is reachable anywhere in the file)
the 2nd console.log(is reachable in the block-scope)
the 3rd console.log(is reachable in the block-scope)
The 4th console.log(is out of scope. We get ReferenceErrors if we try to reference variables out of scope.)

---
