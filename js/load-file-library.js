// LOAD FILE DATA LIBRARY

// Load Text File into an Array
// Each line of the file becomes an array element
async function readLines(filePath) {
  const response = await fetch(filePath);
  const text = await response.text();
  return text.split(/\r?\n/);
}

// Load JSON File
// File contents must be valid JSON
async function readJSON(filePath) {
  const response = await fetch(filePath);
  return await response.json();
}
