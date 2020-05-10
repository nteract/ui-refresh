import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  CellMenu,
  Props,
  CellMenuItem,
  CellMenuSection,
} from '../src/CellMenu';

import { ToggleSwitch } from '../src/ToggleSwitch';

export default {
  title: 'CellMenu',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props?: Partial<Props>) => {
  const [checked, toggleChecked] = React.useState(false);

  return (
    <CellMenu>
      <CellMenuSection>
        <CellMenuItem>
          <span>One</span>
          <span>Two</span>
        </CellMenuItem>
        <CellMenuItem>
          Two
          <ToggleSwitch
            checked={checked}
            onChange={() => toggleChecked(previous => !previous)}
          />
        </CellMenuItem>
      </CellMenuSection>
      <CellMenuSection>
        <CellMenuItem>Three</CellMenuItem>
        <CellMenuItem>Four</CellMenuItem>
      </CellMenuSection>
    </CellMenu>
  );
};
