import s from './MyPosts.module.css'
import Post from './Posts/Post.jsx'
import React from 'react'



const MyPosts = ({ store, dispatch }) => {
   let postsElement = store.getState().profilePage.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)
   let newPostElement = React.createRef();

   let addPost = () => {
      let text = newPostElement.current.value
      store.addPostToState(text)
   }

   let onPostChange = () => {
      debugger
      let text = newPostElement.current.value
      let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text }
      debugger
      dispatch(action)

   }




   return (
      <div ><h3>MyPosts</h3>
         <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={store.getState().profilePage.newPostText}></textarea>
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

