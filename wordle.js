const { useState, useEffect } = React;

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

if (status === "correct") bg = "#6aaa64";   // green
else if (status === "misplaced") bg = "#c9b458"; // yellow
else if (status === "wrong") bg = "#787c7e";  // gray

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
const rows = 5;
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
            <Square key={col} value={word[col] || ""} status={statuses[col]}/>
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
const secret = "WORDLE";

return (
<div>
    <Board history={history} secret={secret} />
    <Guessing history={history} setHistory={setHistory} secret={secret}/>
</div>
);
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);

