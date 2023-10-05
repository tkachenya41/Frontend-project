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

  return (
    <ul className={Style.list} data-open={isOpen} ref={reference} onClick={makeOpen}>
      <li className={!query && pathname === '/' ? Style.active : ''}>
        <Link href={'/'}>Home</Link>
      </li>
      <li className={pathname === '/sports' ? Style.active : ''}>
        <Link href={'/sports'}>Sports</Link>
      </li>
      <li className={pathname === '/politics' ? Style.active : ''}>
        <Link href={'/politics'}>Politics</Link>
      </li>
      <li className={pathname === '/business' ? Style.active : ''}>
        <Link href={'/business'}>Business</Link>
      </li>
      <li className={pathname === '/tech' ? Style.active : ''}>
        <Link href={'/tech'}>Tech</Link>
      </li>
    </ul>
  );
}
