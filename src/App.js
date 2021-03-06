import React from 'react';

import './App.css';
import PrayerInput from './components/prayer/PrayerInput';
import PrayerSuccess from './components/prayer/PrayerSuccess';

function App() {
  const [isDone, setIsDone] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img style={{display: isDone ? 'none' : 'block'}} src={process.env.PUBLIC_URL + '/images/logo.png'} className="App-logo" alt="logo" />
        <PrayerInput isDone={isDone} onDone={setIsDone} />
        <PrayerSuccess isDone={isDone} onDone={setIsDone} />
      </header>
    </div>
  );
}

export default App;
