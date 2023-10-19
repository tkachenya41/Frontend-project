import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Style from './Popup.module.scss';
import Image from 'next/image';
import './Popup.scss';

export default function Modal({
  isOpen,
  text,
  status,
}: {
  isOpen: boolean;
  text: string;
  status: 'error' | 'success';
}) {
  const modalStyles = Style[status];
  return (
    <Popup className={Style.popup} open={isOpen} modal closeOnDocumentClick>
      <div className={modalStyles}>
        <Image src={'/error.svg'} width={60} height={60} alt='error' />
        <p>{text}</p>
      </div>
    </Popup>
  );
}
