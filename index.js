var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine, name) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
  }
}

//Build a function nowServing.
//return the first person in line
//remove that individual from the line

//If there is nobody in line, it should return "There is nobody waiting to be served!"
