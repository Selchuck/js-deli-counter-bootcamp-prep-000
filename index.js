function takeANumber(deliLine, newPersonName ) {
 deliLine.push(newPersonName);
  return "Welcome, " + newPersonName + ". You are number " + deliLine.length + " in line.";
}

takeANumber(katzDeli, "Ada");
takeANumber(katzDeli, "Grace");
takeANumber(katzDeli, "Kent");
currentLine(katzDeli);
takeANumber(katzDeli, "Matz"); 
currentLine(katzDeli); 
nowServing(katzDeli);
currentLine(katzDeli);

function nowServing(deliLine) {
  if(!deliLine.length){
    
  return "There is nobody waiting to be served!" ;

  } else {
    return "Currently serving " + deliLine.shift() + ".";
  }
  
}