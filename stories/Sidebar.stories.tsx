import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  Sidebar,
  Props,
  SidebarItem,
  SidebarItemsFromData,
} from '../src/Sidebar';

const directoryList = [
  {
    name: 'My Root Folder',
    subItems: [
      { name: 'My Subfolder', subItems: [{ name: 'lasers.ipynb' }] },
      { name: 'notebook.ipynb' },
      { name: 'test.ipynb' },
      {
        name: 'Another Folder',
        subItems: [{ name: 'recentTrends.ipynb' }, { name: 'newData.ipynb' }],
      },
    ],
  },
];
export default {
  title: 'Sidebar',
};

export const WithSidebarItemsList = (props?: Partial<Props>) => (
  <Sidebar subItems={directoryList} />
);
