import React, { FC, HTMLAttributes, useRef } from 'react';
import classnames from 'classnames';

import { ProgressRing } from './ProgressRing';
import './CircularButton.css';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  showPercent?: boolean;
  percent?: number;
  children?: React.ReactNode | React.ReactNodeArray;
}

export const CircularButton: FC<Props> = ({
  showPercent,
  percent,
  children,
  className: additionalClasses,
  ...props
}) => {
  const buttonRef = useRef(null);
  const classes = classnames(
    'circular-button',
    { progress: showPercent },
    additionalClasses
  );

  return (
    <button ref={buttonRef} className={classes} {...props}>
      <ProgressRing radius={16} stroke={1} progress={percent || 0} />
      {children}
    </button>
  );
};
