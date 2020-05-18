import React, { HTMLAttributes, FC } from 'react';
import { KeyTag } from './KeyTag';

interface CommandButtonRowProps extends HTMLAttributes<HTMLButtonElement> {
  shortCut: string[];
}

export const CommandButtonRow: FC<CommandButtonRowProps> = ({
  children,
  shortCut,
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
      className="command-palette-row"
      tabIndex={-1}
    >
      <span className="command-name">{children}</span>
      <span>
        {shortCut.map(shortcut => (
          <KeyTag mini>{shortcut}</KeyTag>
        ))}
      </span>
    </button>
  );
};
