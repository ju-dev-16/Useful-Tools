import { createContext, useEffect } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const themes = {
  light: {
    color: "#212529" 
  },
  dark: {
    color: "white"
  }
}

export const ThemeContext = createContext(JSON.parse(window.localStorage.getItem("theme")));

export const ThemeProvider = ({ children, switched }) => {
  const [_theme, setTheme] = useLocalStorage('theme', window.localStorage.getItem("theme") || themes.light);

  useEffect(() => {
    setTheme(switched ? themes.dark : themes.light);
  }, [switched, setTheme]);

  return (
    <>
      {switched && 
        <ThemeContext.Provider value={themes.light}>
          {children}
        </ThemeContext.Provider>
      }
      {!switched &&
        <ThemeContext.Provider value={themes.dark}>
          {children}
        </ThemeContext.Provider>
      }
    </>
  );
}