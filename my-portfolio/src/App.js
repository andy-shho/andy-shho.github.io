import './App.css';
import logo from './portfolio.jpg';
import Typewriter from 'typewriter-effect';

function App() {
  // var typewriter = new Typewriter()
  return (
    <div className="App">
      <header className="nav-header">
        <div className="container">
          <img src = {logo} alt = "logo" className= "logo"></img>
          <nav>
            <ul className="navigation-bar">
              <li><a href="#">Home</a></li>
              <li><a href="#" >Skills</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <h1 id="personal-name">Andy Ho</h1>
        <div className="typewrite">
          <Typewriter
          options={{
            strings: ['Software Engineer', 'Front End Engineer', 'Back End Engineer', 'Full Stack Engineer'],
            autoStart: true,
            loop: true
          }} />
        </div>
      </div>
    </div>
  );
}

export default App;

