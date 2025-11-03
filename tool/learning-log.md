# Tool Learning Log

## Tool: **React**

## Project: **Extreme Wordle (more letters)**

---

### 9/29/2025:
* In the first lesson of React, I am learning how to create components and also using a component wrapped inside another component's return statement.

### Notes:
* ``function text(){}`` = creates a defined function component called text
* ``return(element);`` = inside of a component is a return statement where you can put HTML elements to render what appears on the users interface when using that specific component
* ``<script type = "text/babel">`` = is a syntax used for Javascript with React
* ``const root = ReactDOM.createRoot(document.getElementById("Food"));`` = create a variable root and access ReactDOM components into a specific element with an id listed as Food
* ``root.render(<Food />);`` = Render the food function component in the React component assigned when root was created

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

<hr>

### 10/27/2025:
* Experimenting with React JS with conditionals and using **React Hook, React-controlled inputs using JSX elements, and Event binding.**

### Notes:
*  ``React.useState("")`` - A React Hook that stores user's guess and updates everytime they input a new value.
*  ``(guess.toUpperCase() === "WORDLE")`` - The word that the user is guessing (**the word remain the same and will apply even if all the letters guessed by the user are capitalized**).
*  ``<input type="text" value={guess} onChange={(e) => setGuess(e.target.value) placeholder="Type your guess"}/>`` - A controlled input shows the current guess and updates it by storing it in the React Hook.
    * ``value={guess}`` - Whatever the user inputs is stored and React renders it.
    * ``onChange`` - React event handler; runs when user types and changes input.
    * ``(e) =>`` - Arrow function; whatever the user has just typed.
    * ``setGuess(e.target.value)`` - Calls the setGuess function and updates the guess with what the user has typed. The element that is going to trigger the event is <input> and the value is whatever the user types in the empty guess box.
    * ``placeholder="Type your guess"`` - The empty guess box has a placeholder text that tells the user to type their guess.
*  ``<button onClick={checkGuess}>Check</button>`` - The button runs the checkGuess function when clicked to see if the guess match the word.

Below is the full tinkering:

```js
<!-- HTML -->
<div id="root"></div>

<!-- React Code -->
<script type = "text/babel">
    function Guessing(){
        const[guess, setGuess] = React.useState("");

        function checkGuess(){
            if (guess.toUpperCase() === "WORDLE"){
                alert("You guessed the word!");
            }   else{
                alert("Try again!");
            }
        }

        return(
            <div>
                <input
                    type="text"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder="Type your guess"
                />
                <button onClick={checkGuess}>Check</button>
            </div>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Guessing />);
</script>
```

Result:

<img width="900" height="172" alt="Screenshot 2025-11-02 8 38 26 PM" src="https://github.com/user-attachments/assets/00e28561-cb41-49bb-bca2-36573a6324c6" />
<img width="900" height="172" alt="Screenshot 2025-11-02 8 34 52 PM" src="https://github.com/user-attachments/assets/ba813dd1-3841-4310-a582-df90b2621f4b" />

<hr>

### X/X/XX:
* Text


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
