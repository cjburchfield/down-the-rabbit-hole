# Down the Rabbit Hole
## **Background**

**Down the Rabbit Hole** is a data visualization project exploring the words - and worlds - of Lewis Carroll’s *Alice in Wonderland*. When the English language wouldn’t do, Carroll filled his stories with nonce words, some of which have since been accepted as real words. 

By hooking into the Merriam-Webster Dictionary API, this project breaks down Carroll’s word selection and allows users to easily access the definition of select words. It will visualize metrics including how many real versus invented words Carroll used, what were his longest vs shortest words, and what were his most frequently used words.

Lastly, Carroll coined the concept of a portmanteau word, a word that is made by blending two words together (think smog - smoke and fog, or brunch - breakfast and lunch). Users will be able to create their own portmanteau word by entering two words and receiving their new word back.  

## Functionality & MVPs

With ********************Down the Rabbit Hole********************, users will be able to:

- Leverage the Merriam Webster `API` to see the definition of select words Carroll used
- Interact with dynamic `D3` charts breaking down Carroll’s word choices
- Create their own portmanteau word by entering two words and receiving their new word back.

In addition, this project will include:

- An **About** module describing the inspiration for the projects and tips for navigating it
- A production **README**

## Wireframes
![Screen Shot 2023-03-09 at 5 12 18 PM](https://user-images.githubusercontent.com/121882445/224172253-03e64ccc-0d89-4c0c-a126-f7032311fd71.png)
*Bonus content could be implemented by scrolling down the page*

## Technologies, Libraries, APIs

This project will be implemented with the following technologies:

- The Merriam Webster `API` to map the book text against
- `D3` to generate the charts
- `JavaScript`, `HTML`, and `CSS`!

## Implementation Timeline

- **Thursday:** Set up project, including getting Webpack up and running. Practice fetching into the Merriam-Webster API.
- **Friday & Weekend:** D3 deep dive! Watch tutorials on how to use D3, hone into what type of charts makes the most sense. Finalize datasets - procure a JSON of the book itself, decide on whether to store the dictionary in a JSON file or fetch it when the DOM loads.
- **Monday**: D3 work - have the basic charts rendered on the page.
- **Tuesday**: Portmanteau generator & definition generator
- **Wednesday**: Style day! Ensure all navigation links are implemented.
- **Thursday Morning**: Deploy to GitHub Pages! Update the Production README and start on any bonus functionality.

## Bonus Features

- The page would be updated every year as new words are accepted into the dictionary and definitions change.
- Users will be able to access definitions of all words featured in the book
- Additional styling ideas:
    - Of the many words Carroll invented, some are creatures (Jabberwock, Bandersnatch). I could put a spotlight on the different creatures that Carroll imagined.
    - An animated background simulating the scene of Alice falling down the rabbit hole.
