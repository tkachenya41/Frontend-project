import Link from 'next/link';
import Style from './Categories.module.scss';
import { usePathname, useSearchParams } from 'next/navigation';
import { RefObject } from 'react';

export default function Categories({
  isOpen,
  reference,
  makeOpen,
}: {
  isOpen?: boolean;
  makeOpen?: () => void;
  reference?: RefObject<HTMLUListElement>;
}) {
  const pathname = usePathname();
  const search = useSearchParams();
  const query = search.get('q');
  const language = search.get('language');
  const category = search.get('category');

  return (
    <ul className={Style.list} data-open={isOpen} ref={reference} onClick={makeOpen}>
      <li
        className={
          !language && !query && !category && pathname === '/' ? Style.active : ''
        }>
        <Link href={'/'}>Home</Link>
      </li>
      <li className={category === 'sports' ? Style.active : ''}>
        <Link href={'/?category=sports'}>Sports</Link>
      </li>
      <li className={category === 'entertainment' ? Style.active : ''}>
        <Link href={'/?category=entertainment'}>Entertainment</Link>
      </li>
      <li className={category === 'business' ? Style.active : ''}>
        <Link href={'/?category=business'}>Business</Link>
      </li>
      <li className={category === 'technology' ? Style.active : ''}>
        <Link href={'/?category=technology'}>Tech</Link>
      </li>
    </ul>
  );
}
