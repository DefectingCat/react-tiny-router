import React from 'react';
import Router from './components/Router';
import RouterLink from './components/RouterLink';

const App: React.FC = () => {
  return (
    <>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>

      <Router />
    </>
  );
};

export default App;
