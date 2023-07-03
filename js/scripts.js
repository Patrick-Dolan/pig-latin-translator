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

window.addEventListener("load", () => {
  document.getElementById("phrase-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const phraseToTranslate = document.querySelector("#user-phrase").value;
    document.querySelector("#pig-latin-display").innerText = pigLatin(phraseToTranslate);
  })
});