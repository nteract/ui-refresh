import React, { HTMLAttributes } from 'react';
import './CellMenu.css';

export type Props = React.FC<HTMLAttributes<HTMLDivElement>>;

export const CellMenuSection: Props = ({ children }) => {
  return <div className="cell-menu-section">{children}</div>;
};

export const CellMenuItem: Props = ({ children }) => {
  return <div className="cell-menu-item">{children}</div>;
};

export const CellMenu: Props = ({ children }) => {
  return <div className="cell-menu">{children}</div>;
};
