import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/profile/Profile';
import state from './redux/state';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { addPostToState, updateNewPostText, updateNewMessageText, sendMessage } from './redux/state'




const App = () => {
  window.state = state

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav state={state} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile
              state={state.profilePage}
              addPostToState={addPostToState}
              updateNewPostText={updateNewPostText} />}
            />
            <Route path='/dialogs/*' element={<Dialogs
              updateNewMessageText={updateNewMessageText}
              sendMessage={sendMessage}
              newMessageText={state.messagesPage.newMessageText}
              dialogsData={state.messagesPage.dialogsData}
              messagesData={state.messagesPage.messagesData} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
