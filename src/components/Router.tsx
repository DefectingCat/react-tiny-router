import React, { useEffect, useState, Suspense } from 'react';
import routes from './routes';

const Router: React.FC = () => {
  const [path, setPath] = useState(location.pathname);
  const element = routes.find((route) => route.path === path)?.component;

  const handleRoute = (e: CustomEvent<string>) => {
    console.log(e.detail);
    setPath(e.detail);
  };

  useEffect(() => {
    /**
     * 监听自定义 route 事件
     * 并根据 path 修改路由
     */
    document.addEventListener('route', handleRoute as EventListener);

    return () => {
      // 清除副作用
      document.removeEventListener('route', handleRoute as EventListener);
    };
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
