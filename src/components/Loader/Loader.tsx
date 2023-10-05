'use client';

import Image from 'next/image';
import Styles from '@/app/page.module.scss';

export default function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <>
      {isLoading && (
        <Image
          width={300}
          height={300}
          src='/loading.gif'
          alt='Loading'
          className={Styles.spinner}
        />
      )}
    </>
  );
}
