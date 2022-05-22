import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import React from 'react'

const Dialogs = ({ store }) => {
   let dialogsElements = store.getState().messagesPage.dialogsData.map(dialog => <DialogsItem className={s.dialogItem} name={dialog.name} id={dialog.id} />)
   let messageElements = store.getState().messagesPage.messagesData.map(message => <Message className={s.messageItem} message={message.message} />)
   let newMessageElement = React.createRef()

   let sendNewMessage = () => {
      let text = newMessageElement.current.value
      store.sendMessage(text)
      store.updateNewMessageText('')
   }

   let messageTextOnChange = () => {
      let text = newMessageElement.current.value
      store.updateNewMessageText(text)
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogs_items}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messageElements}
            <textarea className={s.textArea} onChange={messageTextOnChange} ref={newMessageElement} value={store.getState().messagesPage.newMessageText}></textarea>
            <button className={s.sendButton} onClick={sendNewMessage}>send</button>
         </div>

      </div>
   )
}

export default Dialogs