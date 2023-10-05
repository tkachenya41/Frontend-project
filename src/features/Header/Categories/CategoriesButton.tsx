import Image from 'next/image';
import Style from './Categories.module.scss';
import { RefObject } from 'react';

export default function CategoriesButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button className={Style.button} onClick={onClick}>
      <Image
        src={isOpen ? '/close.svg' : '/burger.svg'}
        alt='burger'
        width={23}
        height={23}
      />
    </button>
  );
}
