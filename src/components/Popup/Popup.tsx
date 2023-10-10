import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Style from './Popup.module.scss';
import Image from 'next/image';

export default function Modal({
  isOpen,
  errorText,
}: {
  isOpen: boolean;
  errorText: string;
}) {
  return (
    <Popup
      open={isOpen}
      modal
      closeOnDocumentClick
      contentStyle={{ backgroundColor: 'brown' }}>
      <div className={Style.modal}>
        <Image src={'/error.png'} width={60} height={60} alt='error' />
        <h2>Oooops....</h2>
        <span>Try again later</span>
        <span>{errorText}</span>
      </div>
    </Popup>
  );
}
