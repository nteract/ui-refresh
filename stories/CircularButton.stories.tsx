import React, { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { CircularButton, Props, Play } from '../src/CircularButton';

export default {
  title: 'CircularButton',
};

export const Standard = (props?: Partial<Props>) => (
  <CircularButton onClick={action('Clicked')}>
    <Play />
  </CircularButton>
);

export const Progress = (props?: Partial<Props>) => {
  const [complete, setComplete] = useState(0);

  useEffect(() => {
    window.setInterval(() => {
      setComplete(previous => (previous + 1 === 100 ? 0 : previous + 1));
    }, 60);
  }, []);

  return (
    <CircularButton
      onClick={action('Clicked')}
      className="active"
      showPercent={true}
      percent={complete}
    >
      <Play />
    </CircularButton>
  );
};
