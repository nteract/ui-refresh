import React, { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { CommandPalette, CommandButtonRow, Props } from '../src/CommandPalette';
import { Play, Markdown, AddCell, Eye } from '../src/Icons';

export default {
  title: 'CommandPalette',
};

export const Standard = (props?: Partial<Props>) => (
  <CommandPalette
    placeholder="Filter commands"
    onChange={action('ON CHANGE')}
    shortCut={['⌘', 'H']}
  >
    <CommandButtonRow
      onClick={action('Run Cell')}
      shortCut={['Shift', 'Enter']}
    >
      <Play /> Run Cell
    </CommandButtonRow>
    <CommandButtonRow
      onClick={action('Add Cell Below')}
      shortCut={['Shift', 'M']}
    >
      <AddCell below={false} />
      Add Cell Below
    </CommandButtonRow>
    <CommandButtonRow
      onClick={action('Add Cell Above')}
      shortCut={['Shift', 'Backspace']}
    >
      <AddCell />
      Add Cell Above
    </CommandButtonRow>
    <CommandButtonRow
      onClick={action('Convert to Markdown')}
      shortCut={['⌘', 'M']}
    >
      <Markdown />
      Convert to Markdown
    </CommandButtonRow>
    <CommandButtonRow onClick={action('Hide Output')} shortCut={['Shift', 'O']}>
      <Eye />
      Hide Output
    </CommandButtonRow>
    <CommandButtonRow onClick={action('Hide Input')} shortCut={['Shift', 'I']}>
      <Eye />
      Hide Input
    </CommandButtonRow>
  </CommandPalette>
);
