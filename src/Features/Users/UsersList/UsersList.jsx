import React from 'react';
import { Skeleton } from '../Skeleton/Skeleton';
import { UserItem } from '../User/User';
import styles from './UsersList.module.scss'
import InviteBtn from "../../../Shared/ui/Invites/InviteBtn";

export const Users = ({ items, isLoading, search, onChangeSearch, onClickInvite, invites, onSendInvites }) => {
  return (
    <>
      <div className={styles.search}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input value={search} type="text" placeholder="Найти пользователя..." onChange={onChangeSearch} />
      </div>
      {isLoading ? (
        <div className={styles.skeleton_list}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className={styles.users_list}>
          {items.filter(obj => {
            const fullName = (obj.first_name + obj.last_name).toLowerCase();
             return fullName.includes(search.toLowerCase()) || obj.email.toLowerCase().includes(search.toLowerCase())
          }).map((item) => (
            <UserItem isInvited={invites.includes(item.id)} key={item.id} {...item} onCLickInvite={onClickInvite}/>
          ))
          }
        </ul>
      )}
      {invites.length > 0 &&
        <InviteBtn onClick={onSendInvites}>Отправить приглашение</InviteBtn>
      }
    </>
  );
};