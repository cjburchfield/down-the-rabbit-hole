class Bubble {
  constructor(ele) {
    this.ele = ele;
    this.words = ["galumph", "snark", "jabberwocky"];
    this.ele.innerHTML = `
      <div class="bubble-box">
        <div class="word"><h1>${this.words[0]}</h1></div>
        <div class="word"><h1>${this.words[1]}</h1></div>
        <div class="word"><h1>${this.words[2]}</h1></div>
      </div>
    `;
    this.bubbleBoxes = Array.from(this.ele.querySelectorAll(".word > h1"));

    this.handleClick = this.handleClick.bind(this);
    this.ele.addEventListener("click", this.handleClick);

    this.bubbleBoxes.forEach((bubbleBox) => {
      let isDefinitionVisible = false; // Track whether definition is currently visible
      bubbleBox.addEventListener("click", async () => {
        if (isDefinitionVisible) {
          bubbleBox.innerText = this.words[this.bubbleBoxes.indexOf(bubbleBox)];
          isDefinitionVisible = false;
        } else {
          const definition = await this.getDefinition(this.words[this.bubbleBoxes.indexOf(bubbleBox)]);
          bubbleBox.innerText = definition;
          isDefinitionVisible = true;
        }
      });
    });
  }

  async handleClick(event) {
    const target = event.target;

    if (this.bubbleBoxes.includes(target)) {
    } else if (this.bubbleBoxes[0].innerText !== this.words[0]) {
      this.bubbleBoxes.forEach((bubbleBox, index) => {
        bubbleBox.innerText = this.words[index];
      });
    }
  }

  async getDefinition(text) {
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

export default Bubble;
