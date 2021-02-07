import './style/App.scss';
import './style/arrow.scss';
import './style/photo.scss';
import Arrow from './components/Arrow';
import PhotoProfile from './components/PhotoProfile';
import Presentation from './components/Presentation';
import Contacts from './components/Contacts';
import Experiences from './components/Experiences';

function App() {
  return (
    <div className="App">
      <header className="border bottom">
        <div className="title">Giada Boccali</div>
      </header>
      <div className="page">
        <div className="main-container">
          <PhotoProfile />
          <Presentation />
        </div>
        <div className="container">
          <Contacts />
          <Arrow />
        </div>
      </div>
      <div className="page">
        <Experiences />
      </div>
    </div>
  );
}

export default App;
