import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ store }) => {

   return (
      <div>
         <ProfileInfo />
         <MyPosts store={store} />

      </div>
   )
}

export default Profile