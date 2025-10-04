# Tool Learning Log

## Tool: **React**

## Project: **Extreme Wordle (more letters)**

---

### 9/29/2025:
* In the first lesson of React, I am learning how to assign a defined component nesting it inside of a different component. The code below have 2 components, the assigned component being Profile have an image inside. The other one is the exported component which is Food where the defined component is imported and stored into the new component. 
  
### Notes:
* ``function text(){}`` = creates a component called text 
* ``return(element);`` = inside of a component is a return 

```
function Profile() {
  return (
    <img src="cookies.jpeg" alt="cookies"/>
  );
}

export default function Food() {
  return (
    <section>
      <h1>Cookies</h1>
      <Profile/>
      <Profile/>
      <Profile/>
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
