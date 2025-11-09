# Entry 1
##### 11/3/2025

# Context: 
For this freedom project, I want to design a remix of the Wordle App for the purpose of entertainment and also educating users who want to build on their vocabulary by guessing new words and also taking the time to learn them if they want. To prepare on building this Wordle Remix, I am going to use [**React JS**](https://react.dev/learn) because it is a tool that enhances Javascript codes and good tool for handling events. Hence, since React works well with Javascript, I can apply Javascript codes like functions, arrays, conditions, loops, etc... by learning from [**FreeCodeCamp**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures#basic-javascript).

# Content:
I started tinkering with one of **React's Hook, React-controlled inputs, and Event binding.** I also used **conditionals** and **arrays** along with **functions**. 

Below is how I tinkered: 

<!-- React Code -->
```
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

<img width="819" height="316" alt="Screenshot 2025-11-09 4 29 23 PM" src="https://github.com/user-attachments/assets/cc9f77f3-f2b5-43eb-96cd-b508aff49481" />

# EDP: 
I am on stage 1 of the Engineering Design Process: Define my problem. **I want to focus my app on education and entertainment because I find that users, including me, often get bored and play gaming apps, and as much as I love playing games since they bring me a lot of entertainment. Not all games are created for educational purposes. So, in the end, I want to make my own wordle remix app which can help me and other users who want to learn while also having fun.** 

# Skills:
* **Researching: I have to research on what tool to pick from. Using google I was able to consider some of my available options like Phraser, PixiJS, or React.** Although, we had to narrow the tools to only 1, I still decided to pick React JS since I believe that this tool would have a lot of potential if I could learn it. 
* **Organization: In order for me to build my app, I need to focus on how I want my App design layout to be and how I will apply React JS and Javascript.** But my overall goal is to build a page where the user loads and where the user can select the difficulty they want. Then, I will design the app's function which is to guess the letters starting from 5, then 6, then 7. In case I don't have time to finish, I will only include a wordle remix for just 6 or 7 letters.


[Next](entry02.md)

[Home](../README.md)
