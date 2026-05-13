const {useState} = React;

// list of words the game randomly picks from
const WORDS = ["CASTLE","PLANET","BRIDGE","FRAMES","GOLDEN","SIMPLE","WORDLE","BLANKS","CHROME","FRIGHT"];

// takes the guess and secret word, and figures out if each letter is green, yellow, or gray
function getLetterStatus(guess, secret) {
    const result = Array(guess.length).fill("wrong"); // start everything as gray
    const secretArr = secret.split(""); // copy of the secret so we can cross off letters as they get matched

    // go through each letter, if it's in the right spot, then mark it green
    // set that spot to taken so it can't be matched again
    guess.split("").forEach((letter, i) => {
        if (letter === secret[i]) {
            result[i] = "correct";
            secretArr[i] = null;
        }
    });

    // go through again for the leftover letters and see if the same letter exists somewhere
    guess.split("").forEach((letter, i) => {
        if (result[i] === "correct") return; // skip the greens, already done
        const index = secretArr.indexOf(letter);
        if (index !== -1) {
            result[i] = "misplaced";
            secretArr[index] = null; // cross off that letter in the secret so it can't be matched again
        }
    });
    return result;
}

// one letter box shows the letter and applies the color with the flip animation
function Square({ value, status, col, submitted }) {
    return (
        <div
            className={`tile ${submitted ? status : ""} ${submitted ? "flip" : ""}`}

            // each box waits a bit longer than the one before it, so the flip goes left to right
            style={{ animationDelay: submitted ? `${col * 0.15}s` : "0s" }}
        >
            {value}
        </div>
    );
}

// draws the 6x6 grid, filled in rows for past guesses, and empty rows for remaining guess
function Board({ history, secret }) {
    const rows = 6;
    const cols = 6;
    return (
        <div className="board">
            {Array.from({ length: rows }).map((_, row) => {
                const word = history[row] || ""; // get the guess for this row so we can check what colors to show

                // only check colors if the player has already typed a guess for this row
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
                                submitted={row < history.length} // only animate rows after the player already guessed
                            />
                        ))}
                    </div>
                );
            })}
        </div>
    );
}

// shows a bold orange message when the word is too short or when the secret word gets revealed at the end
function Message({ text }) {
    return <p style={{ color: "orange", fontWeight: "bold" }}>{text}</p>;
}

// the input box, check button, and logic for checking guesses to match the secret word
function Guessing({ history, setHistory, secret }) {
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");

    function checkGuess() {
        if (!guess || guess.length !== 6) return; // do nothing if the word isn't 6 letters yet
        const upper = guess.toUpperCase(); // make guess capitalized so it can match with the secret word
        const newHistory = [...history, upper]; // add this guess to the history array so we can show it on the board
        setHistory(newHistory);
        setGuess(""); // clear the input box so the player can type their next guess

        if (upper === secret) {
            setMessage("You guessed the word!!");
        } else if (newHistory.length >= 6) {
            setMessage(`Out of guesses! The word was ${secret}.`); // reveal the answer so the player knows what it was
        } else {
            setMessage(""); // clear the win or lose message if one was showing
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
                onKeyDown={(e) => e.key === "Enter" && checkGuess()} // so you can hit Enter instead of clicking the button
            />

            {/* show a warning while they're still typing so they know the word needs to be 6 letters */}
            {guess.length > 0 && guess.length < 6 && (
                <Message text="Word must be 6 letters!" />
            )}
            <button onClick={checkGuess}>Check</button>
            <p>Total guess: {history.length}</p>
            <h3>Guess History:</h3>

            {/* list every past guess so the player can see what they've tried */}
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

// the whole app by picking a random secret word on load and passes it to both components
function App() {
    const [history, setHistory] = useState([]);

    // picks a random word when the game loads so it stays the same the whole game until user refreshes again
    const [secret] = useState(() => WORDS[Math.floor(Math.random() * WORDS.length)]);
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <Board history={history} secret={secret} />
            <Guessing history={history} setHistory={setHistory} secret={secret} />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
