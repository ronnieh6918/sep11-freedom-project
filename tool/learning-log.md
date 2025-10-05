# Tool Learning Log

## Tool: **React**

## Project: **Extreme Wordle (more letters)**

---

### 9/29/2025:
* In the first lesson of React, I am learning how to create components and also using a component wrapped inside another component's return statement.

### Notes:
* ``function text(){}`` = creates a defined function component called text
* ``return(element);`` = inside of a component is a return statement where you can put HTML elements to render what appears on the users interface when using that specific component
* ``<script type = "text/babel"> = is a syntax used for Javascript with React.
* ``const root = ReactDOM.createRoot(document.getElementById("Food"));`` =
* ``root.render(<Food />);`` =

<br>

1) The code below is to specify which of the component should be rendered to the user's screen.

```html
<div id = "Food">
```

<br>

2) This code below has two components: "Cookies" contain a cookie image and my main component "Food" where I want to use the other component "Cookies". So, in my return statement for my main component, I used ``<Cookies/>`` which generates the return statement of the first component which inside of "Cookies" is the same cookie image I had assigned to the first component.

```js
<!--React Set Up-->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<!-- React Code -->
<script type = "text/babel">
  function Cookies() {
    return <img src= "tool/img/cookies.jpeg" alt="Cookie"/>;
  }

  function Food() {
    return (
      <section>
        <h1>Tasty Treat:</h1>
        <Cookies/>
      </section>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("Food"));
  root.render(<Food />);
</script>
```

The result of the code:

<img width="211" height="235" alt="Screenshot 2025-10-05 4 14 14 PM" src="https://github.com/user-attachments/assets/01708fa1-5714-46ce-aef7-85bdd6118f86" />

### X/X/XX:
* Text


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
