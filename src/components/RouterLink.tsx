import React from 'react';

interface Props {
  to: string;
  children?: React.ReactNode;
}

const RouterLink: React.FC<Props> = ({ to, children }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
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
