<!-- 1. change quotes by clicking on the 'next' button: -->

1. `Handle State for Current Quote`

- You need to track the currently displayed quote. Since you've already fetched multiple quotes and stored them in an array, now you'll need to manage which quote is currently shown.
- Add a state variable to store the index of the current quote (e.g., currentQuoteIndex).

2. `Update the Quote on Button Click`

- Modify the handleNextButtonClick function to increment the index (currentQuoteIndex), so that the next quote is shown each time the button is clicked.
- Make sure to handle the case when the index exceeds the number of available quotes (i.e., loop back to the beginning).

3. `Pass the Current Quote to Display`

- Use the currentQuoteIndex to display only the quote at that index from the quotes array in the Quotes component.
- Update your JSX to conditionally display a single quote instead of mapping through all the quotes.

4. `Button Click Functionality`

- Ensure the "Next" button is tied to this logic. The button will trigger the handleNextButtonClick, which should update the current quote state.

5. `Conditional Rendering`

- Before displaying the current quote, ensure there are quotes available. Display a loading message or a default message if the quotes array is empty.

6. `Refactor and Cleanup`

- Ensure that your Quotes component only handles the display of the current quote and does not re-fetch on each render.
- Double-check error handling to ensure the user gets feedback if something goes wrong.
