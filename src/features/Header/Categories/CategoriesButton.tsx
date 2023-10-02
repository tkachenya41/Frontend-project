import Image from 'next/image';
import Style from './Categories.module.scss';
import { RefObject } from 'react';

export default function CategoriesButton({
  isOpen,
  onClick,
  reference,
}: {
  isOpen: boolean;
  onClick: () => void;
  reference: RefObject<HTMLButtonElement>;
}) {
  return (
    <button className={Style.button} onClick={onClick} ref={reference}>
      <Image
        src={isOpen ? '/close.svg' : '/burger.svg'}
        alt='burger'
        width={23}
        height={23}
      />
    </button>
  );
}
