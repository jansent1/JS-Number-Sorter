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
};

// EventListeners:
sortButton.addEventListener("click", sortInputArray);
