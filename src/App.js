import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Loading from './components/Startup/Loading';
import SafeMode from './components/Startup/SafeMode';

function App() {
  const [startup, setStartup] = useState(1)
  return (
    <div className="App">
      <Loading />
      {/*
      <SafeMode startup={startup} setStartup={setStartup} />
      {startup === 1 ? <Main setStartup={setStartup} /> : null}
      */}
    </div>
  );
}

export default App;
