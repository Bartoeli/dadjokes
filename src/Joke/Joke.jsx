import React, { useState } from 'react';
import './style.css';

export const Joke = (props) => {
  const [upLikes, setUpLikes] = useState(props.likes);
  const [downLikes, setDownLikes] = useState(props.dislikes);

  const addLike = () => {
    setUpLikes(upLikes + 1);
  };

  const takeLike = () => {
    setDownLikes(downLikes + 1);
  };

  return (
    <>
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img
                className="user-avatar"
                src={`../assets/img-users/${props.userId}.png`}
              />
              <p className="user-name">{props.userName}</p>
            </div>

            <p className="joke__text">{props.text}</p>
          </div>
          <div className="joke__likes">
            <button
              id="btn-up"
              className="btn-like btn-like--up"
              onClick={addLike}
            ></button>
            <span id="likes-up" className="likes-count likes-count--up">
              {upLikes}
            </span>
            <button
              id="btn-down"
              className="btn-like btn-like--down"
              onClick={takeLike}
            ></button>
            <span id="likes-down" className="likes-count likes-count--down">
              {downLikes}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
