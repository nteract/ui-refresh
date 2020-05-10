import React from 'react';
import Toggle from 'react-toggle';
import './ToggleSwitch.css';
interface Props {
  label?: string;
  checked?: boolean;
  onChange?: () => void;
}

export const ToggleSwitch: React.FC<Props> = ({ label, checked, onChange }) => (
  <label>
    <Toggle
      icons={false}
      checked={checked}
      onChange={onChange}
      className="toggle-switch"
    />
    {label && <span>{label}</span>}
  </label>
);
