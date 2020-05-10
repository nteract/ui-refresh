import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  CellMenu,
  Props,
  CellMenuItem,
  CellMenuSection,
} from '../src/CellMenu';

import { Markdown, AddCell, Clear, Delete } from '../src/Icons';
import { ToggleSwitch } from '../src/ToggleSwitch';

export default {
  title: 'CellMenu',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props?: Partial<Props>) => {
  const [checkedInput, toggleCheckedInput] = React.useState(false);
  const [checkedOutput, toggleCheckedOutput] = React.useState(false);
  const [checkedExtendedOutput, toggleCheckedExtendedOutput] = React.useState(
    false
  );

  return (
    <CellMenu>
      <CellMenuSection>
        <CellMenuItem>
          <button>
            <Clear /> Clear Cell
          </button>
        </CellMenuItem>
        <CellMenuItem>
          <button>
            <Markdown /> Convert to Markdown
          </button>
        </CellMenuItem>
        <CellMenuItem>
          <button>
            <Delete /> Delete Cell
          </button>
        </CellMenuItem>
      </CellMenuSection>
      <CellMenuSection>
        <CellMenuItem>
          <button>
            <AddCell /> Add Cell Below
          </button>
        </CellMenuItem>
        <CellMenuItem>
          <button>
            <AddCell /> Add Cell Above
          </button>
        </CellMenuItem>
      </CellMenuSection>
      <CellMenuSection>
        <CellMenuItem className="heading">Visibility</CellMenuItem>
        <CellMenuItem>
          <ToggleSwitch
            label="Input"
            labelPlacement="start"
            checked={checkedInput}
            onChange={() => toggleCheckedInput(previous => !previous)}
            className="cell-menu-item-toggle"
          />
        </CellMenuItem>
        <CellMenuItem>
          <ToggleSwitch
            label="Output"
            labelPlacement="start"
            checked={checkedOutput}
            onChange={() => toggleCheckedOutput(previous => !previous)}
            className="cell-menu-item-toggle"
          />
        </CellMenuItem>
        <CellMenuItem>
          <ToggleSwitch
            label="Extended Output"
            labelPlacement="start"
            checked={checkedExtendedOutput}
            onChange={() => toggleCheckedExtendedOutput(previous => !previous)}
            className="cell-menu-item-toggle"
          />
        </CellMenuItem>
      </CellMenuSection>
    </CellMenu>
  );
};
