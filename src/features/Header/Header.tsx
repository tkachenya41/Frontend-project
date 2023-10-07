'use client';
import { useState } from 'react';
import Categories from './Categories/Categories';
import HeaderStyle from './Header.module.scss';
import CategoriesButton from './Categories/CategoriesButton';

import { SearchPanel } from '../SearchPanel/SearchPanel';
import { useOutsideClick } from '@/hooks/useOutsideClick/useOutsideClick';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen((hasBeenOpened) => !hasBeenOpened);
  };

  const reference = useOutsideClick(() => isOpen && toggleBurger());

  return (
    <header className={HeaderStyle.header}>
      <div className={HeaderStyle.search}>
        <SearchPanel placeholder='Search news ...' />
      </div>
      <CategoriesButton isOpen={isOpen} onClick={toggleBurger} />
      <Categories isOpen={isOpen} reference={reference} makeOpen={toggleBurger} />
    </header>
  );
}
