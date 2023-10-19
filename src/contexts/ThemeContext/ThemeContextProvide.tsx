'use client';
import { PropsWithChildren, useEffect, useState } from 'react';
import { AppTheme, ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<AppTheme['theme']>('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDarkMode ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.querySelector(':root')?.setAttribute('color-scheme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );
}
