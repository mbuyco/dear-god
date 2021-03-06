import React from 'react';

import sendEmail from '../../api/email';

function PrayerInput(props) {
  const ENTER_KEY_CODE = 13;
  const [inputValue, setInputValue] = React.useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  async function handleSubmit(e) {
    if (e.keyCode !== ENTER_KEY_CODE) {
      return;
    }

    try {
      props.onProgress(true);
      await sendEmail(e.target.value)
      props.onDone(true);
      setInputValue('');
    } catch (e) {
      console.log(e);
    }

    props.onProgress(false);
  }

  return (
    <div className="PrayerInput" style={{display: props.isDone ? 'none' : 'block'}}>
      <input type="text" disabled={props.inProgress} onKeyUp={handleSubmit} className="App-input" onChange={handleInputChange} placeholder="What do you want to pray for?" value={inputValue} />
    </div>
  );
}

export default PrayerInput;
