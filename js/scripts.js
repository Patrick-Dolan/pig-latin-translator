function pigLatin(userPhrase) {
  const vowels = ["a", "e", "i", "o", "u"];
  const phraseWithoutPunctuation = userPhrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  const phraseArr = phraseWithoutPunctuation.split(" ");
  const pigLatinArr = [];
  phraseArr.forEach((word) => {
    if (vowels.includes(word[0])) {
      pigLatinArr.push(word + "way");
    } else {
      pigLatinArr.push(word);
    }
  })
  return pigLatinArr.join(" ");
}

window.addEventListener("load", () => {
  document.getElementById("phrase-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const phraseToTranslate = document.querySelector("#userPhrase").value;
    document.querySelector("#pig-latin-display").innerText = pigLatin(phraseToTranslate);
    document.querySelector("#user-phrase").value = "";
  })
});