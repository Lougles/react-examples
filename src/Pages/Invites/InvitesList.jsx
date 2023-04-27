import {Success} from "../../Features/Users/Success/Success";
import styles from './InvitesList.module.scss'
import {useEffect, useState} from "react";
import {Users} from "../../Features/Users/UsersList/UsersList";
export const InvitesList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
      setUsers(json.data);
    }).catch(err => {
      console.warn(err);
      alert('Some issue during fetch data');
    });
  }, [])
  return (
    <div className={styles.App}>
      <Users items={users} isLoading={false}/>
      {/* <Success />*/}
    </div>
  )
}