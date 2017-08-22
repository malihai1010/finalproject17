var choices = ["Air","Earth","Fire","Water"];

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
  }
}
function changeImage(imgName){
  var current_word= document.getElementById("changing-words").innerHTML;
    if(current_word == "Air"){
    document.getElementById("air-img").style.display="block";
    image = document.getElementById('air-img');
    image.src = 'air-painted.jpg';
  }
    else if(current_word == "Earth"){
    document.getElementById("air-img").style.display="block";
    image = document.getElementById('air-img');
    image.src = 'earth-painted.jpg';
  }
  else if(current_word == "Fire"){
    document.getElementById("air-img").style.display="block";
    image = document.getElementById('air-img');
    image.src = 'fire-painted.jpg';
  }
else if(current_word == "Water"){
    document.getElementById("air-img").style.display="block";
    image = document.getElementById('air-img');
    image.src = 'water-painted.jpg';
  }
   console.log(current_word)

}

