import React, {
  FC,
  HTMLAttributes,
  ReactChild,
  useState,
  useRef,
  useEffect,
} from 'react';
import classnames from 'classnames';

import { File, Folder, Chevron } from '../Icons';

export type DirectoryListItem = {
  name: string;
  subItems?: DirectoryListItem[];
};

type Base = HTMLAttributes<HTMLLIElement> & DirectoryListItem;

export interface SidebarItemProps extends Base {
  onSelect?: () => void;
  defaultIsExpanded?: boolean;
  props?: HTMLAttributes<HTMLUListElement>;
  isOpen?: boolean;
  level: number;
}

export function getSidebarItemsFromData(
  data: DirectoryListItem[],
  isOpen?: boolean,
  level: number = 0
) {
  return data.map(({ name, subItems }) => (
    <SidebarItem
      level={level}
      defaultIsExpanded={isOpen}
      className={classnames('sidebar-item', {
        'sidebar-item-file': !subItems,
      })}
      name={name}
      subItems={subItems}
    />
  ));
}

const openStates = {
  unset: undefined,
  open: true,
  closed: false,
};

interface ListWrapperProps extends HTMLAttributes<HTMLUListElement> {
  level?: number;
}
const ListWrapper = ({ children, level = 0, ...props }: ListWrapperProps) => {
  const listEl: React.Ref<HTMLUListElement> | null = useRef(null);

  useEffect(() => {
    listEl.current &&
      listEl.current.style.setProperty('--padding', `${(level + 1) * 16}px`);
  }, []);

  return (
    <ul ref={listEl} {...props}>
      {children}
    </ul>
  );
};

export const SidebarItem: FC<SidebarItemProps> = ({
  subItems,
  name,
  defaultIsExpanded = false,
  onSelect,
  level,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState<undefined | boolean>(
    openStates.unset
  );

  const isFolder = subItems !== undefined;
  const image = isFolder ? <Folder /> : <File />;
  const isOpen = isExpanded ?? defaultIsExpanded;

  const folderImage = isFolder && (
    <Chevron className={classnames('chevron', { rotate: !isOpen })} />
    // <img src={chevron} className={classnames('chevron', { rotate: !isOpen })} />
  );

  const onToggleExpanded = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpanded(previous =>
      previous === openStates.open ||
      (defaultIsExpanded === true && isExpanded === openStates.unset)
        ? openStates.closed
        : openStates.open
    );
  };

  return (
    <li
      {...props}
      className={classnames('sidebar-item', {
        'sidebar-item-file': !subItems,
      })}
    >
      <button className="sidebar-item-button" onClick={onToggleExpanded}>
        {folderImage}
        {image} {name}
      </button>
      {subItems && subItems.length > 0 && (
        <ListWrapper
          level={level}
          className={classnames('sidebar-item-group', {
            'sidebar-item-group-expanded': isExpanded ?? defaultIsExpanded,
          })}
        >
          {getSidebarItemsFromData(subItems, false, level + 1)}
        </ListWrapper>
      )}
    </li>
  );
};
