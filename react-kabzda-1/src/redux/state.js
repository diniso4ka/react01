import { rerenderEntireTree } from '../render'

let store = {
   _state: {
      profilePage: {
         postsData: [
         ],
         newPostText: ''
      },

      messagesPage: {
         dialogsData: [
            { id: 1, name: 'Denisochka' },
            { id: 2, name: 'Savajan' },
            { id: 3, name: 'Lena' },
            { id: 4, name: 'Masha' },
            { id: 5, name: 'Kirill' },
            { id: 6, name: 'SALARIK' },
         ],
         messagesData: [
         ],
         newMessageText: '',
      },

      friendsPage: {
         friendsData: [
            { id: 1, name: 'Saveliy', avatar: 'https://slovnet.ru/wp-content/uploads/2019/01/53-9.jpg' },
            { id: 2, name: 'Gosha', avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg' },
            { id: 3, name: 'Sanya', avatar: 'https://vraki.net/sites/default/files/inline/images/10_342.jpg' },
            { id: 4, name: 'Lesha', avatar: 'https://all-aforizmy.ru/wp-content/uploads/2021/10/v-kakoy-serii-umryot-naruto-iz-populyarnogo-anime-1.jpg' },
            { id: 5, name: 'Masha', avatar: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg' },
         ]
      },

   },

   getState() {
      return this._state
   }
   ,

   addPostToState(postMessage) {
      let newPost = {
         id: this._state.profilePage.postsData.length,
         message: postMessage,
         likesCount: 0
      }
      this._state.profilePage.postsData.push(newPost)
      rerenderEntireTree(this._state)
   },

   sendMessage(text) {
      let newMessage = {
         id: this._state.messagesPage.messagesData.length,
         message: text,
      }
      this._state.messagesPage.messagesData.push(newMessage)
      rerenderEntireTree(this._state)
   },

   updateNewMessageText(newText) {
      this._state.messagesPage.newMessageText = newText
      rerenderEntireTree(this._state)
   },

   updateNewMessageText(newText) {
      this._state.messagesPage.newMessageText = newText
      rerenderEntireTree(this._state)
   }
}



export default store
window.store = store