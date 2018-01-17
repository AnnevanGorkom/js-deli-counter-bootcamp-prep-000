var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(name) {
  if (name === katzDeli[0]) {
    return `Serving ${name}`
  } else {
    return "There is nobody waiting to be served!"
  }
}

//Build a function nowServing.
//return the first person in line
//remove that individual from the line

//If there is nobody in line, it should return "There is nobody waiting to be served!"
