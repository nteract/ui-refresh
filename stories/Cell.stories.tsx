import React, { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { Cell, CellBody, CellGutter, Props } from '../src/Cell';
import { CircularButton, Play, More } from '../src/CircularButton';

export default {
  title: 'Cell',
};

export const WithSidebarItemsList = (props?: Partial<Props>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [percentComplete, setPercentComplete] = useState(0);

  // This is for the Storybook only and
  // not production style code
  useEffect(() => {
    if (isLoading) {
      const interval = window.setInterval(() => {
        if (percentComplete === 99) {
          setIsLoading(false);
          window.clearInterval(interval);
          setPercentComplete(0);
          return;
        }

        setPercentComplete(previous => previous + 1);
      }, 60);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isLoading, percentComplete]);

  return (
    <Cell
      gutter={
        <CellGutter>
          <CircularButton
            showPercent={isLoading}
            onClick={() => {
              setIsLoading(p => !p);
            }}
            percent={percentComplete}
          >
            <Play />
          </CircularButton>
          <CircularButton>
            <More />
          </CircularButton>
        </CellGutter>
      }
    >
      <CellBody>
        Enim reprehenderit in nulla laboris duis laboris anim tempor cupidatat
        excepteur. Nostrud amet nostrud excepteur adipisicing nulla non mollit
        irure eiusmod magna occaecat. Adipisicing voluptate ex voluptate irure
        deserunt non excepteur sit voluptate excepteur fugiat.
      </CellBody>
    </Cell>
  );
};
