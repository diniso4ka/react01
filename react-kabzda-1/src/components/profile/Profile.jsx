import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
   return (
      <section className={s.container}>
         <img className={s.background__image} src='https://i.pinimg.com/originals/5e/52/79/5e5279f05422dbb6c5062db447019b56.jpg'></img>
         <div className={s.item}>avatar</div>
         <MyPosts />
      </section>
   )
}

export default Profile