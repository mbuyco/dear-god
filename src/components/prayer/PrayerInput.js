import React from 'react';

import './PrayerInput.css';
import sendEmail from '../../api/email';

function PrayerInput(props) {
  const [inputValue, setInputValue] = React.useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  async function handleSubmit(e) {
    try {
      props.onProgress(true);
      await sendEmail(inputValue)
      props.onDone(true);
      setInputValue('');
    } catch (e) {
      console.log(e);
    }

    props.onProgress(false);
  }

  return (
    <div className="PrayerInput" style={{display: props.isDone ? 'none' : 'block'}}>
      <input type="text" disabled={props.inProgress} className="App-input" onChange={handleInputChange} placeholder="What do you want to pray for?" value={inputValue} />
      <div>
        <button disabled={props.inProgress} onClick={handleSubmit} type="button" className="PrayerInput-button">Submit</button>
      </div>
    </div>
  );
}

export default PrayerInput;
