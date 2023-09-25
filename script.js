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
function mySome(arr,callback) {
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

// Function to run mySome and update the divs
function runMySome() {
  const inputArray = [1,7,3,5,9];
  document.getElementById(
    "mySome-input"
  ).innerText = `Input Array: [${inputArray}]`;
  document.getElementById(
    "mySome-argument"
  ).innerText = `Argument: Checks whether array contain an even element`;

  const result = mySome(inputArray, function(element){
      return element % 2 === 0;
  });

  document.getElementById("mySome-result").innerText = `Result: [${result}]`;
}

// myEvery recreated method
function myEvery(arr,callback) {
  for(let i = 0; i < arr.length; i++){
    if(!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

// Function to run myEvery and update the divs
function runMyEvery() {
  const inputArray = [2,20,4,8,12];
  document.getElementById(
    "myEvery-input"
  ).innerText = `Input Array: [${inputArray}]`;
  document.getElementById(
    "myEvery-argument"
  ).innerText = `Argument: Checks whether array contain all even elements`;

  const result = myEvery(inputArray, function(element){
      return element % 2 === 0;
  });

  document.getElementById("myEvery-result").innerText = `Result: [${result}]`;
}
