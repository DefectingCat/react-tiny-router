import React, { useState } from 'react';
import MessageBox from './MessageBox';

interface Messages {
  text: string;
  key: number;
}

/**
 * 该方法用于向消息队列中添加消息
 */
export let add: (text: Messages) => void;

const Message: React.FC = () => {
  // 消息队列
  const [messages, setMessages] = useState<Messages[]>([]);

  add = (msg) => {
    setMessages((messages) => [...messages, msg]);
  };

  return (
    <>
      {messages.map(({ text, key }) => {
        return <MessageBox text={text} key={key} />;
      })}
    </>
  );
};

export default Message;
