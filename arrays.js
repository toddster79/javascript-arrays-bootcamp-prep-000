var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  
  var array = [];
  var newArray = [];
  var newArray2 = [];
  
  function addElementToBeginningOfArray(array, element) {
    newArray = [element, ...array];
    return newArray;
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
    return array;
  }
  
  function addElementToEndOfArray(array, element) {
    newArray2 = [...array, element];
    return newArray2;
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array;
  }
  
  function accessElementInArray(array, index) {
    return array[index];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift();
    return array;
  }
  
  function removeElementFromBeginningOfArray(array) {
    return array.slice(1);
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop();
    return array;
  }
  
  function removeElementFromEndOfArray(array) {
    return array.slice(0, array.length - 1);
  }
  
  