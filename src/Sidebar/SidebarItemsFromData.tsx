import React, { FC } from 'react';
import classnames from 'classnames';

import { SidebarItem } from './SidebarItem';
import './SidebarItemsFromData.css';

const file = require('./file.svg');
const folder = require('./folder.svg');

type DirectoryListItem = {
  name: string;
  children?: DirectoryListItem[];
};

interface Props {
  data: DirectoryListItem[];
}

export const SidebarItemsFromData: FC<Props> = ({ data }: Props) => {
  return (
    <div className="sidebar-item-group">
      {data.map(({ name, children }) => (
        <>
          <SidebarItem
            className={classnames('sidebar-item', {
              'sidebar-item-file': !children,
            })}
          >
            <img src={children ? folder : file} alt="" />
            {name}
          </SidebarItem>
          {children && <SidebarItemsFromData data={children} />}
        </>
      ))}
    </div>
  );
};
