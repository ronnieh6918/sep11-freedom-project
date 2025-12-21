# Entry 2
##### 12/21/2024

# Context: 
Welcome to my 2nd blog entry, 

# Content:
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

# Engineering Design Process:
I am on **step 2 of the Engineering Design Process which is to brainstorm possible solutions for my problem** and the problem I defined was mostly on how to make my app more entertaining. Heres some of my possible idea for my app, I want to first start by making a 6 letter remix first using React JS components, then make a wordle remix of 7 letters could make this unique and a more fun experience. Before I make a separate webpage with HTML, Bootstrap, and CSS design to link the two remix, so that the user can select the difficulty they want. But, I also want to be able to have time to fix any type of errors in my code that may affect information being rendered onto the user's screen.

# Skills:
* **Problem-Solving** - When tinkering with my learning logs, one thing I think I did well is trying to think ways to learn from errors and making sure my app functions properly. I remember during my most recent learning log, I had to go back to my code and made sure that when user inputs guesses that are not 6 letters, it shouldn't appear into the history array and shown in the history log. This way, it allows user to repeat their 6 letter guess making it consistent even if when they accidentally had typos with their original guess. 
* **Creativity** - A lot of my learning log is trying to focus on how to improve my wordle remix. I want to be able to expand this further and once I'm able to make a simple wordle app, I want to try adding in difficulty levels like users can pick their guess up to a 7 letter word. There is so much to do that I can try to improve like adding in a separate page when user can select their preference, and I want to try incoperating all of this while also considering how I would design this in the future.


[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
