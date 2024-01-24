// dummy data url => https://dummyjson.com/products/search?q=Laptop

// selecting dom elements
const searchBox = document.getElementById("search");
const dataContainer = document.getElementById("dummy");

// showing searched products to UI
function showProducts(products, query) {
  // if there is any query and products
  if (products.length > 0 && query) {
    // mapping the products for creating single html elements
    const elements = products.map((data) => {
      return `<li>${data.title}</li>`;
    });

    // adding html elements to the data container div
    dataContainer.innerHTML = elements.join("");
  } else {
    // when there is no query, data container will be empty
    dataContainer.innerHTML = "";
  }
}

// handling search results
async function handleSearch(e) {
  // search keyword
  let query = e.target.value;

  // fetching dummy data
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}`
  );

  // taking data from response
  const data = await response.json();
  let products = data.products;

  // sending data and query to showProducts fn
  showProducts(products, query);
}

// debouncing fn -> this uses closure concept
function debounce(fn, delay) {
  // By using closure, this fn maintain the timer variable, which will store the timeout ID
  let timer; // in every return fn call, this timer will persist the timeout ID value

  // this function in the return, clears the existing timeout (if any) and sets a new timeout to execute the provided function (fn) after the specified delay.
  return (...args) => {
    // clearing timeout ID
    clearTimeout(timer);

    // setTimeout fn returns a timeout ID to the timer variable but for the delay, this internal fn will not be called immediately
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// document.addEventListener("input", handleSearch);

// Using oninput event => this event occurs when an element gets input.
// here, we pass the handler fn and the delay to the debounce fn
// this time delay is used for delaying the request/ search result.
searchBox.oninput = debounce(handleSearch, 1000);

/*

!!! Here's a point-by-point explanation of how debouncing works in the provided code:

1. **Triggering Event:**
   - The `oninput` event fires whenever a user types in the search box (`searchBox`).

2. **Debounce Function:**
   - The `debounce(handleSearch, 1000)` function is assigned to handle the `oninput` event.
   - It creates a debounced version of the `handleSearch` function.

3. **Timer Management:**
   - The debounce function maintains a timer using a closure.
   - Each time the `oninput` event occurs:
     - The existing timer (if any) is cleared using `clearTimeout`.
     - A new timer is set using `setTimeout` with a delay of 1000 milliseconds (1 second).

4. **Delayed Execution:**
   - The `handleSearch` function is not executed immediately upon each keystroke.
   - It's only executed after the timer expires without further input events.

5. **Search Execution:**
   - If no new events occur within the 1-second delay:
     - The timer's callback function runs.
     - It calls the original `handleSearch` function with the latest search query.
     - This performs the search, fetches data, and displays results.

**Key Points:**
- Debouncing prevents excessive search requests while the user is still typing.
- It waits for a brief pause in input before executing the search.
- This improves performance and user experience by reducing unnecessary API calls and UI updates.
- The delay time (1000 milliseconds in this case) can be adjusted based on preferences and use cases.

*/
