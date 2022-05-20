import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends'
import s from './Nav.module.css'


const Nav = ({ state }) => {
   return (
      <nav className={s.nav}>
         <div className={s.item}><NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>My profile</NavLink></div>
         <div className={s.item}><NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink></div>
         <div className={s.item}><a href='/news'>News</a></div>
         <div className={s.item}><a href='/music'>Music</a></div>
         <div className={s.item}><a href='/settings'>Settings</a></div>
         <Friends friendsData={state.friendsPage.friendsData} className={s.friends} />
      </nav>
   )
}

export default Nav