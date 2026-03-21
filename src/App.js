import './App.css';
import SearchBox from './components/SearchBox';

function App() {

  return (
    <div className="App">
      <header className='header'>
        <h1>Rick & Morty App</h1>
        <SearchBox />
      </header>
      <footer className='footer'>
        <p><b>Powered by:</b> The Rick and Morty API</p>
        <p><b>Designed by:</b> <a href="https://github.com/jhoseb29">@Jhoseb29</a> & <a href="https://github.com/devkiller59">@devKiller59</a></p>
        <p><b>2022</b></p>
      </footer>
   </div>
  );
}

export default App;
