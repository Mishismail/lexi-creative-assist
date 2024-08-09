import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import './ColorModeToggle.css'; // Import the CSS file for the toggle switch

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <label className="switch">
      <input type="checkbox" checked={colorMode === 'dark'} onChange={toggleColorMode} />
      <span className="slider">
        <span className="slider-inner"></span>
      </span>
    </label>
  );
}

export default ColorModeToggle;



