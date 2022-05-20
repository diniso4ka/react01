import s from './FriendItem.module.css'

const FriendsItem = () => {
   return (
      <div className={s.friendItem}>
         <div className={s.avatar}><img src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg' /></div>
         <div className={s.name}>Saveliy</div>
      </div>
   )
}

export default FriendsItem