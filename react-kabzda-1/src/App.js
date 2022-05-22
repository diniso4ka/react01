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
        <Nav store={store} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile
              store={store} />}
            />
            <Route path='/dialogs/*' element={<Dialogs
              store={store}

            />}


            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
