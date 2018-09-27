function takeANumber(deliLine, newPersonName ) {
 deliLine.push(newPersonName);
  return "Welcome, " + newPersonName + ". You are number " + deliLine.length + " in line.";
}

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");
currentLine(katzDeliLine);
nowServing(katzDeliLine);
currentLine(katzDeliLine);
takeANumber(katzDeliLine, "Matz"); 
currentLine(katzDeliLine);
nowServing(katzDeliLine);
currentLine(katzDeliLine);

function nowServing(katzDeliLine) {
  if(!katzDeliLine.length){
    
  return "There is nobody waiting to be served!" ;

  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
  
}