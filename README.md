# Next.js 15: Unhandled Promise Rejection in Client-Side Data Fetching

This repository demonstrates a common error in Next.js 15 applications involving client-side data fetching using `async/await` within a function component.  The `about.js` component attempts to fetch data, but the `await` keyword is used incorrectly outside of an `async` function, leading to an unhandled promise rejection.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe the error in your browser's console.

## Solution

The solution involves ensuring that `await` is used within an `async` function. The `bugSolution.js` file demonstrates the corrected implementation.