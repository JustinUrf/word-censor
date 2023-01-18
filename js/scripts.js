window.onload = function() {
  let text = "Zoinks ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu muppeteer nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

  const bannedWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]
  const textArray = text.split(" ");
  console.log(textArray)
  console.log(textArray[0].toLowerCase())
  for (i = 0; i <= textArray.length-1; i++) { 
    if(bannedWords.includes(textArray[i].toLowerCase())) {
      console.log(textArray[i]);
      textArray[i] ="****"
      console.log(textArray)
    }
  }
}



// Not sure how to onload properly in JS, just saving my function
// function censorWords(text) {
//   const bannedWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloo"]
//   const textArray = text.split(" ");
//   for (i=0; i <= textArray.length-1; i++);
//     console.log(i);
//     if(!bannedWords.includes(textArray[i])){
//       console.log(textArray[i]);
//     }
// }