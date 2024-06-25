function makeLine(size, character = '#') {
  let line = '';
  for (let i = 0; i < size; i++) {
    line += character;
  }
  return line;
}

console.log(makeLine(5, "$"));



//console.log(makeSquare(5));

function makeRectangle(width, height) {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width) + '\n');
  }
  return rectangle.slice(0, -1);
}

//console.log(makeRectangle(5, 3));

function makeSquare(size) {
  return makeRectangle(size,size);
}

//console.log(makeSquare(5));

function makeDownwardStairs(height) {
  let stairs = '';
  for (let i = 0; i < height; i++) {
    stairs += (makeLine(i+1) + '\n');
  }
  return stairs.slice(0, -1);
}

console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
  let  line = '';
  for (let i = 0; i < numSpaces; i++) {
    line += " "
  }
  line += makeLine(numChars);
  for (let i = 0; i < numSpaces; i++) {
    line += " "
  }
  return line; 
}

console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
  let triangle = '';
  for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
  }
  return triangle.slice(0, -1);
}

console.log(makeIsoscelesTriangle(5));

function reverse(str) {
  return str.split('').reverse().join('');
}

function makeDiamond(height) {
  let diamond = "";
  diamond += makeIsoscelesTriangle(height);
  diamond += "\n";
  diamond += reverse(makeIsoscelesTriangle(height));

  return diamond;
}

console.log(makeDiamond(5));
