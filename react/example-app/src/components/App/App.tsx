import React from 'react';
import Instructions from '../Instructions/Instructions';
import Welcome from '../Welcome/Welcome';
import Counter from '../Counter/Counter';
import Login from '../Login/Login';
import List from '../List/List';
import './App.css';

const displayEmojiName = (event:any) => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "arty popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return (
    <div className="container">
        <h1 id={greeting}>Hello, World</h1>
        {displayAction && <p>I am writing JSX</p>}
        <Instructions />
        <Welcome name="Max"/>
        <Counter />
        <Login />
        <List />
        {/* <Instructions /> */}
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
            >
              <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
            </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;