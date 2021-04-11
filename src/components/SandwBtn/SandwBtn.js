import s from './SandwBtn.module.css';
import Sandw from '../../img/sandw.png';
import Close from '../../img/close.png';
// import { useState } from 'react';

export default function SandwBtn({ isModalOpen, onClick }) {
  return (
    <button type="button" className={s.sandw} onClick={onClick}>
      <img src={isModalOpen ? Close : Sandw} alt="sandwich-close button" />
    </button>
  );
}
