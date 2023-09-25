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
  myEach(inputArray, function (element) {
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

  const result = myMap(inputArray, function (element) {
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

  const result = myFilter(inputArray, function (element) {
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

// Function to run mySome and update the divs
function runMySome() {
  const inputArray = [1, 7, 3, 5, 9];
  document.getElementById(
    "mySome-input"
  ).innerText = `Input Array: [${inputArray}]`;
  document.getElementById(
    "mySome-argument"
  ).innerText = `Argument: element % === 0`;

  const result = mySome(inputArray, function (element) {
    return element % 2 === 0;
  });

  document.getElementById("mySome-result").innerText = `Result: [${result}]`;
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
  const inputArray = [2, 20, 4, 8, 12];
  document.getElementById(
    "myEvery-input"
  ).innerText = `Input Array: [${inputArray}]`;
  document.getElementById(
    "myEvery-argument"
  ).innerText = `Argument: element % 2 === 0`;

  const result = myEvery(inputArray, function (element) {
    return element % 2 === 0;
  });

  document.getElementById("myEvery-result").innerText = `Result: [${result}]`;
}

// myReduce recreated method
function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

// Function to run myReduce and update the divs
function runMyReduce() {
  const initialValue = 0;
  const inputArray = [1, 2, 3, 4, 5];
  document.getElementById(
    "myReduce-input"
  ).innerText = `Input Array: [${inputArray}]`;
  document.getElementById(
    "myReduce-argument"
  ).innerText = `Argument: accumulator + element`;
  const result = myReduce(inputArray, function (accumulator, element) {
    return accumulator + element;
  }, initialValue);

  document.getElementById("myReduce-result").innerText = `Result: [${result}]`;
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
  const inputArray = document.getElementById(
    "myIncludes-input"
  ).value.split(',').map(Number)
  const target = document.getElementById(
    "myIncludes-argument"
  ).value
  const result = myIncludes(inputArray, +target)

  document.getElementById("myIncludes-result").innerText = `Result: ${result}`;
}

// myIndexOf recreated method
function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i
    }
  }
  return -1
}

// Function to run myLastIndexOf and update the divs
function runMyIndexOf() {
  const inputArray = document.getElementById(
    "myIndexOf-input"
  ).value.split(',').map(Number)
  const target = document.getElementById(
    "myIndexOf-argument"
  ).value
  const result = myIndexOf(inputArray, +target)

  document.getElementById("myIndexOf-result").innerText = `Result: ${result}`;
}

// myLastIndexOf recreated method
function myLastIndexOf(array, element) {
  for (let i = (array.length - 1); i > -1; --i) {
    if (array[i] == element) {
      return i
    }
  }
  return -1
}

// Function to run myLastIndexOf and update the divs
function runMyLastIndexOf() {
  const array = document.getElementById(
    "myLastIndexOf-input"
  ).value.split(',').map(Number)
  const element = document.getElementById(
    "myLastIndexOf-argument"
  ).value
  const result = myLastIndexOf(array, +element)
  document.getElementById("myLastIndexOf-result").innerText = `Result: ${result}`;
}

// grabKeys recreated method
function grabKeys(object) {
  const keys = []
  for (const key in object) {
    keys.push(key)
  }
  return keys
}

// Function to run grabKeys and update the divs
function runGrabKeys() {
  const object = { a: 1, b: 2, c: 3 }
  document.getElementById(
    "grabKeys-input"
  ).textContent = JSON.stringify(object)
  const result = grabKeys(object)
  document.getElementById("grabKeys-result").innerText = `Result: [${result}]`;
}

// grabValues recreated method
function grabValues(object) {
  const values = []
  for (const key in object) {
    values.push(object[key])
  }
  return values
}

// Function to run grabValues and update the divs
function runGrabValues() {
  const object = { a: 1, b: 2, c: 3 }
  document.getElementById(
    "grabValues-input"
  ).textContent = JSON.stringify(object)
  const result = grabValues(object)
  document.getElementById("grabValues-result").innerText = `Result: [${result}]`;
}
