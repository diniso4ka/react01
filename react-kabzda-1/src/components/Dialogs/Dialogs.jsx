import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import React from 'react'

const Dialogs = ({ messagesData, dialogsData }) => {
   let dialogsElements = dialogsData.map(dialog => <DialogsItem className={s.dialogItem} name={dialog.name} id={dialog.id} />)
   let messageElements = messagesData.map(message => <Message className={s.messageItem} message={message.message} />)


   let newMessageElement = React.createRef()
   let sendMessage = () => {
      let text = newMessageElement.current.value
      alert(text)
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogs_items}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messageElements}
            <textarea ref={newMessageElement}></textarea>
            <button onClick={sendMessage}>send</button>
         </div>

      </div>
   )
}

export default Dialogs