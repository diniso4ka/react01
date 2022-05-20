import { rerenderEntireTree } from '../render'

let state = {
   profilePage: {
      postsData: [
      ],
      newPostText: 'denis'
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
         { id: 1, message: 'Hi, im гуль' },
         { id: 2, message: 'Hi, im 2' },
         { id: 3, message: 'ded insaid' },
         { id: 4, message: 'oh yeah' },

      ],
      newMessageText: 'denis',
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

}

export let addPostToState = (postMessage) => {
   let newPost = {
      id: state.profilePage.postsData.length,
      message: postMessage,
      likesCount: 0
   }
   state.profilePage.postsData.push(newPost)
   rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText
   rerenderEntireTree(state)
}

export let sendMessage = (text) => {
   let newMessage = {
      id: state.messagesPage.messagesData.length,
      message: text,
   }
   state.messagesPage.messagesData.push(newMessage)
   rerenderEntireTree(state)
}

export let updateNewMessageText = (newText) => {
   state.messagesPage.newMessageText = newText
   rerenderEntireTree(state)
}

export default state