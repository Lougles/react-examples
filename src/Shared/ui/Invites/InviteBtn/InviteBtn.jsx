import React from "react";
import styles from './InviteBtn.module.scss'

export const InviteBtn = ({...props}) => {
  return (
    <button className={styles.sendInviteBtn} {...props}>{props.children}</button>
  )
}