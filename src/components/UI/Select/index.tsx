import React from 'react';

type SelectProps = {
  value: string;
  option: { name: string; value: string }[];
  onChange: (value: string) => void;
  className: string;
};

function Select({ option, value, onChange, className }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      className={className}
    >
      {option.map((item) => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default Select;
