import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Incidents from './components/Incidents';
import Status from './components/Status';

function App() {
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Simuleer storing');
  const [buttonStyle, setButtonStyle] = useState({});

  const sendMessage = async () => {
      setIsButtonDisabled(true);
      setButtonText('Storing gesimuleerd');
      setButtonStyle({ backgroundColor: 'red', color: 'white', pointerEvents: 'none', cursor: 'not-allowed' });

      const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
      const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
      const fromPhoneNumber = process.env.REACT_APP_TWILIO_PHONE_NUMBER;

      const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

      const data = new URLSearchParams({
          To: "+31683035066",
          From: fromPhoneNumber,
          Body: "Beste klant, \nOp dit moment ervaren we helaas problemen met mails versturen vanuit Microsoft 365. We hebben contact met onze leveranciers om zo snel mogelijk met een oplossing te voorkomen. \nVolgende update verwacht binnen: 30 minuten. \nGroet, \nServicedesk Analyst ICT",
      });

      const auth = btoa(`${accountSid}:${authToken}`);

      try {
          const response = await axios.post(url, data, {
              headers: {
                  'Authorization': `Basic ${auth}`,
                  'Content-Type': 'application/x-www-form-urlencoded'
              }
          });
          console.log('Message sent:', response.data);
      } catch (error) {
          console.error('Error sending message:', error);
      }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Altijd up to date?<br />Superlogisch!</h3>
      </header>
      <div class="content">
        <Incidents />
        <Status />
        <button onClick={sendMessage} style={buttonStyle}>{buttonText}</button>
      </div>
    </div>
  );
}

export default App;
