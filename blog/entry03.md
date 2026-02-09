# Entry 3
##### 2/2/2026

# Context:
Welcome to my 3rd Blog Entry, I tinkered with [**ReactJS**](https://react.dev/learn) by **refractoring and fixing my code and event-handler to dynamically render the history state.** In addition to my SEP11 class, I am also currently learning DOM which is useful because **you can control HTML in the body by using Javascript, for example adding style, classes, and more than just manually typing HTML tags in the body; adding events to buttons and other HTML clickable elements, all of which are essential for making a well-design interface webpage that is going to be helpful for linking my wordle remix app.** This way, when I plan on including my ReactJS code, I can redirect user to my app using a link on the webpage, but first creating a webpage using DOM instead of HTML is going to make it much easier to format where the elements will go and land in the body and other benefits of efficiency in using DOM.One of the [DOM Lesson: 03-Details](https://github.com/hstatsep-students/dom-lessons-ronnieh6918/blob/main/02-details/02-hw.html) is a perfect example of how I am going include link using DOM and manipulating element class and styling.

# Content:
* 12/14:
* Before refractoring my code, my main goal was to make sure that if user guess isn't 6 letter, it should NOT show up in the history array. I used ``(!guess || guess.length ! == 6) return;`` because **if guess is empty or doesn't have 6 letters, then return ``setHistory[...history, guess.toUpperCase()]`` which set guess into the history array and capitalize every letter in guess which aims to match 'WORDLE' our hidden word.** Lastly, after history meets the conditional criteria and history list have guess saved passing through all the necessary requirements. By using ``setGuess("");``, **the state guess will be cleared and brand new before a new guess is typed by the user in the guess input box.**

* 1/14:
* ``onKeyDown = {(e) => e.key === "Enter" && checkGuess()}`` - **onKeyDown is a React event handler, it signals something to happen as a key is pressed. e.key === "inputKey" checks for which exact key is pressed.** Then lastly, after that key is pressed, you want to consider what are you going to do afterwards? && checkGuess() can be interpreted as "and then..." **call the checkGuess component and check guess then update both the guess (reset whenever user inputs a guess) and history state (show the guess in history).**
* ``<p>Total guesses: {history.length}</p>`` - Using JSX, a paragraph element to display as text on the user's screen and javascript to display the items in the history array because **history.length in this case the length is always one index higher than the last guess which means it's going to include everything in the array, but it will not affect the code when displaying the total items since the index of the array length is not holding any element or guess, so it won't add a ghostly count to the total guess.**

* My next step on what to learn with React will deal with design, for example trying out **the tile, row, or board components** which creates similar wordle grid allowing user to type in separate tiles instead of inside of a text input box.


Below is my current tinkering:

```js
<div id="root"></div>

<!-- React Code -->
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
```

# Engineering Design Process;
I am on **step 3 of the Engineering Design Process, "Selecting a possible solution" to my current problem of making my SEP11 Project.** The most promising solution I am probably going to do with the remaining time is planning the design using HTML and CSS to create a webpage that will link my ReactJS code. This way the user can select the difficulty mode, but if I don't start making a webpage, I might not have enough time to introduce my app and also link my code on something that isn't a white text background at first.

# Skills:
* **Time-Management** - Managing time effectively is pivotal when I have so much to plan for. Since after organizing my plan, I have to make use of the time given to prepare for my SEP11 Project. In which, I have came up with a solution for planning my project, **I have to manage with school work and free time to finish criteria necessary to make my project stand out later on.**
* **Decision making** - **Making decision is hard because I have so many ideas, but brainstorming more possible solution to my problem would be time consuming in the long run.** I want to focus on one single decision that I am certain that it will work. This skill might conflict with creativity, but in exchange by narrowing ideas down so it is again clear to what kind of design I am going for and what should be included in my webpage.


[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
