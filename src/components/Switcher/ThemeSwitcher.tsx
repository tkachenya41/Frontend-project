'use client';
import Image from 'next/image';
import Style from './ThemeSwitcher.module.scss';
import { useTheme } from '@/contexts/ThemeContext/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={Style.switcher}>
      <button className={Style.switcher__button} onClick={() => toggleTheme('light')}>
        <Image
          src={'/sun.svg'}
          alt='sun'
          width={30}
          height={30}
          style={{
            borderRadius: '50%',
            padding: '0.2rem',
            backgroundColor: theme === 'light' ? 'var(--primary-color)' : 'transparent',
          }}
        />
      </button>
      <button className={Style.switcher__button} onClick={() => toggleTheme('dark')}>
        <Image
          src={'/moon.svg'}
          alt='moon'
          width={30}
          height={30}
          style={{
            borderRadius: '50%',
            padding: '0.2rem',
            backgroundColor: theme === 'dark' ? 'var(--primary-color)' : 'transparent',
          }}
        />
      </button>
    </div>
  );
}
