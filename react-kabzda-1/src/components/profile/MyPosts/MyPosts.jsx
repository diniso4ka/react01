import s from './MyPosts.module.css'
import Post from './Posts/Post.jsx'
import React from 'react'



const MyPosts = ({ postsData, newPostText, updateNewPostText, addPostToState }) => {
   let postsElement = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)
   let newPostElement = React.createRef();

   let newPost = () => {
      let text = newPostElement.current.value
      addPostToState(text)
      updateNewPostText('')
   }

   let onPostChange = () => {
      let text = newPostElement.current.value
      updateNewPostText(text)
   }




   return (
      <div ><h3>MyPosts</h3>
         <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}></textarea>
            <div>
               <button onClick={newPost}>Add post</button>
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

