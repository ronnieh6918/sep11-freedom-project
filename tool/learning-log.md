# Tool Learning Log

## Tool: **React**

## Project: **Extreme Wordle (more letters)**

---

### 9/29/2025:
* In the first lesson of React, I am learning how to assign a defined component nesting it inside of a different component. The code below have 2 components, the assigned component being Profile have an image inside. The other one is the exported component which is Food where you can render defined components by importing them into the exported component's return statement.
  
### Notes:
* ``function text(){}`` = creates a defined function component called text 
* ``return(element);`` = inside of a component is a return statement where you can put HTML elements to render what appears on the users interface when using that specific component
* ``export default function Food(){}`` = creates a main export called Food where in the return statement you can render other functional components that can be imported and used within the main component

```
function Cookies() {
  return (
    <img src="cookies.jpeg" alt="cookies"/>
  );
}

export default function Food() {
  return (
    <section>
      <h1>Tasty Treat:</h1>
      <Cookies/>
      <Cookies/>
      <Cookies/>
    </section>
  );
}
```

### X/X/XX:
* Text


<!-- 
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
