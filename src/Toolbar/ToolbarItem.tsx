import React, { FC, HTMLAttributes } from 'react';
import classnames from 'classnames';

import './ToolbarItem.css';

export interface ToolbarItemProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  text: string;
  showText?: boolean;
  showButton?: boolean;
  onClick: () => void;
  buttonClassName?: string;
}

export const ToolbarItem: FC<ToolbarItemProps> = ({
  image,
  text,
  showText = true,
  showButton = true,
  onClick,
  buttonClassName,
}) => {
  const className = classnames('toolbar-item', buttonClassName, {
    hidden: !showButton,
  });
  return (
    <button onClick={onClick} className={className}>
      <img src={image} alt="" />
      <span className={classnames({ display: showText })}>{text}</span>
    </button>
  );
};
