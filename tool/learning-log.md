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

### 11/6/2025:
* Experimenting with React JS trying out Loops in JSX, using Ternary operator, Immuntable updates of state, Multi-character string input, and JSX inline styling.

### Notes:
* ``React.useState([])`` - An array to stores all previous guesses.
* ``maxLength{6}`` - Multi-character input (a 6-letter word for guess).
* ``if (!guess) return`` - If guess is an empty string, then return nothing. Otherwise if string is not empty which will make this conditional true.
* ``setHistory([...history, guess.toUpperCase()]);`` - Immutable Array update by updating every guess into the history array (... is a spread operator so multiple guesses will be stored into the history array).
* ``setGuess("")`` - After the old guess is stored into history, setGuess will clear and become an empty string for a new updated guess.
* ``{history.map((g, i) => (JSX))}`` - Looping over state since history is kept in track inside of an array that has all the stored past guesses, ``.map`` is used to check the history array one by one according to (element, index), in this case every guess is now "g" and with their assigned index "i".
* ``<p key={i}> </p>`` - Indentifies all the guesses in history array by their index from past to recent.
* ``{g === secret ? "Correct!" : "Wrong!"} — {g}`` - Checks each guess and comparing it to secret (``condition ? valueIfTrue : valueIfFalse`` is an ternary operator which checks that if conditional is true, then separate value that is true from values that are false, and then render it onto user's screen). ``-{g}`` displays the user's exact guess.
* ``<div style={{ fontFamily: "Arial", padding: "20px" }}>`` - using JSX syntax (``{{}}``) to style with CSS within an inline of HTML element.

Below is the full tinkering:
```js
<script type = "text/babel">
  function Guessing() {
    const [guess, setGuess] = React.useState("");       // Current guess input
    const [history, setHistory] = React.useState([]);   // Store previous guess
    const secret = "WORDLE";                            // 6-letter secret word

    function checkGuess() {
      if (!guess) return;                               // Ignore empty input
      setHistory([...history, guess.toUpperCase()]);    // Add guess to history
      setGuess("");                                     // Clear input for next guess
    }

    return (
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        <h2>6-Letter Word Guessing Game</h2>

        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          maxLength={6}           // Limit input to 6 letters
          placeholder="Type 6 letters"
        />
        <button onClick={checkGuess}>Check</button>

        <h3>Guess History:</h3>
        {history.map((g, i) => (
          <p key={i}>
            {g === secret ? "Correct!" : "Wrong!"} — {g}
          </p>
        ))}
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Guessing />);
</script>
```

Result:

<img width="426" height="183" alt="Screenshot 2025-11-16 11 08 38 PM" src="https://github.com/user-attachments/assets/e41265b6-50d3-48ef-8f4a-2918daa92832" />

<hr>

### 11/22/2025:
* Experimenting with React JS by trying out another React Hook, testing out dynamic styling within ternaries, understanding different between conditional rendering vs. dynamic styling.

### Notes:
* ``React.useEffect(() => { if (history.includes(secret)) { alert("You guessed the word!!"); } }, [history]);`` - useEffect runs every render when state changes, the history array is the state being tracked, secret is a constant that does not change, and when the user guess the secret word it will triger a side effect (alerting the user their correct guess, a javascript code that displays temporarily).
* ``<p key={i} style={{color: g === secret ? "green" : "red",`` - This first half of the code uses dynamic styling to permanently display the color of the secret word green and any wrong guess into red.
* ``fontWeight: g === secret ? "bold" : "normal" }} >`` - This code uses dynamic styling to permanently display the secret word bolded, while every other wrong guess as normal.
- Dynamic style is used here because the state that is changing is history because history is being rendered, history array is being checked to find the secret word (referring back to ``history.map()``).

#### Important things to remember:

* **State is what is being changed** (Examples: the data for guess inputs and history list).
* **Conditional rendering depends on the state to decide whether an element exists at all, often displayed as temporary messages or elements** (Elements will render temporarily on screen as state changes, combines Conditional + HTML - Learn about more in LL5).
* **Dynamic styling depends on the state to change how an element looks, but the element always exist** (Elements will render permanently on screen, styling with JSX + CSS).
* **Dynamic styling is often used in ternaries or expressions, but it doesn't have to be fully within a conditional JSX (conditional operators)!**

Below is the tinkering:
```js
<script type="text/babel">
  function Guessing() {
    const [guess, setGuess] = React.useState("");       // Current guess input
    const [history, setHistory] = React.useState([]);   // Stores all past guesses
    const secret = "WORDLE";                            // 6-letter secret word

    // React useEffect - Another type of React Hook
    React.useEffect(() => {
      if(history.includes(secret)) {
        alert("You guessed the word!!");
      }
    } ,[history]);

    function checkGuess() {
      if (!guess) return;                               // Ignore empty input
      setHistory([...history, guess.toUpperCase()]);    // Add guess to history
      setGuess("");                                     // Clear input for next guess
    }

    return (
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        <h2>6-Letter Word Guessing Game</h2>

        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          maxLength={6}                                  // Limit input to 6 letters
          placeholder="Type 6 letters"
        />
        <button onClick={checkGuess}>Check</button>

        <h3>Guess History:</h3>
        {history.map((g, i) => (
          <p
            key={i}
            style={{
              color: g == secret ? "green" : "red",                 // Display green for correct, red for wrong
              fontWeight: g === secret ? "bold" : "normal"          // Bold the correct guess
            }}
          >
            {g === secret ? "Correct!" : "Wrong!"} — {g}
          </p>
        ))}
    </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Guessing />);
</script>
```

Results:

<img width="905" height="259" alt="Screenshot 2025-11-22 10 28 45 PM" src="https://github.com/user-attachments/assets/7c533287-452b-4402-b69c-6b8549ba616e" />

<img width="433" height="182" alt="Screenshot 2025-11-22 10 29 14 PM" src="https://github.com/user-attachments/assets/f55f421a-84a1-450d-8990-41b79d7b992a" />


<hr>

### 12/7/2025:
* Experimenting with ReactJS by using conditional rendering to show messages based on user input and creating a separate component to display those messages, which makes the code more organized and reusable.

### Notes:
* ``function Message({ text }) {return <p style={{ color: "orange", fontWeight: "bold" }}>{text}</p>;}`` - **Creates a separate component containing a prop, not a state. The prop text is instructed to contain a orange bolded message.**
* ``{guess.length > 0 && guess.length < 6 && <Message text="Word must be 6 letters!" />}`` - A form of conditional rendering (decides whether user sees something on the screen based on what state is being rendered onto the user's screen, **props aren't the data changing so it is not the ones that is going to be rendered on the user's screen, they are just what should be added to display**). The code here is checking if user typed a word that only contain 1-5 letters, then runs a message saying that user would need to retype a word consisting of 6 letters (acts like an alert) when condition is false.

#### Important Notes to remember:
* When we created the separate component message, the text prop is passed onto the message component. **Props are what the component is going to be used for (often times as data)**, in this case it runs through the line of conditional rendering, if evaluated true (word is exactly 6 letters), it will run the Message component, which uses text data as a prop to display on the user's page.
* JS comments is very unique when using React. Since when we deal with JSX component like ``return(JSX)`` block, we use ``{/* */}`` as JSX comments because React will generally ignore it. Bringing back this because the comment I used is inside of ``return()``, so you can't use ``// comments``, since **React expects JSX elements or expressions and not Javascript comments.** So when used directly inside JSX, it will cause an error.
* State and Props differ because **state is data that belongs to a component but that data changes. However, prop are data that a component recieves from outside like directions for what is to be display, the data will not change.**

```js
<script type="text/babel">

// New reusable component
function Message({ text }) {
  return <p style={{ color: "orange", fontWeight: "bold" }}>{text}</p>;
}

function Guessing() {
  const [guess, setGuess] = React.useState("");       // Current guess input
  const [history, setHistory] = React.useState([]);   // Stores all past guesses
  const secret = "WORDLE";                            // 6-letter secret word


  React.useEffect(() => {
    if(history.includes(secret)) {
      alert("You guessed the word!!");
    }
  }, [history]);

  function checkGuess() {
    if (!guess) return;                               // Ignore empty input
    setHistory([...history, guess.toUpperCase()]);    // Add guess to history
    setGuess("");                                     // Clear input for next guess
  }

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>6-Letter Word Guessing Game</h2>

      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength={6}                                  // Limit input to 6 letters
        placeholder="Type 6 letters"
      />

      {/* Conditional rendering: show hint if guess is too short */}
      {guess.length > 0 && guess.length < 6 && <Message text="Word must be 6 letters!" />}

      <button onClick={checkGuess}>Check</button>

      <h3>Guess History:</h3>
      {history.map((g, i) => (
        <p
          key={i}
          style={{
            color: g === secret ? "green" : "red",
            fontWeight: g === secret ? "bold" : "normal"
          }}
        >
          {g === secret ? "Correct!" : "Wrong!"} — {g}
        </p>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Guessing />);

</script>
```

Result:

<img width="424" height="201" alt="Screenshot 2025-12-07 11 20 31 PM" src="https://github.com/user-attachments/assets/2dd4daf3-b143-493f-ae15-ea31ef173851" />

**Goal for LL6**: Even if message acts as a instruction for user to type a word that should be 6 letters. Next time, make the user repeat their guess again if they make a slight typo, but try not displaying the 1-5 letter word into guess history.

<img width="424" height="145" alt="Screenshot 2025-12-07 11 26 28 PM" src="https://github.com/user-attachments/assets/f74294e0-c257-4a9f-9c14-b967c8994b80" />

<hr>

### 12/14/2025:
* **Resolving issues with current code like when user inputs a word that is not 6 letters and still shows up in the history list.**

### Notes:
No new ReactJS components today, just basic javascript to refractor my code.
* ``if (!guess || guess.length !== 6) return;`` - if guess is an empty string or if the length of guess is not 6 letters, then return...
#### Review:
* ``setHistory([...history, guess.toUppercase()]);`` - update guess into history array and make it shown as uppercase even if user typed guess in lowercase.
* ``setGuess("");`` - clears the input box, so user can input a new guess
* ``!==`` - not equal strict operator, so if input isn't equal to the expression, then the condition will become true (for example, if 6 is not equal to 5, the condition is going to be true regardless).


**Here is my new code:**
```js
<script type="text/babel">

// New reusable component
function Message({ text }) {
  return <p style={{ color: "orange", fontWeight: "bold" }}>{text}</p>;
}

function Guessing() {
  const [guess, setGuess] = React.useState("");
  const [history, setHistory] = React.useState([]);
  const secret = "WORDLE";


  React.useEffect(() => {
    if(history.includes(secret)) {
      alert("You guessed the word!!");
    }
  }, [history]);

  function checkGuess() {
    if (!guess || guess.length !==6) return;          // If condition is TRUE; input isn't an empty string nor length is not 6 letters then...
    setHistory([...history, guess.toUpperCase()]);    // If input is at least 6 letters, then save it to History list
    setGuess("");                                     // Update input box for next guess
  }

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>6-Letter Word Guessing Game</h2>

      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength={6}
        placeholder="Type 6 letters"
      />

      {/* Conditional rendering: show hint if guess is too short */}
      {guess.length > 0 && guess.length < 6 && <Message text="Word must be 6 letters!" />}

      <button onClick={checkGuess}>Check</button>

      <h3>Guess History:</h3>
      {history.map((g, i) => (
        <p
          key={i}
          style={{
            color: g === secret ? "green" : "red",
            fontWeight: g === secret ? "bold" : "normal"
          }}
        >
          {g === secret ? "Correct!" : "Wrong!"} — {g}
        </p>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Guessing />);

</script>
```

**Result:**

<img width="420" height="216" alt="Screenshot 2025-12-14 7 42 23 PM" src="https://github.com/user-attachments/assets/19e5b0c0-23dc-4f35-b0b3-ef112b1b1c72" />

* Now when user makes a typo, nothing will show up if input is empty or if word does not match 6 letter. Pressing check will NOT SAVE into history array if word does not meet those conditions.

<img width="420" height="216" alt="Screenshot 2025-12-14 7 42 32 PM" src="https://github.com/user-attachments/assets/56c7960b-14fa-442e-b78a-34b1c441fdc8" />

* If guess meets these conditions, then pressing check will save the 6 letter word into History List.

<hr>

### 1/14/2026
* Adding **onKeyDown** so user can submit guess when pressing enter key instead of clicking the check button. Using **Dynamic history state rendering** to display the total number of guesses the user has guessed so far.

### Notes:
* ``onKeyDown = {(e) => e.key === "Enter" && checkGuess()}`` - ``onKeyDown`` is a React event handler, it signals something to happen as a key is pressed. ``e.key === "inputKey"`` checks for which exact key is pressed. Then lastly, after that key is pressed, you want to consider what are you going to do afterwards? ``&& checkGuess()`` can be interpreted as "and then..." call the checkGuess component and check guess then update both the guess (reset whenever user inputs a guess) and history state (show the guess in history).
* ``<p>Total guesses: {history.length}</p>`` - Using JSX, a paragraph element to display as text on the user's screen and javascript to display the items in the history array because ``history.length`` in this case the length is always one index higher than the last guess which means it's going to include everything in the array, but it will not affect the code when displaying the total items since the index of the array length is not holding any element or guess, so it won't add a ghostly count to the total guess.

**Below is my code:**

```js
<script type="text/babel">

// New reusable component
function Message({ text }) {
  return <p style={{ color: "orange", fontWeight: "bold" }}>{text}</p>;
}

function Guessing() {
  const [guess, setGuess] = React.useState("");
  const [history, setHistory] = React.useState([]);
  const secret = "WORDLE";


  React.useEffect(() => {
    if(history.includes(secret)) {
      alert("You guessed the word!!");
    }
  }, [history]);

  function checkGuess() {
    if (!guess || guess.length !==6) return;          // If input isn't an empty string nor if word length is not 6, return nothing
    setHistory([...history, guess.toUpperCase()]);    // If input is at least 6 letters, then save it to History list
    setGuess("");                                     // Update input box for next guess
  }

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>6-Letter Word Guessing Game</h2>

      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength={6}
        placeholder="Type 6 letters"
        onKeyDown={(e) => e.key === "Enter" && checkGuess()}      // Press Enter Key to submit guess
      />

      {/* Conditional rendering: show hint if guess is too short */}
      {guess.length > 0 && guess.length < 6 && <Message text="Word must be 6 letters!" />}

      <button onClick={checkGuess}>Check</button>

      {/* Display total # of Guesses so far */}
      <p>Total guess: {history.length}</p>

      <h3>Guess History:</h3>
      {history.map((g, i) => (
        <p
          key={i}
          style={{
            color: g === secret ? "green" : "red",
            fontWeight: g === secret ? "bold" : "normal"
          }}
        >
          {g === secret ? "Correct!" : "Wrong!"} — {g}
        </p>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Guessing />);

</script>
```

**Result:**

<img width="405" height="230" alt="Screenshot 2026-01-14 11 59 06 PM" src="https://github.com/user-attachments/assets/f56ff729-215b-4da8-8d45-bcd9651aefa8" />

* Display # of guess
* Pressing enter key will check the guess

<hr>

### 3/8/2026
I started a new set of code that allow me to create a 6 by 5 grid using ReactJS. I used **React component (Square and Board)**, **useState hook (square and setsquare)**, using **prop to store values from per square using React components (Board --> Square)**, and **Dynamically rendering with map to avoid making 30 square tiles**.

# Notes
* ``const [squares, setSquares] = useState(Array(30).fill(null));`` - creates an array holding 30 squares with a null value (non-set placeholder for each square), setSquare updates state whenever square changes (helpful when state is constantly updating and rendering with new values).
* ``return <button className="square">{value}</button>;`` - display value of ``squares[index]`` from Board component and renders on user's screen (checking each square by their assigned index and observe when state changes).
* ``{[0,1,2,3,4].map(row => (<div className="board-row" key={row}))}`` - Create 5 rows each starting at an index of 0 to 4. Map will create a div to separate each row with a div, and each row has their unique index that will be tracked if square state changes inside of the rows.
* ``{[0,1,2,3,4,5].map(col => { const index = row * 6 + col; return <Square key={index} value={squares[index]} />; })}`` - Create 6 columns per row. Row 0 --> Row 1 it needs to pass 6 squares (first square [index = 0] + remaining column [1,2,3,4,5]). Row 1 starts at the index of 1 * 6 = (6 + remaining column [7,8,9,10,11]) and the same process continues for Row 2,3,4. Then observe for when each square has its state changed passing it back to Square component.


**Below is my CSS code for the Board and Square:**

``` CSS
<style>
  .board-row {
    display: flex;
  }
  .square {
    width: 40px;
    height: 40px;
    margin: 2px;
    border: 2px solid black;
    background: lightgray;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
  }
</style>
```

**Below is my ReactJS code**

```js
<script type = "text/babel">
const { useState } = React;
function Square({ value }) {
  return <button className="square">{value}</button>;
}

  function Board() {
  const [squares, setSquares] = useState(Array(30).fill(null));
  return(
    <div className="board">
      {[0,1,2,3,4].map(row => (
        <div className="board-row" key={row}>
          {[0,1,2,3,4,5].map(col => {
            const index = row * 6 + col;
            return <Square key={index} value={squares[index]} />;
          })}
        </div>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Board />)
</script>
```

**Result:**

<img width="240" height="209" alt="Screenshot 2026-03-08 1 51 18 PM" src="https://github.com/user-attachments/assets/ce7ff3c5-75cf-4e52-9e89-d8170726947b" />

<hr>

### 3/22/2026
I merged the Board and Guessing components so that when the user types a guess, the board displays that word in the grid and keeps a history of all guesses. Since Board and Guessing each had their own separate data, I created a parent component called App to hold the shared state. App passes the history and update function down as props, allowing both Board and Guessing to stay synchronized and render the same data on the user’s screen.

1st New Code Explanation:

```js
function Board({ history }) {
  const rows = 5;
  const cols = 6;

  return (
    <div className="board">
      {Array.from({ length: rows }).map((_, row) => {
        const word = history[row] || "";

        return (
          <div className="board-row" key={row}>
            {Array.from({ length: cols }).map((_, col) => (
              <Square key={col} value={word[col] || ""} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
```

* ``function Board({ history })`` - **Board will now pass strings as props (aka. guesses) from history array.**
* ``{Array.from({ length: rows }).map((_, row) => { const word = history[row] || ""</div>;`` - **Board will contain an array of rows, and map will be used to go through each row with their index. Word in the board will match with history array based on the index of each string in history passed as index of each individual row in the board component.**
* ``<div className="board-row" key={row}>{Array.from({ length: cols }).map((_, col) => (<Square key={col} value={word[col] || ""} />))}`` - **The value that will return the prop passed to the rows (which contains full 6 letter word) that will later render the square tiles, and for each row containing 5 squares, by passing in the word from history to board component, the value that is returned in each column will be the word passed starting from index of its first to last letter of its string.**

2nd New Code Explanation:

```js
function App() {
  const [history, setHistory] = useState([]);

  return (
    <div>
      <Board history={history} />
      <Guessing history={history} setHistory={setHistory} />
    </div>
  );
}
```

* ``const [history, setHistory] = useState([]);`` - **App will render history state whenever history changes. History will contain an array of updated values passed from setHistory (aka. updated from Guessing component).**
* ``<div><Board history={history} /><Guessing history={history} setHistory={setHistory} /></div>`` - **Call the Board component and input history prop (each guess that is being updated in history component) that is passed to the App component. However, the Guessing component will have history updated from App which will pass down the history state.**

**Here is my full code:**

```js
<div id = "root"></div>
  <script type="text/babel">
  const { useState, useEffect } = React;

  function Square({ value }) {
    return <button className="square">{value}</button>;
  }

  function Board({ history }) {
    const rows = 5;
    const cols = 6;

    return (
      <div className="board">
        {Array.from({ length: rows }).map((_, row) => {
          const word = history[row] || "";

          return (
            <div className="board-row" key={row}>
              {Array.from({ length: cols }).map((_, col) => (
                <Square key={col} value={word[col] || ""} />
              ))}
            </div>
          );
        })}
      </div>
    );
  }


  function Message({ text }) {
    return <p style={{ color: "orange", fontWeight: "bold" }}>{text}</p>;
  }


  function Guessing({ history, setHistory }) {
    const [guess, setGuess] = useState("");
    const secret = "WORDLE";

    useEffect(() => {
      if (history.includes(secret)) {
        alert("You guessed the word!!");
      }
    }, [history]);

    function checkGuess() {
      if (!guess || guess.length !== 6) return;

      setHistory([...history, guess.toUpperCase()]);
      setGuess("");
    }

    return (
      <div style={{ fontFamily: "Arial", padding: "20px" }}>
        <h2>6-Letter Word Guessing Game</h2>

        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          maxLength={6}
          placeholder="Type 6 letters"
          onKeyDown={(e) => e.key === "Enter" && checkGuess()}
        />

        {guess.length > 0 && guess.length < 6 && (
          <Message text="Word must be 6 letters!" />
        )}

        <button onClick={checkGuess}>Check</button>

        <p>Total guess: {history.length}</p>

        <h3>Guess History:</h3>
        {history.map((g, i) => (
          <p
            key={i}
            style={{
              color: g === secret ? "green" : "red",
              fontWeight: g === secret ? "bold" : "normal"
            }}
          >
            {g === secret ? "Correct!" : "Wrong!"} — {g}
          </p>
        ))}
      </div>
    );
  }


  function App() {
    const [history, setHistory] = useState([]);

    return (
      <div>
        <Board history={history} />
        <Guessing history={history} setHistory={setHistory} />
      </div>
    );
  }


  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>
```

**Results:**

* Takeaway: **State is something that changes and each time it changes, it can be used as a prop for another component.**
* Errors to fix for next Learning Log: **When user inputs 6 letter symbols/numbers, it'll still show the guess is correct (only after user figured the correct guess).**
* Additional Improvements for future Learning Log: **Color the tiles and organizing the position on the user's screen. Also when the Board is full, it should reset so user can guess again.**

<hr>

###

<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
