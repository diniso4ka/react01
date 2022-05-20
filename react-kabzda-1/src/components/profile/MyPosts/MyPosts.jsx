import s from './MyPosts.module.css'
import Post from './Posts/Post.jsx'
import React from 'react'


const MyPosts = ({ postsData }) => {
   let postsElement = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

   let newPostElement = React.createRef();

   let addPost = () => {
      let text = newPostElement.current.value
      alert(text)
   }




   return (
      <div ><h3>MyPosts</h3>
         <div>
            <textarea ref={newPostElement}></textarea>
            <div>
               <button onClick={addPost}>Add post</button>
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

