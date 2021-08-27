import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import message from '../components/message';

const About: React.FC = () => {
  const [msg, setMsg] = useState('');

  const handleClick = () => {
    if (msg === '') return;
    message(msg);
    setMsg('');
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <>
      <h1>Hi, here is About page.</h1>
      <input
        type="text"
        value={msg}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Say something</button>
    </>
  );
};

export default About;
