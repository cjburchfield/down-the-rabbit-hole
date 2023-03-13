class Word {
  constructor(ele) {
    this.ele = ele;
    this.words = ["tap", "each", "word"];
    this.ele.innerHTML = `
      <div class="word-box">
        <div class="word"><h1>${this.words[0]}</h1></div>
        <div class="word"><h1>${this.words[1]}</h1></div>
        <div class="word"><h1>${this.words[2]}</h1></div>
      </div>
    `;
    this.wordBoxes = Array.from(this.ele.querySelectorAll(".word > h1"));

    this.handleClick = this.handleClick.bind(this);
    this.ele.addEventListener("click", this.handleClick);

    this.wordBoxes.forEach((wordBox) => {
      wordBox.addEventListener("click", () => {
        wordBox.innerText = this.words[this.wordBoxes.indexOf(wordBox)];
      });
    });
  }

  async handleClick(event) {
    const target = event.target;

    if (this.wordBoxes.includes(target)) {
      const wordIndex = Array.from(this.wordBoxes).indexOf(target);
      const definition = await this.getDefinition(this.words[wordIndex]);
      if (target.innerText === this.words[wordIndex]) {
        target.innerText = definition;
      } else {
        target.innerText = this.words[wordIndex];
      }
    } else if (this.wordBoxes[0].innerText !== this.words[0]) {
      this.wordBoxes.forEach((wordBox, index) => {
        wordBox.innerText = this.words[index];
      });
    }
  }

  async getDefinition(word) {
    const apiKey = "4d51c794-eeb0-40fb-bef2-8b0605824280";
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    if (Array.isArray(data)) { //Checking to see if the word is in the dictionary as array expected response
      return data[0].shortdef[0]; //Pulled shortdef from MW'S JSON Response documentation (https://dictionaryapi.com/products/api-collegiate-dictionary)
    } else {
      return "This is a made up word!";
    }
  }
}

export default Word;

