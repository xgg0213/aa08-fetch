/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here 
const url = "http://localhost:8000/products"

const headers = {"Content-Type": "application/x-www-form-urlencoded"};
// Use the URLSearchParams API to format your body as shown below
const body = new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: "11.99",
    categories: "grocery"
});

const options = {
    method: "POST", 
    headers: headers,
    body: body
};

fetch(url, options)


/* ============================== Phase 2 ============================== */

// Your code here 



/* ============================== Phase 3 ============================== */

// Your code here 
