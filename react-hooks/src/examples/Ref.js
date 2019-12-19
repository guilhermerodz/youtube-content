import React, { useState, useRef } from 'react';

export default function Ref() {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const inputRef = useRef();

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleAddName() {
    if (!name) return;

    setNames(currentNames => [...currentNames, name]);
    setName('');
    inputRef.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={handleInputChange}
        placeholder="Name"
      />

      <button onClick={handleAddName}>Add name</button>

      <ul>
        {names.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
