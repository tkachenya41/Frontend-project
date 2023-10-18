'use client';
import Image from 'next/image';
import Style from './ThemeSwitcher.module.scss';
import { useTheme } from '@/contexts/ThemeContext/ThemeContext';
import classnames from 'classnames';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const getImageClass = (selectedTheme: string) => {
    return classnames(Style['switcher__icon'], {
      [Style['switcher__icon--selected']]: theme === selectedTheme,
    });
  };

  return (
    <div className={Style.switcher}>
      <button className={Style.switcher__button} onClick={() => setTheme('light')}>
        <Image
          className={getImageClass('light')}
          src={'/sun.svg'}
          alt='sun'
          width={30}
          height={30}
        />
      </button>
      <button className={Style.switcher__button} onClick={() => setTheme('dark')}>
        <Image
          className={getImageClass('dark')}
          src={'/moon.svg'}
          alt='moon'
          width={30}
          height={30}
        />
      </button>
    </div>
  );
}
