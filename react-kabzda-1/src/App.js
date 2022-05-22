import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/profile/Profile';
import store from './redux/state';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";





const App = () => {


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav state={store.getState()} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile
              state={store.getState().profilePage}
              addPostToState={store.getState().addPostToState}
              updateNewPostText={store.getState().updateNewPostText} />}
            />
            <Route path='/dialogs/*' element={<Dialogs
              updateNewMessageText={store.getState().updateNewMessageText}
              sendMessage={store.getState().sendMessage}
              newMessageText={store.getState().messagesPage.newMessageText}
              dialogsData={store.getState().messagesPage.dialogsData}
              messagesData={store.getState().messagesPage.messagesData} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
