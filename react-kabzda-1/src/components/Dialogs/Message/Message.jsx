import { NavLink } from 'react-router-dom'
import s from './Message.module.css'



const Message = ({ message }) => {

   return (
      <div className={s.message}>{message}</div>
   )
}

export default Message