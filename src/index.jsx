import React, { useState } from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import { Joke } from './Joke/Joke.jsx';
import { jokes } from './jokes.js';

const App = () => {
  let posts = jokes.map((joke) => {
    return (
      <Joke
        userId={joke.id}
        userName={joke.name}
        text={joke.text}
        likes={joke.likes}
        dislikes={joke.dislikes}
      />
    );
  });

  return posts;
};

render(<App />, document.querySelector('#app'));
