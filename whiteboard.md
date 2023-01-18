Test Driven Development
Javascript Logic

Test #1
Describe: wordCensor();

Test: "It should return nothing if the string has no words that need to be censored";
Code:
const text = "passage has no swear words";
word-censor(text);
Expected Output: > no censor made.

Test #2
Describe: wordCensor();

Test: "It should return any text that is in the "banned" words array."
Code:
const text = "zoinks!, muppeteer, Biffaroni, loopdaloop The rest of these words are completely fine!"
word-censor(text)
Expected Output: "zoinks, muppeteer, biffaroni, loopdaloop,"

Test #3,
Describe: wordCensor();

Test: "It should take any returned text that is in the banned words array, and spit them back censored."
Code:
const text = "zoinks!, muppeteer, Biffaroni, loopdaloop The rest of these words are completely fine!"
Expected output: "z------!, m--------, B--------, l----------, The rest of these words are completely fine1"





