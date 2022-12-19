import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Loading from './components/Startup/Loading';
import SafeMode from './components/Startup/SafeMode';
import Terminal from './components/Windows/Terminal';

function App() {
  const [startup, setStartup] = useState("start");

  let component;
  switch (startup) {
    case 0:
      component = <SafeMode startup={startup} setStartup={setStartup} />;
      break;
    case 1:
      component = <Loading startup={startup} setStartup={setStartup} />;
      break;
    case 6:
      component = <Terminal winState="full" />;
      break;
    case "start":
      component = <Main setStartup={setStartup} />
      break;

    default:
      component = <Main setStartup={setStartup} />;
  }

  return (
    <div className="App">
      {component}
    </div>
  );
}
export default App;
