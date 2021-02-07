import './style/App.scss';
import './style/arrow.scss';
import './style/photo.scss';
import Arrow from './components/Arrow';
import PhotoProfile from './components/PhotoProfile';
import Presentation from './components/Presentation';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header border bottom">
        <div className="title">Giada Boccali</div>
      </header>
      <div className="App-content">
        <div className="container">
          <PhotoProfile />
          <Presentation />
        </div>
        <div className="container">
          <Contacts />
          <Arrow />
        </div>
      </div>
    </div>
  );
}

export default App;
