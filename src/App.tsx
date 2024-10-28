// src/App.tsx
import React, { Component, useState } from 'react';



import ThemeProvider, { ThemeContext } from './contexts/ThemeProvider';
import Login from './component/LoginPage';
import PincodeDisplay from './component/PincodeLookup';


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ toggleTheme }) => (
          <div>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Login />
            <PincodeDisplay />
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

export default App;
