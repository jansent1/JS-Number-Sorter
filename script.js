/*In this project i will demonstrate three methods to sort an Array, bubbleSort, selectionSort and insertionSort */

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
  // sort the values
  const sortedValues = selectionSort(inputValues);
  // display the sorted values in UI:
  updateUI(sortedValues);
};

// Function to update the display with the sorted numbers. The empty array is set as a "fallback value" because the function doesn't return anything:
const updateUI = (array = []) => {
  // iterate over the Array:
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

// Actually sort the Array:
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      console.log(array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

// Second method of sorting, a selectionSort function:
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      console.log(array, array[j], array[minIndex]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
};

// EventListeners:
sortButton.addEventListener("click", sortInputArray);
