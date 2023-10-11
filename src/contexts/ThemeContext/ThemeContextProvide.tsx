'use client';
import { PropsWithChildren, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = (theme: string) => {
    setTheme(theme === 'light' ? 'light' : 'dark');
  };

  useEffect(() => {
    document
      .querySelector(':root')
      ?.classList[theme === 'dark' ? 'add' : 'remove']('dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
