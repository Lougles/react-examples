import React from 'react';
import styles from './Success.module.scss'
import InviteBtn from "../../../Shared/ui/Invites/InviteBtn";

export const Success = ({ count }) => {
  return (
    <div className={styles.successBlock}>
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <InviteBtn>Назад</InviteBtn>
    </div>
  );
};