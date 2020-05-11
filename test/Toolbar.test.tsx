import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Toolbar } from '../stories/Toolbar.stories';

describe('Toolbar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Toolbar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
