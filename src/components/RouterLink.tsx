import React from 'react';

interface Props {
  to: string;
  children?: React.ReactNode;
}

const RouterLink: React.FC<Props> = ({ to, children }: Props) => {
  /**
   * 处理点击事件
   * 创建自定义事件监听器
   * 并将 path 发送给 router
   * @param e
   */
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const nowPath = location.pathname;
    if (nowPath === to) return; // 原地跳转

    history.pushState(null, '', to);
    document.dispatchEvent(
      new CustomEvent<string>('route', {
        detail: to,
      })
    );
  };

  return (
    <>
      <a href="" onClick={handleClick}>
        {children}
      </a>
    </>
  );
};

export default RouterLink;
