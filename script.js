// Vars for the HTML elements:
const sortButton = document.getElementById("sort");

// Sorting Logic (Basicly this is an eventListener for the sortButton):
const sortInputArray = (event) => {
  // Prevent default form submit:
  event.preventDefault();
  //Get the values of the select elements and convert it to an Array with the spread operator. With .map() the strings are then converted to numbers:
  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));
  // Show the inputted array in the Output section without sorting the array:
  updateUI(inputValues);
};

// Function to update the display with the sorted numbers. The empty array is set as a "fallback value" because the function doesn't return anything:
const updateUI = (array = []) => {
  // iterate over the Array:
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

// EventListeners:
sortButton.addEventListener("click", sortInputArray);
