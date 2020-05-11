import React, { FC, HTMLAttributes, ReactChild } from 'react';
import classnames from 'classnames';
import { DirectoryListItem, getSidebarItemsFromData } from './SidebarItem';
import './Sidebar.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
  subItems?: DirectoryListItem[];
  children?: React.ReactNode;
}

export const Sidebar: FC<Props> = ({ isVisible, subItems, children }) => (
  <nav className={classnames('sidebar', { 'sidebar-visible': isVisible })}>
    <ul className="sidebar-item-group sidebar-item-group-expanded">
      {subItems && getSidebarItemsFromData(subItems, true, 0)}
      {children}
    </ul>
  </nav>
);
