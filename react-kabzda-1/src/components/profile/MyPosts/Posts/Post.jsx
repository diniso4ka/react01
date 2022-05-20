import s from './Post.module.css'


const Post = ({ message, likesCount }) => {


   return (
      <div className={s.item}>
         <img src="https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg" alt="" />
         {message}
         <div className={s.likesCount}>like: {likesCount}</div>

      </div>
   )
}

export default Post

