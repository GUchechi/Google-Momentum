import './App.css';
import DateToday from './Components/Date';
import Quote from './Components/Quote';
import Time from './Components/Time';
import Weather from './Components/Weather';

function App() {
  return (
    <div className="App">
      <Weather />
      <Time />
      <DateToday />
      <Quote/>
    </div>
  );
}

export default App;
