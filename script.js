// myEach recreated method
function myEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// Function to run myEach and update the divs
function runMyEach() {
  const inputArray = [1, 2, 3, 4, 5];
  document.getElementById(
    "myEach-input"
  ).innerText = `Input Array: [${inputArray}]`;
  document.getElementById(
    "myEach-argument"
  ).innerText = `Argument: Multiply each element by 2`;

  let result = [];
  myEach(inputArray, function(element) {
    result.push(element * 2);
  });

  document.getElementById("myEach-result").innerText = `Result: [${result}]`;
}

// myMap recreated method
function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

// Function to run myMap and update the divs
function runMyMap() {
  const inputArray = [1, 2, 3, 4, 5];
  document.getElementById(
    "myMap-input"
  ).innerText = `Input Array: [${inputArray}]`;
  document.getElementById(
    "myMap-argument"
  ).innerText = `Argument: Multiply each element by 2`;

  const result = myMap(inputArray, function(element) {
    return element * 2;
  });

  document.getElementById("myMap-result").innerText = `Result: [${result}]`;
}

function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Function to run myFilter and update the divs
function runMyFilter() {
  const inputArray = [1, 2, 3, 4, 5];
  document.getElementById(
    "myFilter-input"
  ).innerText = `Input Array: [${inputArray}]`;
  document.getElementById(
    "myFilter-argument"
  ).innerText = `Argument: Keep only even numbers`;

  const result = myFilter(inputArray, function(element) {
    return element % 2 === 0;
  });

  document.getElementById("myFilter-result").innerText = `Result: [${result}]`;
}

// mySome recreated method
function mySome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

function even(element) {
  return element % 2 === 0;
}

// Function to run mySome and update the divs
function runMySome() {
    const inputArray = document
      .getElementById("mySome-input")
      .value.split(",")
      .map(Number);
  const callbackName = document.getElementById("mySome-argument").value;

    // Check if the callback function exists
    if (typeof window[callbackName] === "function") {
      const callbackFunction = window[callbackName];
      const result = mySome(inputArray, callbackFunction);
      if (result) {
        document.getElementById("mySome-result").innerText = "True";
      } else {
        document.getElementById("mySome-result").innerText = "False";
      }
    }else {
      document.getElementById("mySome-result").innerText = "Callback function not found.";
    }
}

// myEvery recreated method
function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}



// Function to run myEvery and update the divs
function runMyEvery() {
    const inputArray = document
      .getElementById("myEvery-input")
      .value.split(",")
      .map(Number);
  const callbackName = document.getElementById("myEvery-argument").value;

    // Check if the callback function exists
    if (typeof window[callbackName] === "function") {
      const callbackFunction = window[callbackName];
      const result = myEvery(inputArray, callbackFunction);
      if (result) {
        document.getElementById("myEvery-result").innerText = "True";
      } else {
        document.getElementById("myEvery-result").innerText = "False";
      }
    }else {
      document.getElementById("myEvery-result").innerText = "Callback function not found.";
    }
}

// myReduce recreated method
function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

function add(accumulator, currentValue) {
  return accumulator + currentValue;
}

function subtract(accumulator, currentValue) {
  return accumulator - currentValue;
}

function multiply(accumulator, currentValue) {
  return accumulator * currentValue;
}


// Function to run myReduce and update the divs
function runMyReduce() {
  const inputArray = document
    .getElementById("myReduce-input")
    .value.split(",")
    .map(Number);
  const callbackName = document.getElementById("myReduce-argument").value;

  // Check if the callback function exists
  if (typeof window[callbackName] === "function") {
    const callbackFunction = window[callbackName];
    const initialValue = inputArray[0];
    inputArray.shift
    const result = myReduce(inputArray, callbackFunction, initialValue);
    document.getElementById("myReduce-result").innerText = `Result: [${result}]`;
  } else {
    document.getElementById("myReduce-result").innerText = "Callback function not found.";
  }
}

// myIncludes recreated method
function myIncludes(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

// Function to run myIncludes and update the divs
function runMyIncludes() {
  const inputArray = document
    .getElementById("myIncludes-input")
    .value.split(",")
    .map(Number);
  const target = document.getElementById("myIncludes-argument").value;
  const result = myIncludes(inputArray, +target);

  document.getElementById("myIncludes-result").innerText = `Result: ${result}`;
}

// myIndexOf recreated method
function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

// Function to run myLastIndexOf and update the divs
function runMyIndexOf() {
  const inputArray = document
    .getElementById("myIndexOf-input")
    .value.split(",")
    .map(Number);
  const target = document.getElementById("myIndexOf-argument").value;
  const result = myIndexOf(inputArray, +target);

  document.getElementById("myIndexOf-result").innerText = `Result: ${result}`;
}

// myPush recreated method
function myPush(arr, elementToAdd) {
  arr[arr.length] = elementToAdd;
  return arr;
}

// Function to run myPush and update the divs
function runMyPush() {
  const inputArray = document
    .getElementById("myPush-input")
    .value.split(",")
    .map(Number);
  const elementToAdd = document.getElementById("myPush-argument").value;
  const result = myPush(inputArray, +elementToAdd);

  document.getElementById("myPush-result").innerText = `Result: [${result}]`;
}

// myLastIndexOf recreated method
function myLastIndexOf(array, element) {
  for (let i = array.length - 1; i > -1; --i) {
    if (array[i] == element) {
      return i;
    }
  }
  return -1;
}

// Function to run myLastIndexOf and update the divs
function runMyLastIndexOf() {
  const array = document
    .getElementById("myLastIndexOf-input")
    .value.split(",")
    .map(Number);
  const element = document.getElementById("myLastIndexOf-argument").value;
  const result = myLastIndexOf(array, +element);
  document.getElementById(
    "myLastIndexOf-result"
  ).innerText = `Result: ${result}`;
}

// grabKeys recreated method
function grabKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

// Function to run grabKeys and update the divs
function runGrabKeys() {
  const object = { a: 1, b: 2, c: 3 };
  document.getElementById("grabKeys-input").textContent = JSON.stringify(
    object
  );
  const result = grabKeys(object);
  document.getElementById("grabKeys-result").innerText = `Result: [${result}]`;
}

// grabValues recreated method
function grabValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}

// Function to run grabValues and update the divs
function runGrabValues() {
  const object = { a: 1, b: 2, c: 3 };
  document.getElementById("grabValues-input").textContent = JSON.stringify(
    object
  );
  const result = grabValues(object);
  document.getElementById(
    "grabValues-result"
  ).innerText = `Result: [${result}]`;
}
