var choices = ["soar to new heights","roam the roads of lands remote","rise from the ashes","stir murky depths"];

function upNavigation() {
  // Get ul > li element
  var listElement = document.getElementById("changing-words");
  console.log(listElement);
  // Get the text inside the li element
  var current_word = listElement.textContent;
  console.log(current_word);
  // Get the index of the current_word inside of the array
  var current_word_index = choices.indexOf(current_word);
  console.log(current_word_index);
  // If the current_word_index == 0
    //
  if (current_word_index == 0) {
    current_word_index = choices.length - 1;
    listElement.innerHTML = choices[current_word_index]
  } else {
    // Change the text inside the li
      // Find the word at next index by decreasing current_word_index by 1
    listElement.innerHTML = choices[current_word_index -1];
  }
}
function downNavigation(){
  // Get ul > li element
  var listElement = document.getElementById("changing-words");
  console.log(listElement);
  // Get the text inside the li element
  var current_word = listElement.textContent;
  console.log(current_word);
  // Get the index of the current_word inside of the array
  var current_word_index = choices.indexOf(current_word);
  console.log(current_word_index);
  if (current_word_index == choices.length - 1) {
    current_word_index = 0;
    listElement.innerHTML = choices[current_word_index]
  } else {
    // Change the text inside the li
      // Find the word at next index by increasing current_word_index by 1
    listElement.innerHTML = choices[current_word_index +1];
    // document.getElementById("col-right").style.background = colors[current_word_index + 1]
  }
}

function changeImage(imgName){
  var listElement = document.getElementById("changing-words");
  console.log(listElement);
  // Get the text inside the li element
  var current_word = listElement.textContent;
    if(current_word == "soar to new heights"){
    image = document.getElementById('air-img');
    image.src = 'air-painted.jpg';
    document.getElementById("col-right").style.background = "#840029";
  }
    else if(current_word == "roam the roads of lands remote"){
    image = document.getElementById('air-img');
    image.src = 'earth-painted.jpg';
    document.getElementById("col-right").style.background = "#846500";
  }
  else if(current_word == "rise from the ashes"){
    image = document.getElementById('air-img');
    image.src = 'fire-painted.jpg';
    document.getElementById("col-right").style.background = "#7500FF";
  }
else if(current_word == "stir murky depths"){
    image = document.getElementById('air-img');
    image.src = 'water-painted.jpg';
    document.getElementById("col-right").style.background = "#FF3F31";
  }
   console.log(current_word)
}
