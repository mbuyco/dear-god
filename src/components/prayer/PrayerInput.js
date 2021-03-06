import React from 'react';

function PrayerInput(props) {
  const ENTER_KEY_CODE = 13;
  const [inputValue, setInputValue] = React.useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    if (e.keyCode !== ENTER_KEY_CODE) {
      return;
    }

    // TODO: call email api

    props.onDone(true);
    setInputValue('');
  }

  return (
    <div className="PrayerInput" style={{display: props.isDone ? 'none' : 'block'}}>
      <input type="text" onKeyUp={handleSubmit} className="App-input" onChange={handleInputChange} placeholder="What do you want to pray for?" value={inputValue} />
    </div>
  );
}

export default PrayerInput;
