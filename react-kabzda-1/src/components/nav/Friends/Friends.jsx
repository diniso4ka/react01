import s from './Friends.module.css'
import FriendsItem from './FriendItem/FriendItem'

const Friends = ({ friendsData }) => {
   let friendsUser = friendsData.map(friend => <FriendsItem name={friend.name} avatar={friend.avatar} />)

   return (
      <div>
         <div><h4 className={s.nav}>Friends</h4></div>
         <div className={s.friendsTable}>
            {friendsUser}



         </div>

      </div>
   )
}

export default Friends