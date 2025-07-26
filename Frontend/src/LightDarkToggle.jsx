import React, { useState, useEffect } from 'react';

export default function LightDarkToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? '#121212' : '#fff';
    document.body.style.color = dark ? '#eee' : '#111';
  }, [dark]);

  const toggleDark = () => setDark(!dark);

  const buttonStyle = {
    position: 'fixed',
    top: 10,
    right: 10,
    background: 'transparent',
    border: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
    userSelect: 'none',
  };

  return (
    <button onClick={toggleDark} aria-label="Toggle light/dark mode" style={buttonStyle}>
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
