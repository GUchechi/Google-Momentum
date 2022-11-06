import './App.css';
import Date from './Components/Date';
import Time from './Components/Time';
import Weather from './Components/Weather';

function App() {
  return (
    <div className="App">
      <Weather />
      <Time />
      <Date />
    </div>
  );
}

export default App;
