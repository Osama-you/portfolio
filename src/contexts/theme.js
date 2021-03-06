import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();
const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('themeName');
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    setThemeName(
      localStorageTheme || (darkMediaQuery.matches ? 'dark' : 'light')
    );

    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light');
    });
  }, []);

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name);
    setThemeName(name);
  };

  const providerValue = useMemo(
    () => ({ themeName, toggleTheme }),
    [themeName]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, useThemeContext };
