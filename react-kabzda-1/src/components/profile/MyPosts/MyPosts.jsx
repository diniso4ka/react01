import s from './MyPosts.module.css'
import Post from './Posts/Post.jsx'

const MyPosts = () => {
   return (
      <div >MyPosts
         <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
         </div>
         <div className={s.posts}>Posts
            <Post message='hi' />
            <Post message='hello' />

         </div>
      </div>
   )
}

export default MyPosts
