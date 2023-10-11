import { createContext, useContext } from 'react';

export type AppTheme = {
  theme: string;
  toggleTheme: (theme: string) => void;
};

export const ThemeContext = createContext<AppTheme | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
