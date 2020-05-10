import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';
import './CellMenu.css';

export type Props = React.FC<HTMLAttributes<HTMLDivElement>>;

export const CellMenuSection: Props = ({ children }) => {
  return <div className="cell-menu-section">{children}</div>;
};

export const CellMenuItem: Props = ({ children, className, ...props }) => {
  return (
    <div
      className={classnames('cell-menu-item', className)}
      {...props}
      tabIndex="-1"
    >
      {children}
    </div>
  );
};

export const CellMenu: Props = ({ children }) => {
  return <div className="cell-menu">{children}</div>;
};
