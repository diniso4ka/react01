import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import React from 'react'

const Dialogs = ({ store, dispatch }) => {
   let dialogsElements = store.getState().messagePage.dialogsData.map(dialog => <DialogsItem className={s.dialogItem} name={dialog.name} id={dialog.id} />)
   let messageElements = store.getState().messagePage.messagesData.map(message => <Message className={s.messageItem} message={message.message} />)
   let newMessageElement = React.createRef()

   let sendNewMessage = () => {
      dispatch({ type: 'ADD-MESSAGE-TO-STATE' })
      // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: '' }
      // store.dispatch(action)
   }

   let messageTextOnChange = () => {
      let text = newMessageElement.current.value
      let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text }
      dispatch(action)
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogs_items}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messageElements}
            <textarea className={s.textArea} onChange={messageTextOnChange} ref={newMessageElement} value={store.getState().messagePage.newMessageText}></textarea>
            <button className={s.sendButton} onClick={sendNewMessage}>send</button>
         </div>

      </div >
   )
}

export default Dialogs