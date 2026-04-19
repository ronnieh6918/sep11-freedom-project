# Entry 5
##### 4/19/2026

# Context:
Welcome to my 5th Blog Entry, **I have created a minimal viable product for my wordle app using [ReactJS](https://react.dev/learn). In this blog, I will be talking more about my progress and some of the new codes I added prior to my previous blog entry.** **During my tinkering, I used[w3schools](https://www.w3schools.com/css/) to apply CSS properties in the div tag, so that when the code renders, my wordle app will now be in the center of the screen.** This is to improve visibility overall but also preparing for how I should add onto the plain background before my SEP presentation. If I have enough time, I plan to organize my app, and I will add more to it with the feedbacks that I recieve from my peers moving forward.

# Content:
```js
const { useState, useEffect } = React;

// list of possible secret words
const WORDS = ["CASTLE","PLANET","BRIDGE","FRAMES","GOLDEN","SIMPLE","WORDLE","BLANKS","CHROME","FRIGHT"];

function getLetterStatus(guess, secret) {
    const result = Array(guess.length).fill("wrong");
    const secretArr = secret.split("");
    guess.split("").forEach((letter, i) => {
        if (letter === secret[i]) {
            result[i] = "correct";
            secretArr[i] = null;
        }
    });
    guess.split("").forEach((letter, i) => {
        if (result[i] === "correct") return;
        const index = secretArr.indexOf(letter);
        if (index !== -1) {
            result[i] = "misplaced";
            secretArr[index] = null;
        }
    });
    return result;
}

function Square({ value, status }) {
    let bg = "lightgray";
    if (status === "correct") bg = "#6aaa64";
    else if (status === "misplaced") bg = "#c9b458";
    else if (status === "wrong") bg = "#787c7e";
    return (
        <button
            className="square"
            style={{ backgroundColor: bg }}
        >
            {value}
        </button>
    );
}

function Board({ history, secret }) {
    const rows = 6;
    const cols = 6;
    return (
        <div className="board">
            {Array.from({ length: rows }).map((_, row) => {
                const word = history[row] || "";
                const statuses = word
                    ? getLetterStatus(word, secret)
                    : [];
                return (
                    <div className="board-row" key={row}>
                        {Array.from({ length: cols }).map((_, col) => (
                            <Square key={col} value={word[col] || ""} status={statuses[col]} />
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

function Guessing({ history, setHistory, secret }) {
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");

    function checkGuess() {
        if (!guess || guess.length !== 6) return;
        const upper = guess.toUpperCase();
        const newHistory = [...history, upper];
        setHistory(newHistory);
        setGuess("");

        if (upper === secret) {
            setMessage("You guessed the word!!");
        } else if (newHistory.length >= 6) {
            setMessage(`Out of guesses! The word was ${secret}.`);
        } else {
            setMessage("");
        }
    }

    return (
        <div style={{ fontFamily: "Arial", padding: "20px" }}>
            <h2>6-Letter Wordle Game</h2>
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
            {message && <Message text={message} />}
        </div>
    );
}

function App() {
    const [history, setHistory] = useState([]);
    const [secret] = useState(() => WORDS[Math.floor(Math.random() * WORDS.length)]);
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <Board history={history} secret={secret} />
            <Guessing history={history} setHistory={setHistory} secret={secret} />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

**Things that I fixed and removed:**
* I changed ``const rows = 6;`` **to make a 6 by 6 grid** instead of my previous one which only had a 5 by 6 grid.
* I added a ``const WORDS = [...]`` **to make an array of secret word** that the user can guess.
* I randomized the secret word using ``const[secret] = useState(() => WORDS[Math.floor(Math.random() * WORDS.length)]);``
* I removed **alert and added a message state (aims to track if user successfully guessed the word or not) inside Guessing component** so it doesn't make an alert pop up whenever user guesses.
* I added CSS styling in my app component when rendering multiple states. **The purpose of using flexbox styling on the div wrapped around the board and guess components  is so that my code can be in the center of the user's screen.**

* **Overall, there is still a lot of errors on the gameplay and how I could make my game more visibly unique, but I plan on fixing these in my Beyond MVP.**

# Engineering Design Process:
* I am on **step 5 of the Engineering Design Process** which is to test and evaluate my prototype. **Currently I am testing my prototype and making a minimal viable product so that when users are testing my product and reviewing it with possible feedbacks. I could potentially add these feedbacks in my beyond minimal viable product** (in which I could improve areas like adding a colored background, organizing how my code render on the user's screen, and overall adding visibility can make my project stand out a lot).

# Skills:
* **Debugging** - **There was many errors and areas where I could improve the functionality of the code.** For example, I could have added a pop up message that showed the secret word when the user finishes their tries. Each tries I could've not added the alert message everytime user types their guess. These are few errors I could fix to improve overall experience for the user testing my prototype. Areas I could have improved the functionality is making the word randomized after each time user refreshes the page and making the index randomized, the index of the secret word changes.
* **Time management** - **I had a lot of time to finish my MVP, but I also had a lot of homework especially for a lot of my core and AP classes. The SAT is also coming up, so I have to adjust time to study and balance between my work ethnics.**

[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
