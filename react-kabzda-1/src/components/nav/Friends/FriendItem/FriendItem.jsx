import s from './FriendItem.module.css'

const FriendsItem = ({ name, avatar }) => {
   return (
      <div className={s.friendItem}>
         <div className={s.avatar}><img src={avatar} /></div>
         <div className={s.name}>{name}</div>
      </div>
   )
}

export default FriendsItem