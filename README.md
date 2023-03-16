# The Words of Wonderland
## **Introduction**

[The Words of Wonderland](https://cjburchfield.github.io/down-the-rabbit-hole/) is a data visualization project exploring the words - and worlds - of Lewis Carroll’s *Alice in Wonderland*. When the English language wouldn’t do, Carroll filled his stories with nonce words, some of which have since been accepted as real words. 

By hooking into the Merriam-Webster Dictionary API, this project breaks down Carroll’s word selection and allows users to easily access the definition of select words.

<!-- <img src="https://raw.githubusercontent.com/cjburchfield/down-the-rabbit-hole/main/assets/header_image.png" width = "350px"> -->


## Technical Details
The Words of Wonderland is coded entirely in `Vanilla Javascript`. 


After merging the twelve chapters to accumulate a unique word count, I gathered the neccesary metrics and generated definitions through the  Merriam Webster Dictionary `API`.
```javascript
    export const createLongestWordsList = (longestWords) => {
        const longestWordsList = document.createElement("ul");
      
        for (const word of longestWords) {
            const listItem = document.createElement("li");
            listItem.textContent = word;
            listItem.setAttribute("data-word", word);
            longestWordsList.appendChild(listItem);
        }
      
        longestWordsList.addEventListener("click", async (event) => {
            const API_KEY = "******";
            let selectedLongWord = event.target.getAttribute("data-word");
        
            const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${selectedLongWord}?key=${API_KEY}`);
            const data = await response.json();
            
            if (data.length > 0 && data[0].shortdef.length > 0) {
                const definition = data[0].shortdef[0];
                document.getElementById("word-definition").textContent = definition;
            }
        });
      
        return { longestWordsList };
    };
```



## Future Functionality
Users will be able access more robust data analysis, such as a breakdown of types of words used (i.e. nouns vs verbs), how many made up words were used, and an analysis of how Carroll's word choices changed throughout each chapter.

Carroll coined the concept of a portmanteau word, a word that is made by blending two words together (think smog - smoke and fog, or brunch - breakfast and lunch). Users will be able to create their own portmanteau word by entering two words and receiving their new word back.  
