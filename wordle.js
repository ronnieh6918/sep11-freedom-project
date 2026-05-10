const {useState} = React;
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

function Square({ value, status, col, submitted }) {
    return (
        <div
            className={`tile ${submitted ? status : ""} ${submitted ? "flip" : ""}`}
            style={{ animationDelay: submitted ? `${col * 0.15}s` : "0s" }}
        >
            {value}
        </div>
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
                            <Square
                                key={col}
                                value={word[col] || ""}
                                status={statuses[col]}
                                col={col}
                                submitted={row < history.length}
                            />
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
