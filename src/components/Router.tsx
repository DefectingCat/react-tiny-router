import React, { useEffect, useState, Suspense } from 'react';
import routes from './routes';

const Router: React.FC = () => {
  const [path, setPath] = useState(location.pathname);
  const element = routes.find((route) => route.path === path)?.component;

  useEffect(() => {
    document.addEventListener('route', ((e: CustomEvent<string>) => {
      console.log(e.detail);
      setPath(e.detail);
    }) as EventListener);
  }, []);

  return (
    <>
      <Suspense fallback={<p>loading...</p>}>
        {element ? React.createElement(element) : void 0}
      </Suspense>
    </>
  );
};

export default Router;
