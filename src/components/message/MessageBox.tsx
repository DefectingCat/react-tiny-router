import React, { useState } from 'react';

interface Props {
  text: string;
}

const MessageBox: React.FC<Props> = ({ text }: Props) => {
  const [visible, setVisible] = useState(true);
  let timer = 0;

  const starTimer = () => {
    timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  const stopTimer = () => {
    clearTimeout(timer);
  };

  starTimer();
  return (
    <>
      {visible ? (
        <div onMouseEnter={stopTimer} onMouseLeave={starTimer}>
          {text}
        </div>
      ) : (
        void 0
      )}
    </>
  );
};

export default MessageBox;
