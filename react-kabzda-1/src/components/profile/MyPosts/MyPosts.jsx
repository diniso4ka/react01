import s from './MyPosts.module.css'
import Post from './Posts/Post.jsx'

const MyPosts = () => {

   let postsData = [
      { id: 1, message: 'depressiia', likesCount: 12 },
      { id: 2, message: 'tilt', likesCount: 15 },


   ]





   return (
      <div ><h3>MyPosts</h3>
         <div>
            <textarea></textarea>
            <div>
               <button>Add post</button>
               <button>Remove</button>
            </div>
         </div>
         <div className={s.posts}>Posts
            <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
            <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />

         </div>
      </div>
   )
}

export default MyPosts

