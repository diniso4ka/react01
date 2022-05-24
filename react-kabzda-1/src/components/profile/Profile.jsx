import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ store }) => {

   return (
      <div>
         <ProfileInfo />
         <MyPosts
            store={store}
            dispatch={store.dispatch}
         />

      </div>
   )
}

export default Profile