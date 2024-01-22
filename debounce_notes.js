// //=============================================================================
// // Debounce Concept
// //=============================================================================
/*
What is debounce?
The term debounce comes from electronics. When you’re pressing a button, let’s say on your TV remote, the signal travels to the microchip of the remote so quickly that before you manage to release the button, it bounces, and the microchip registers your “click” multiple times.
To mitigate this, once a signal from the button is received, the microchip stops processing signals from the button for a few microseconds while it’s physically impossible for you to press it again.
In JavaScript, the use case is similar. We want to trigger a function, but only once per use case.
*/

/*
### Debounce in JavaScript is a technique used to delay the execution of a function until after a certain amount of time has passed since the last time it was called. This can be useful for optimizing performance and improving user experience, especially when dealing with events that occur frequently, like typing, scrolling, or resizing.

// cSpell:disable
=> ekta function kono event trigger er jnno bar bar call hocche, tai ei function call er frequency ta control korar jnno -> debouncing use kora hoy.
=> typing er somoy handler ke use korbo na, jokhon type kora off hobe tokhn ei handler ke ek bar call korbo -> etai debounce/ debouncing

Here's how it works:
1. **Event Trigger:** An event occurs, such as a keystroke in a search box.
2. **Debounce Function:** The debounce function is called **every time** the event occurs.
3. **Timer:** The debounce function starts a timer with a specified **delay period**.
4. **Multiple Calls:** If the event occurs again **before the timer expires**, the timer is **reset** and starts again.
5. **Function Execution:** After the timer expires **without any further calls**, the original function is finally executed.

**Common Use Cases:**
* **Search boxes:** Showing suggestions only after the user stops typing.
* **Window resize:** Debouncing resize event handler to avoid layout thrashing.
* **Scroll events:** Triggering an action (e.g., loading more content) only after the user stops scrolling.
* **Button clicks:** Preventing double clicks and accidental submissions.

*/
