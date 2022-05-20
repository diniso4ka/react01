import s from './MyPosts.module.css'
import Post from './Posts/Post.jsx'
import React from 'react'
import { addPostToState } from '../../../redux/state'


const MyPosts = ({ postsData }) => {
   let postsElement = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)
   let newPostElement = React.createRef();

   let newPost = () => {
      debugger
      let text = newPostElement.current.value
      addPostToState(text)
   }




   return (
      <div ><h3>MyPosts</h3>
         <div>
            <textarea ref={newPostElement}></textarea>
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

