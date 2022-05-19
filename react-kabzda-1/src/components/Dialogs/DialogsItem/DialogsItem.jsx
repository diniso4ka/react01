import { NavLink } from 'react-router-dom'
import s from './DialogsItem.module.css'


const DialogsItem = ({ name, id }) => {
   let path = '/dialogs/' + id
   return (
      <div className={s.dialog}>
         <NavLink className={dialog => dialog.isActive ? s.active : s.dialogItem} to={path}>{name}</NavLink>
      </div >
   )
}

export default DialogsItem