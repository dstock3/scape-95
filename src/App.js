import { useState, useMemo } from 'react';
import './App.css';
import Main from './components/Main';
import Loading from './components/Startup/Loading';
import SafeMode from './components/Startup/SafeMode';
import Terminal from './components/Windows/Terminal';
import { UserProvider } from './context/UserContext';

function App() {
  const [startup, setStartup] = useState("start");

  const component = useMemo(() => {
    switch (startup) {
      case 0:
        return <SafeMode startup={startup} setStartup={setStartup} />;
      case 1:
        return <Loading startup={startup} setStartup={setStartup} />;
      case 6:
        return <Terminal winState="full" />;
      case "start":
      default:
        return <Main setStartup={setStartup} />;
    }
  }, [startup, setStartup]);

  return (
    <UserProvider>
      <div className="App">
        {component}
      </div>
    </UserProvider>
  );
}

export default App;
