// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

// Load Color Data
let colorData = await readJSON("data/color-data.json");
console.log(colorData[0]); // Verify Color Data

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  outputEl.innerHTML = "";

  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all-colors") {
    allColors();
  } else if (selection === "bright-colors") {
    brightColors();
  } else if (selection === "red-pink-families") {
    redPinkFamilies();
  } else if (selection === "family-search") {
    familySearch();
  } else if (selection === "start-letter-search") {
    startLetterSearch();
  }
}

// MENU FUNCTIONS
function allColors() {
  // Display Name and Family of All Colors
  for (let i = 0; i < colorData.length; i++) {
    outputEl.innerHTML += `<h3>${colorData[i].name}: ${colorData[i].family} </h3>`;
  }
}

function brightColors() {
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i]["brightness"] >= 200) {
      outputEl.innerHTML += `<h3>${colorData[i].name}: ${colorData[i].brightness}<h3>`;
    }
  }
}
// Display Name and Brightness of All Colors with a Brightness of 200 and Higher

function redPinkFamilies() {
  let count = 0;
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i]["family"] == "Red" || colorData[i]["family"] == "Pink") {
      count++;
    }
  }
  outputEl.innerHTML = `<h3>Count Red/Pink Family Colors : ${count}</h3>`;

  // Count Colors in Red/Pink Families
}

function familySearch() {
  let input = prompt("provide family name");
  let count = 0;
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i]["family"] == input) {
      count++;
      outputEl.innerHTML += `<h3> ${colorData[i]["name"]}: ${colorData[i]["family"]}</h3>`;
    }
  }
  // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
  outputEl.innerHTML += `<h1>Total Matches: ${count}</h1>`;
}

function startLetterSearch() {
  let input = prompt("Provide starting letter");
  let count = 0;
  console.log(input);
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].name.charAt(0) == input.toUpperCase()) {
      count++;
      outputEl.innerHTML += `<h3>${colorData[i].name}</h3>`;
    }
  }
  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
  outputEl.innerHTML += `<h1>Total Matches:${count}</h1>`;
}
