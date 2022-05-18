import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'


const DialogItem = (props) => {
   let path = '/dialogs/' + props.id
   return (
      <div className={s.dialog}><NavLink to={path}>{props.name}</NavLink></div >
   )
}

const Message = (props) => {
   return (
      <div className={s.message}>{props.message}</div>
   )
}

const Dialogs = (props) => {

   let dialogsData = [
      { id: 1, name: 'Denisochka' },
      { id: 2, name: 'Savajan' },
      { id: 3, name: 'Lena' },
      { id: 3, name: 'Masha' },
   ]

   let messagesData = [
      { id: 1, message: 'Hi, im гуль' },
      { id: 2, message: 'Hi, im 2' },
      { id: 3, message: 'ded insaid' },

   ]








   return (
      <div className={s.dialogs}>
         <div className={s.dialogs_items}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
         </div>
         <div className={s.messages}>
            <Message message={messagesData[0].message} />
            <Message message={messagesData[1].message} />
            <Message message={messagesData[2].message} />
         </div>

      </div>
   )
}

export default Dialogs