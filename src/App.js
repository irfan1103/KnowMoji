import React, { useState } from "react";
import "./styles.css";

var emojiDb = {
"🍇": "Grapes",
"🍈": "Melon",
"🍉": "Watermelon",
"🍊": "Tangerine",
"🍋": "Lemon",
"🍌": "Banana",
"🍍": "Pineapple",
"🥭": "Mango",
"🍎": "Red Apple",
"🍏": "Green Apple",
"🍐": "Pear",
"🍑": "Peach",
"🍒": "Cherries",
"🍓": "Strawberry",
"🫐": "Blueberries",
"🥝": "Kiwi Fruit",
"🍅": "Tomato",
"🫒": "Olive",
"🥥": "Coconut",
"🥑": "Avocado",
"🍆": "Eggplant",
"🥔": "Potato",
"🥕": "Carrot",
"🌽": "Ear of Corn",
"🌶️": "Hot Pepper",
"🫑": "Bell Pepper",
"🥒": "Cucumber",
"🥬": "Leafy Green",
"🥦": "Broccoli",
"🧄": "Garlic",
"🧅": "Onion",
"🍄": "Mushroom",
"🥜": "Peanuts"
}

var emojiKeys = Object.keys(emojiDb);

console.log(emojiKeys);

export default function App() {
  const [value, setValue] = useState("");
  
  var emojiInputHandler = function (event) {
    var userInput = event.target.value;
    var userOutput = emojiDb[userInput];
    if(!userOutput) {
      userOutput = "Sorry, the emoji you are looking for is not available in our DB right now."
    }
    setValue(userOutput);
  }
  
  var emojiClickHandler = function(emoji) {
    var userClick = emojiDb[emoji];
    setValue(userClick);
  }
  
  return (
    <div className="App">
      <h1>KnowMoji</h1>
      <input onChange={emojiInputHandler} placeholder="search 🔎" />
      <h2> Output: {value} </h2>
      <h3> Click on the emoji to know the meaning</h3>
      {emojiKeys.map(function (emoji) {
        return (
          <span
            className="icon-style"
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
