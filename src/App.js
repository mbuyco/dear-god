import React from 'react';

import './App.css';
import PrayerInput from './components/prayer/PrayerInput';
import PrayerSuccess from './components/prayer/PrayerSuccess';

function App() {
  const [isDone, setIsDone] = React.useState(false);
  const [inProgress, setInProgress] = React.useState(false);

  const hideWhenDone = isDone ? 'none' : 'block';
  const showInProgress = inProgress ? 'block' : 'none';

  return (
    <div className="App">
      <header className="App-header">
        <img style={{display: hideWhenDone}} src={process.env.PUBLIC_URL + '/images/logo.png'} className="App-logo" alt="logo" />
        <img style={{display: showInProgress}} src={process.env.PUBLIC_URL + '/images/loader.gif'} alt="loader" />
        <PrayerInput isDone={isDone} onDone={setIsDone} onProgress={setInProgress} inProgress={inProgress} />
        <PrayerSuccess isDone={isDone} onDone={setIsDone} />
      </header>
    </div>
  );
}

export default App;
