# Pig Latin Translator

#### By _**Patrick Dolan**_

#### _A web app that translates english phrases and words into pig latin._  

## Github Pages Link
[Pig Latin Translator (LIVE)](https://patrick-dolan.github.io/pig-latin-translator/)

## Technologies Used
* Bootstrap
* HTML, CSS, and Javascript  

## Description

This web application is a simple Pig Latin translator that takes in a regular english phrase or word and shows you what the pig latin equivalent is.

## Setup/Installation Requirements

* _Download or Clone the repo down to your computer._
* _Navigate into the "pig-latin-translator" directory you just downloaded and double click the index.html to launch the webpage._

## Known Bugs  
* _No known issues_

## License

_MIT_

Copyright (c) _2023_ _Patrick Dolan_

## How Pig Latin Works
Pig Latin is a language game that involves adding imaginary endings to real English words. In this prompt, you'll create an application that turns words into Pig Latin.

Here are the rules of Pig Latin:

For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u." Don't treat "y" as a vowel. Examples: "away" becomes "awayway" and "okay" becomes "okayway."

For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". Examples: "code" becomes "odecay" and "move" becomes "ovemay."

If the first consonants include "qu", move the "q" and the "u." Don't forget about words like "squeal" where "qu" doesn't come first! Examples: "quick" becomes "ickquay" while "squeal" becomes "ealsquay."

## Tests

*This project was created using a prompt from Learnhowtoprogram.com's Fidgetech track and includes a requirement to do test pseudo code. The following are my pseudo tests:*

```
Describe: translatePigLatin()
```

```
Test: "It will add 'way' to the end of words that begin with vowels."  
Code: pigLatin("a");  
Expected Output: "away"  
```

```
Test: "It will remove punctuation from the string"
Code: pigLatin("a!")
Expected Output: "away"
```

```
Test: "It will move all consecutive consonants at the beginning of the word to the end of that word and add 'ay'"
Code: pigLatin("practice")
Expected Output: "acticepray"
```

```
Test: "When the first consonants include 'qu' it will move the consonants and the 'qu' to the end of the word and add 'ay'"
Code: pigLatin("squeal")
Expected Output: "ealsquay"
```
