// Business Logic

function pigLatin(userPhrase) {
  const vowels = ["a", "e", "i", "o", "u"];
  const phraseWithoutPunctuation = userPhrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim().toLowerCase();
  const phraseArr = phraseWithoutPunctuation.split(" ");
  const pigLatinArr = [];
  phraseArr.forEach((word) => {
    // Solve for all words that start with a vowel
    if (vowels.includes(word[0])) {
      pigLatinArr.push(word + "way");
    } else {
      // Solve for consonants rule
      let wordArr = word.split("");
      let consonants = "";
      let firstVowelIndex = 0;
      for (let i = 0; i < wordArr.length; i++) {
        if (!vowels.includes(wordArr[i])) {
          consonants += wordArr[i];
        } else {
          // Solve for "qu" consonants rule
          if (wordArr[i - 1] === "q" && wordArr[i] === "u") {
            firstVowelIndex = i + 1;
            consonants += wordArr[i];
            break;
          } else {
            firstVowelIndex = i;
            break;
          }
        }
      }
      pigLatinArr.push(word.slice(firstVowelIndex, word.length) + consonants + "ay");
    }
  })
  return pigLatinArr.join(" ");
}

// UI Logic

function createAndDisplayPigLatinCard(inputPhrase, pigLatinPhrase) {
  // Set up card body
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("mt-2");
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Set up card titles
  let inputCardTitle = document.createElement("h4");
  inputCardTitle.classList.add("card-title");
  inputCardTitle.innerText = "Input phrase:";
  let piglatinCardTitle = document.createElement("h4");
  piglatinCardTitle.classList.add("card-title");
  piglatinCardTitle.innerText = "Pig latin:";

  // Set up card text
  let inputCardText = document.createElement("p");
  inputCardText.classList.add("card-text");
  inputCardText.innerText = inputPhrase;
  let piglatinCardText = document.createElement("p");
  piglatinCardText.classList.add("card-text");
  piglatinCardText.innerText = pigLatinPhrase;

  // Set up card
  cardBody.appendChild(inputCardTitle);
  cardBody.appendChild(inputCardText);
  cardBody.appendChild(piglatinCardTitle);
  cardBody.appendChild(piglatinCardText);
  card.appendChild(cardBody);

  // Prepend card to dom
  let displayDiv = document.querySelector("#pig-latin-display");
  displayDiv.prepend(card) ;
}

window.addEventListener("load", () => {
  document.getElementById("phrase-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const phraseToTranslate = document.querySelector("#user-phrase").value;
    const pigLatinPhrase = pigLatin(phraseToTranslate);
    createAndDisplayPigLatinCard(phraseToTranslate, pigLatinPhrase);
    document.querySelector("#user-phrase").value = "";
  })
});