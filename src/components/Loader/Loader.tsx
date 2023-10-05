'use client';

import Styles from './Loader.module.scss';

export default function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <>
      {isLoading && (
        <div className={Styles.loader}>
          <div className={Styles.loader__square}></div>
          <div className={Styles.loader__square}></div>
          <div className={Styles.loader__square}></div>
          <div className={Styles.loader__square}></div>
        </div>
      )}
    </>
  );
}
