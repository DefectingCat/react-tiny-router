import React, { useState } from 'react';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hi, here is Home page.</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </>
  );
};

export default Home;
