'use client';

import Styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={Styles.loader}>
      <div className={Styles.loader__square}></div>
      <div className={Styles.loader__square}></div>
      <div className={Styles.loader__square}></div>
      <div className={Styles.loader__square}></div>
    </div>
  );
}
