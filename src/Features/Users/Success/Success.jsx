import React from 'react';
import styles from './Success.module.scss'
import InviteBtn from "../../../Shared/ui/Invites/InviteBtn";
import success from '../../../Shared/svg/success.svg'
export const Success = ({ count }) => {
  return (
    <div className={styles.successBlock}>
      <img src={success} alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <a href={'/task/inviteList'}><InviteBtn>Назад</InviteBtn></a>
    </div>
  );
};