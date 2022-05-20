import s from './Friends.module.css'
import FriendsItem from './FriendItem/FriendItem'

const Friends = ({ friendsData }) => {
   // let friendsItem = friendsData.map(friend => <FriendsItem name={friendsData.name} avatar={friendsData.avatar} />)

   return (
      <div>
         <div><h4 className={s.nav}>Friends</h4></div>
         <div className={s.friendsTable}>
            {/* {friendsItem} */}


         </div>

      </div>
   )
}

export default Friends