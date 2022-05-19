import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'


const Dialogs = ({ messagesData, dialogsData }) => {






   let dialogsElements = dialogsData.map(dialog => <DialogsItem className={s.dialogItem} name={dialog.name} id={dialog.id} />)
   let messageElements = messagesData.map(message => <Message className={s.messageItem} message={message.message} />)


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