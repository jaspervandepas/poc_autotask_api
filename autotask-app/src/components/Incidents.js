import React, { useEffect, useState } from 'react';
import greenDot from '../images/dot_green.png';
import redDot from '../images/dot_red.png'
import envelope from '../images/envelope.png';
import phone from '../images/phone.png';
import crossIcon from '../images/cross.png';
import messages from '../images/messages.png';
import Tickets from './Tickets';

const Incidents = ({ isButtonDisabled }) => {
   return (
    <div>
        <div className="overall-status">
            <img src={isButtonDisabled ? redDot : greenDot} alt="dot" className='bigdot'/>
            <h1>{isButtonDisabled ? 'Sorry, er zijn systemen die op dit moment niet optimaal werken' : 'Alle systemen zijn operationeel!'}</h1>
        </div>
        <div className="incidents">
            <img src={messages} alt="messages" className='messages'/>
            <h2>Bekende incidenten</h2>
            <p><br />{isButtonDisabled ? <span className='crosscontainer'><img src={crossIcon} alt="cross" className='cross'/><span className='image-text'><strong>Microsoft 365</strong>Op dit moment is het helaas niet mogelijk om mails te versturen vanuit Microsoft 365. We doen ons best dit zo spoedig mogelijk op te lossen met onze leveranciers.<em>Volgende update verwacht: 04-07-2024 rond 15.30 uur</em></span></span> : 'Er zijn dit moment geen storingen bij ons bekend.'}</p>
            {/* <Tickets /> */}
            <p><br /><strong>{isButtonDisabled ? 'Ervaar je onverhoopt andere problemen? Neem dan contact op met onze servicedesk!' : 'Ervaar je onverhoopt toch problemen neem dan contact op met onze servicedesk!'}</strong></p>
            <div className="button-container">
                <a href="mailto:support@analystict.nl"><button><img src={envelope} alt="envelope"/>Stuur een mail</button></a>
                <a href="tel:+31402070007"><button><img src={phone} alt="phone"/>Bel direct</button></a>
            </div>
        </div>
    </div>
  );
};
export default Incidents;