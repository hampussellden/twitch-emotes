![](https://media.giphy.com/media/10yXFkBJ0MwGQ0/giphy.gif)

# Emote hunting - A useless web project

Emotes are the internets answer to Emojis. As can be seen in livestream chats, discord servers and even modded into games the use of emotes are widespread online. Often referencing decade old memes, like the legend [El Risitas](https://youtu.be/cDphUib5iG4?t=275) for example. What makes emotes different from emojis is the fact that they are all named something. When you write the name of an emote in a a twitch chat it will appear as the image instead, because of this emotes have become a way of expressing emotions in a funny way. Like the use of POG.

# How to play

In the middle of our vieport is the main playing field, if we are on a desktop we can hover over it to move our "hunter" on the left side. Clicking on the smaller areas within the container will create a "bullet" in the form of an emote. Try shooting it towards the other end where we have a target jumping around randomly. For a funnier experience toggle party mode by pressing the button at the top.

# Code Review

1. `script.js:6` - The if statement is never true, as far as I can tell?
2. `functions.js:75-79` - You could use foreach instead of while here
3. `script.js:44-49` - Could use an short hand here like this: `partyBtn.textContent === 'Party Mode' ? 'Normal mode' : 'Party Mode';`
4. `header.css:20, 26, 34` - `max-width` and `background-size: 100% auto;` is not needed
5. `header.css:24` - Could use an `cursor: pointer;` for accessibility

# Testers

Tested by the following people:

1. Axel Enghamre
2. John Doe
