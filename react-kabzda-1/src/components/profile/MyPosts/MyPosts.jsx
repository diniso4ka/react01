import s from './MyPosts.module.css'
import Post from './Posts/Post.jsx'


const MyPosts = ({ postsData }) => {





   let postsElement = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)





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
            {postsElement}

         </div>
      </div>
   )
}

export default MyPosts

