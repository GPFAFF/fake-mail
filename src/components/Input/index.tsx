import React, { ChangeEvent } from 'react'

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  value: string;
}

export const Input = (props: Props) => {
  const { handleChange, name, id, value } = props;

  return (
    <>
      <label
        htmlFor={id}
      >
        {name.toUpperCase()}
      </label>
      <input
        onChange={handleChange}
        type="text"
        name={name}
        id={id}
        value={value}
      />
    </>
  )
}
