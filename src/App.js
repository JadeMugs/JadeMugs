import './App.scss';
import PhotoProfile from './components/PhotoProfile';
import Presentation from './components/Presentation';

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
      </div>
    </div>
  );
}

export default App;
