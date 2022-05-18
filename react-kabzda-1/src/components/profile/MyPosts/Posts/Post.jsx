import s from './Post.module.css'


const Post = (props) => {


   return (
      <div className={s.item}>
         <img src="https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg" alt="" />
         {props.message}
         <div>Like </div>

      </div>
   )
}

export default Post

