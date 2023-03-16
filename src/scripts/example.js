class Word {
  constructor(ele) {
    this.ele = ele;
    this.words = ["galumph", "snark", "jabberwocky"];
    this.ele.innerHTML = `
      <div class="word-box">
        <div class="word"><h4>${this.words[0]}</h4></div>
        <div class="word"><h4>${this.words[1]}</h4></div>
        <div class="word"><h4>${this.words[2]}</h4></div>
      </div>
    `;
    this.wordBoxes = Array.from(this.ele.querySelectorAll(".word > h4"));

    this.handleClick = this.handleClick.bind(this);
    this.ele.addEventListener("click", this.handleClick);

    this.wordBoxes.forEach((wordBox) => {
      let isDefinitionVisible = false; // Track whether definition is currently visible
      wordBox.addEventListener("click", async () => {
        if (isDefinitionVisible) {
          wordBox.innerText = this.words[this.wordBoxes.indexOf(wordBox)];
          isDefinitionVisible = false;
        } else {
          const definition = await this.getDefinition(this.words[this.wordBoxes.indexOf(wordBox)]);
          wordBox.innerHTML = `<span class="definition">${definition}</span>`;
          isDefinitionVisible = true;
        }
      });
    });
  }

  async handleClick(event) {
    const target = event.target;

    if (this.wordBoxes.includes(target)) {
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
    if (Array.isArray(data)) {
      return data[0].shortdef[0];
    } else {
      return "This is a made up word!";
    }
  }
}


export default Word;
