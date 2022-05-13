import './App.css';



const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header' >
        <img src="image.png" ></img>
      </header>
      <nav className='nav'>
        <div><a src='#'>My profile</a></div>
        <div><a src='#'>News</a></div>
        <div><a src='#'>Messages</a></div>
      </nav>
      <section className='main-content'>
        <img src='https://i.pinimg.com/originals/5e/52/79/5e5279f05422dbb6c5062db447019b56.jpg'></img>
        <div>avatar</div>
        <div></div>
        <div></div>
      </section>

    </div>
  );

}

export default App;
