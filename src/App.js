import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Loading from './components/Startup/Loading';
import SafeMode from './components/Startup/SafeMode';

function App() {
  const [startup, setStartup] = useState("start")
  return (
    <div className="App">
      {startup === 0 ? <SafeMode startup={startup} setStartup={setStartup} /> : null}
      {startup === 1 ? <Loading startup={startup} setStartup={setStartup} /> : null}
      {startup === "start" ? <Main setStartup={setStartup} /> : null}
    </div>
  );
}

export default App;
