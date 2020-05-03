import React from 'react';
import { action } from '@storybook/addon-actions';
import { Toolbar, Props, ToolbarItem } from '../src/Toolbar';
const play = require('../src/Toolbar/play.svg');
const plus = require('../src/Toolbar/plus.svg');
const pause = require('../src/Toolbar/pause.svg');
const clear = require('../src/Toolbar/clear.svg');

export default {
  title: 'Welcome',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props?: Partial<Props>) => (
  <Toolbar {...props} onToggleFileBrowser={action('ON TOGGLE FILE BROWSER')}>
    <ToolbarItem
      image={plus}
      text="Add Cell"
      onClick={action('ON CLICK add cell')}
    />
    <ToolbarItem
      image={play}
      text="Restart &amp; Run"
      onClick={action('ON CLICK Restart & Run')}
    />
    <ToolbarItem
      image={pause}
      text="Interrupt"
      onClick={action('ON CLICK Interrupt')}
    />
    <ToolbarItem
      image={clear}
      text="Clear Outputs"
      onClick={action('ON CLICK Clear Outputs')}
    />
  </Toolbar>
);
