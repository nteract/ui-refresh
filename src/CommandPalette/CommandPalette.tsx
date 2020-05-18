import React, { FC, ReactNode, ReactNodeArray, HTMLAttributes } from 'react';
import './CommandPalette.css';
import { Commands } from '../Icons';
import { KeyTag } from './KeyTag';

export interface Props
  extends HTMLAttributes<HTMLDivElement & HTMLInputElement> {
  shortCut: string[];
  children: ReactNode | ReactNodeArray;
}

export const CommandPalette: FC<Props> = ({
  children,
  shortCut,
  onChange,
  ...props
}) => {
  return (
    <div className="command-palette">
      <div className="command-palette-row">
        <Commands muted />
        <KeyTag>
          Hide Menu Bar
          {shortCut.map(shortcutKey => (
            <KeyTag mini>{shortcutKey}</KeyTag>
          ))}
        </KeyTag>
      </div>
      <div className="command-palette-input-row">
        <label htmlFor="commandFilter">Filter commands</label>
        <input
          onChange={onChange}
          type="text"
          name="commandFilter"
          id="commandFilter"
          {...props}
        />
      </div>
      {children}
    </div>
  );
};
