import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ state, addPostToState, updateNewPostText }) => {

   return (
      <div>
         <ProfileInfo />
         <MyPosts postsData={state.postsData}
            newPostText={state.newPostText}
            addPostToState={addPostToState}
            updateNewPostText={updateNewPostText} />

      </div>
   )
}

export default Profile