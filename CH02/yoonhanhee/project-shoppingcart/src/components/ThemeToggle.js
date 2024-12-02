import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        {theme === 'light' ?  'Light Mode 🌞' : 'Night Mode 🌜'}
      </button>
    </div>
  );
};

export default ThemeToggle;