import axios from 'axios';

export default function sendEmail(message) {
  if (!message) {
    return;
  }

  return axios.post(process.env.REACT_APP_EMAIL_SERVICE_URL, {
    message
  });
}
