function takeANumber(katzDeliLine, newPersonName ) {
 katzDeliLine.push(newPersonName);
  return "Welcome, " + newPersonName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0){
    
  return "There is nobody waiting to be served!" ;

  } else {
    var newPersonName = katzDeliLine[0];
    katzDeliLine.splice(0,1);
  }
  return "Currently serving " + katzDeliLine + ".";
}