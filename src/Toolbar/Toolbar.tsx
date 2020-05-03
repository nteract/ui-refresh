import React, { FC, HTMLAttributes, ReactChild, useState } from 'react';
import classnames from 'classnames';
import { ToolbarItem } from './ToolbarItem';
import './Toolbar.css';

const commands = require('./commands.svg');
const expand = require('./expand.svg');

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild | JSX.Element[];
  onToggleFileBrowser: () => void;
}

const toolbarStates = {
  collapsed: 'collapsed',
  expandedMin: 'expandedMin',
  expandedMax: 'expandedMax',
};

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
export const Toolbar: FC<Props> = ({ children, onToggleFileBrowser }) => {
  const [toolbarState, setToolbarState] = useState(toolbarStates.collapsed);

  const isCollapsed = toolbarState === toolbarStates.collapsed;

  const className: string = classnames('toolbar', {
    expanded: toolbarState !== toolbarStates.collapsed,
  });

  return (
    <div className={className}>
      <span>
        <ToolbarItem
          image={expand}
          buttonClassName="toolbar-item-expand"
          text=""
          showText={!isCollapsed}
          onClick={onToggleFileBrowser}
        />

        {React.Children.map(
          children as React.ReactElement[],
          (child: React.ReactElement) =>
            React.cloneElement(child as React.ReactElement, {
              showText: !isCollapsed,
              showButton: !isCollapsed,
            })
        )}
      </span>
      <ToolbarItem
        image={commands}
        text="Commands"
        showText={!isCollapsed}
        onClick={() => {
          setToolbarState(() =>
            isCollapsed ? toolbarStates.expandedMax : toolbarStates.collapsed
          );
        }}
      />
    </div>
  );
};
