import React, { HTMLAttributes } from 'react';

export const Markdown = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.34567 11.4999L2.34563 4.49994H3.88409L5.42255 6.92302L6.96101 4.49994H8.49947L8.49951 11.4999H6.96105L6.96101 7.23071L5.42255 9.15378L3.88409 7.23071L3.88413 11.4999H2.34567ZM11.6149 11.5L9.49949 8.99994H10.7495V4.49994H12.2495V8.99994H13.4995L11.6149 11.5Z"
        fill="#EEEFF0"
      />
    </svg>
  );
};

export const Delete = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 5.5H11.5M2.5 5.5H4.5M4.5 5.5V13.5C4.5 14.0523 4.94772 14.5 5.5 14.5H10.5C11.0523 14.5 11.5 14.0523 11.5 13.5V5.5M4.5 5.5H11.5"
        stroke="#FF7474"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5 5.5L10 2.5H6L5.5 5.5"
        stroke="#FF7474"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const AddCell = ({ below = true }) => {
  return below ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 8.99994V3.83327C13.5 3.09689 12.903 2.49994 12.1667 2.49994H3.83333C3.09695 2.49994 2.5 3.09689 2.5 3.83327L2.5 12.1666C2.5 12.903 3.09695 13.4999 3.83333 13.4999H9"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.5 11.4999V15.4999"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 5.5V9.5"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5 13.5H15.5"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 8.50006L8 10.5001L6 8.50006"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ) : null;
};

export const Clear = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <path
          d="M7.99951 6C3.93295 6.5 1.31391 10.7209 1.49949 13.5H10.8498C6.99953 11 7.99951 6 7.99951 6Z"
          stroke="#EEEFF0"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.5 9.5H14.5"
          stroke="#EEEFF0"
          stroke-linecap="round"
          stroke-linejoin="bevel"
        />
        <path
          d="M10.5 7.5H14.5"
          stroke="#EEEFF0"
          stroke-linecap="round"
          stroke-linejoin="bevel"
        />
        <path
          d="M12.5 5.5H14.5"
          stroke="#EEEFF0"
          stroke-linecap="round"
          stroke-linejoin="bevel"
        />
        <path d="M6.5 11.5C6.5 11.5 6.5 13 7.5 13.5" stroke="#EEEFF0" />
        <path
          d="M4.49938 10.5C4.49938 10.5 3.49939 12 3.99937 13.5"
          stroke="#EEEFF0"
        />
        <path
          d="M8 9C7.51338 9.07604 5.32118 8.77741 4.5 7.5"
          stroke="#EEEFF0"
        />
        <path d="M8 6.17468L13 1.17474" stroke="#EEEFF0" />
      </g>
    </svg>
  );
};
export const Play = () => {
  return (
    <svg
      width="9"
      height="10"
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.13165 4.45728L1.9792 0.612C1.55293 0.34558 1 0.65204 1 1.15472V8.84528C1 9.34796 1.55293 9.65442 1.9792 9.388L8.13165 5.54272C8.53272 5.29205 8.53272 4.70795 8.13165 4.45728Z"
        fill="#757F88"
        stroke="#757F88"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const More = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="1" fill="#757F88" />
      <circle cx="4" cy="8" r="1" fill="#757F88" />
      <circle cx="12" cy="8" r="1" fill="#757F88" />
    </svg>
  );
};

export const File = (props: HTMLAttributes<SVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="path-2-inside-1" fill="white">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.5 2C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V2.5C14 2.22386 13.7761 2 13.5 2H2.5ZM9 10H5V11H9V10ZM5 8H11V9H5V8ZM9 6H5V7H9V6Z"
      />
    </mask>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.5 2C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V2.5C14 2.22386 13.7761 2 13.5 2H2.5ZM9 10H5V11H9V10ZM5 8H11V9H5V8ZM9 6H5V7H9V6Z"
      fill="#757F88"
    />
    <path
      d="M5 10V9H4V10H5ZM9 10H10V9H9V10ZM5 11H4V12H5V11ZM9 11V12H10V11H9ZM11 8H12V7H11V8ZM5 8V7H4V8H5ZM11 9V10H12V9H11ZM5 9H4V10H5V9ZM5 6V5H4V6H5ZM9 6H10V5H9V6ZM5 7H4V8H5V7ZM9 7V8H10V7H9ZM3 2.5C3 2.77614 2.77614 3 2.5 3V1C1.67157 1 1 1.67157 1 2.5H3ZM3 13.5V2.5H1V13.5H3ZM2.5 13C2.77614 13 3 13.2239 3 13.5H1C1 14.3284 1.67157 15 2.5 15V13ZM13.5 13H2.5V15H13.5V13ZM13 13.5C13 13.2239 13.2239 13 13.5 13V15C14.3284 15 15 14.3284 15 13.5H13ZM13 2.5V13.5H15V2.5H13ZM13.5 3C13.2239 3 13 2.77614 13 2.5H15C15 1.67157 14.3284 1 13.5 1V3ZM2.5 3H13.5V1H2.5V3ZM5 11H9V9H5V11ZM6 11V10H4V11H6ZM9 10H5V12H9V10ZM8 10V11H10V10H8ZM11 7H5V9H11V7ZM12 9V8H10V9H12ZM5 10H11V8H5V10ZM4 8V9H6V8H4ZM5 7H9V5H5V7ZM6 7V6H4V7H6ZM9 6H5V8H9V6ZM8 6V7H10V6H8Z"
      fill="#757F88"
      mask="url(#path-2-inside-1)"
    />
  </svg>
);

export const Folder = (props: HTMLAttributes<SVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.98881 5.0109L7.98395 5.01562H8H13.5C13.7679 5.01562 13.9844 5.23207 13.9844 5.5V12.5C13.9844 12.7679 13.7679 12.9844 13.5 12.9844H2.5C2.23207 12.9844 2.01562 12.7679 2.01562 12.5V3.5C2.01562 3.23207 2.23207 3.01562 2.5 3.01562H5.99993C6.02781 3.01588 6.05459 3.02655 6.075 3.04554L7.98881 5.0109Z"
      fill="#757F88"
      stroke="#757F88"
      stroke-width="0.03125"
    />
  </svg>
);

export const Chevron = (props: HTMLAttributes<SVGElement>) => (
  <svg
    width="7"
    height="4"
    viewBox="0 0 7 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 1L3.5 3.5L1 1"
      stroke="#757F88"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
