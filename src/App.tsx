import {Stars} from './components/Stars'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stars count={5}/>
      </header>
    </div>
  );
}

export default App;
