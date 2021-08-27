import Message, { add } from './Message';
import React from 'react';
import ReactDOM from 'react-dom';

let key = 0;

const message = (text: string): void => {
  let container = document.querySelector('#message-wrapper');
  const msg = {
    text,
    key: key++,
  };

  if (!container) {
    container = document.createElement('div');
    container.className = 'message-wrapper';
    container.id = 'message-wrapper';
    ReactDOM.render(React.createElement(Message), container);

    document.body.append(container);
  }

  add(msg);
};

export default message;
