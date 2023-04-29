import {Success} from "../../Features/Users/Success/Success";
import styles from './InvitesList.module.scss'
import {useEffect, useState} from "react";
import {Users} from "../../Features/Users/UsersList/UsersList";
export const InvitesList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
      setUsers(json.data);
    }).catch(err => {
      console.warn(err);
      alert('Some issue during fetch data');
    }).finally(() => setLoading(false));
  }, [])
  
  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  }
  
  const onClickInvite = (id) => {
     if(invites.includes(id)) {
       setInvites(prev => prev.filter(_id => _id !==  id))
     } else {
       setInvites(prev => [...prev, id])
     }
  }
  
  const onSendInvites = () => {
    setSuccess(true);
  }
  return (
    <div className={styles.App}>
      {success ? <Success count={invites.length} />
      :
      <Users onSendInvites={onSendInvites} invites={invites} onClickInvite={onClickInvite} onChangeSearch={onChangeSearch} search={search} items={users} isLoading={isLoading}/>
      }
    </div>
  )
}