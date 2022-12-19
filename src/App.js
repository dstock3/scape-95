import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Loading from './components/Startup/Loading';
import SafeMode from './components/Startup/SafeMode';
import Terminal from './components/Windows/Terminal';

function App() {
  const [startup, setStartup] = useState(0)
  return (
    <div className="App">
      {startup === 0 && <SafeMode startup={startup} setStartup={setStartup} />}
      {startup === 1 && <Loading startup={startup} setStartup={setStartup} />}
      {startup === "start" && <Main setStartup={setStartup} />}
      {startup === 6 && <Terminal winState="full" />}
    </div>
  );
}

export default App;
