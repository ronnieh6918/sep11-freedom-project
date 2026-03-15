# Entry 4
##### 3/12/2026

# Context:
Welcome to my 4th Blog Entry, I tinkered with [ReactJS](https://react.dev/learn) by using **React component (Square and Board)**, **useState hook (square and setsquare)**, using **prop to store values from per square using React components (Board --> Square)**, and **Dynamically rendering with map to avoid making 30 square tiles**. In addition, I used [w3schools](https://www.w3schools.com/css/), I was able to go back to applying some CSS styling that I may have forgotten from SEP10. **I used some of my prior knowledge of Flexbox and CSS to decorate the grid to make the Grid similar to that of wordle.** I plan to continue building the Grid and applying my ReactJS code soon to try to make my app more adaptative and functionable.

# Content:
#### Notes from my Learning Log 8:
* ``const [squares, setSquares] = useState(Array(30).fill(null));`` - creates an array holding 30 squares with a null value (non-set placeholder for each square), setSquare updates state whenever square changes (helpful when state is constantly updating and rendering with new values).
* ``return <button className="square">{value}</button>;`` - display value of ``squares[index]`` from Board component and renders on user's screen (checking each square by their assigned index and observe when state changes).
* ``{[0,1,2,3,4].map(row => (<div className="board-row" key={row}))}`` - Create 5 rows each starting at an index of 0 to 4. Map will create a div to separate each row with a div, and each row has their unique index that will be tracked if square state changes inside of the rows.
* ``{[0,1,2,3,4,5].map(col => { const index = row * 6 + col; return <Square key={index} value={squares[index]} />; })}`` - Create 6 columns per row. Row 0 --> Row 1 it needs to pass 6 squares (first square [index = 0] + remaining column [1,2,3,4,5]). Row 1 starts at the index of 1 * 6 = (6 + remaining column [7,8,9,10,11]) and the same process continues for Row 2,3,4. Then observe for when each square has its state changed passing it back to Square component.

Below is a 6-letter Wordle Grid using ReactJS and CSS styling:

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

* My current progress towards my MVP is applying my ReactJS code to my grid system, then I'll stop tinkering for a bit to continue working on building a webpage that will contain my code.

# Engineering Design Process
* I am on **step 4 of the Engineering Design Process which is to "Create a Prototype", my prototype is going to be making my Wordle Remix using ReactJS and I have to essentially start wrapping up my tinkering to start coding my final project.** In the previous blogs, I have already brainstormed and selected the possible solutions to my initial problem before making the prototype, now I am going to solely focus on making a Minimal Viable Product before going beyond and adding to my prototype.

# Skill
* **Organization** - Now I am starting to build my SEP11 Project, there is a lot of things I would have to consider. **I would need to organize what I would have to include on the webpage, managing what extra content I should include in my code, and being able to structure my plans effectively by layering out/finalizing my SEP11 Freedom Project.**
* **Early-Preparation** - After building my SEP11 Project, I would have to also plan for the presentation about my code and what project I am going to make. Hence, **I want to do an early preparation by memorizing a script before the in-class and the expo presentation after I finish my SEP11 Project. Additionally, I want to make sure I get things done before the Project deadline, so that I have the extra time to review my ReactJS code to my audiences.**

[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
