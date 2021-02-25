import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="App-logo" alt="logo" />
        <input type="text" className="App-input" placeholder="What do you want to pray for?" />
      </header>
    </div>
  );
}

export default App;
