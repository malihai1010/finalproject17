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
