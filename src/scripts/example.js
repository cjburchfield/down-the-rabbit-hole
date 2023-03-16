class Invented {
  constructor(ele) {
    this.ele = ele;
    this.words = ["galumph", "snark", "jabberwocky"];
    this.ele.innerHTML = `
      <div class="invented-bubble">
        <div class="invented"><h4>${this.words[0]}</h4></div>
        <div class="invented"><h4>${this.words[1]}</h4></div>
        <div class="invented"><h4>${this.words[2]}</h4></div>
      </div>
    `;
    this.inventedBubbles = Array.from(this.ele.querySelectorAll(".invented > h4"));

    this.handleClick = this.handleClick.bind(this);
    this.ele.addEventListener("click", this.handleClick);

    this.inventedBubbles.forEach((inventedBubble) => {
      let isDefinitionVisible = false; // Track whether definition is currently visible
      inventedBubble.addEventListener("click", async () => {
        if (isDefinitionVisible) {
          inventedBubble.innerText = this.words[this.inventedBubbles.indexOf(inventedBubble)];
          isDefinitionVisible = false;
        } else {
          const inventedDefinition = await this.getDefinition(this.words[this.inventedBubbles.indexOf(inventedBubble)]);
          inventedBubble.innerHTML = `<span class="invented-definition">${inventedDefinition}</span>`;
          isDefinitionVisible = true;
        }
      });
    });
  }

  async handleClick(event) {
    const target = event.target;

    if (this.inventedBubbles.includes(target)) {
    } else if (this.inventedBubbles[0].innerText !== this.words[0]) {
      this.inventedBubbles.forEach((inventedBubble, index) => {
        inventedBubble.innerText = this.words[index];
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


export default Invented;
