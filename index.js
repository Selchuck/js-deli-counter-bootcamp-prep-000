function takeANumber(deliLine, newPersonName ) {
 deliLine.push(newPersonName);
  return "Welcome, " + newPersonName + ". You are number " + deliLine.length + " in line.";
}

function nowServing(deliLine) {
  if(deliLine.length === 0){
    
  return "There is nobody waiting to be served!" ;

  } else {
    var newPersonName = deliLine[0];
    deliLine.splice(0,1);
  }
  return "Currently serving " + deliLine + ".";
}