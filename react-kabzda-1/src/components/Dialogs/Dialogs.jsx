import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'


const DialogItem = ({ name, id }) => {
   let path = '/dialogs/' + id
   return (
      <div className={s.dialog}>
         <NavLink to={path}>{name}</NavLink>
      </div >
   )
}

const Message = ({ message }) => {

   return (
      <div className={s.message}>{message}</div>
   )
}



const Dialogs = (props) => {

   let dialogsData = [
      { id: 1, name: 'Denisochka' },
      { id: 2, name: 'Savajan' },
      { id: 3, name: 'Lena' },
      { id: 4, name: 'Masha' },
      { id: 5, name: 'Kirill' },
   ]

   let messagesData = [
      { id: 1, message: 'Hi, im гуль' },
      { id: 2, message: 'Hi, im 2' },
      { id: 3, message: 'ded insaid' },
      { id: 4, message: 'oh yeah' },

   ]


   let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
   let messageElements = messagesData.map(message => <Message message={message.message} />)






   return (
      <div className={s.dialogs}>
         <div className={s.dialogs_items}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messageElements}
         </div>

      </div>
   )
}

export default Dialogs