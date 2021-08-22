import React, { useEffect, useState } from 'react';
import routes from './routes';

const Router: React.FC = () => {
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    document.addEventListener('route', ((e: CustomEvent<string>) => {
      console.log(e.detail);
      setPath(e.detail);
    }) as EventListener);
  }, []);

  return <>{routes.find((route) => route.path === path)?.component({})}</>;
};

export default Router;
