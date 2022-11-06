import './App.css';
import DateToday from './Components/Date';
import Time from './Components/Time';
import Weather from './Components/Weather';

function App() {
  return (
    <div className="App">
      <Weather />
      <Time />
      <DateToday />
    </div>
  );
}

export default App;
