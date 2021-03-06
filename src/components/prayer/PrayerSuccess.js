import './PrayerSuccess.css';

function PrayerSuccess(props) {
  const message = 'Your Prayer has been submitted! God bless you! ';

  return (
    <div className="PrayerSuccess" style={{display: props.isDone ? 'block' : 'none'}}>
      <p>{message}</p>
      <button type="button" onClick={() => props.onDone(false)}>Another one</button>
    </div>
  );
}

export default PrayerSuccess;
