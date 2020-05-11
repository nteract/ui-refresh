import React, { FC, HTMLAttributes, useRef } from 'react';
import classnames from 'classnames';

import './Cell.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode | React.ReactNodeArray;
  gutter?: React.ReactNode | React.ReactNodeArray;
}

export const Cell: FC<Props> = ({ children, gutter }) => {
  const el = useRef(null);

  const className = classnames('cell-box', { 'no-gutter': !gutter });

  return (
    <div tabIndex={-1} className={className} ref={el}>
      {gutter}
      {children}
    </div>
  );
};

export const CellBody: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => (
  <div className="cell-body">{children}</div>
);

export const CellGutter: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => <div className="cell-gutter">{children}</div>;
