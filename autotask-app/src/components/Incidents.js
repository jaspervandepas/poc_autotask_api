import React, { useEffect, useState } from 'react';
import greenDot from '../images/dot_green.png';
import envelope from '../images/envelope.png';
import phone from '../images/phone.png';
import Tickets from './Tickets';

const Incidents = () => {
   return (
    <div>
        <div class="overall-status">
            <img src={greenDot} alt="dot"/>
            <h1>Alle systemen zijn operationeel!</h1>
        </div>
        <div class="incidents">
            <h2>Bekende incidenten</h2>
            <p><br />Er zijn dit moment geen storingen bij ons bekend.</p>
            <Tickets />
            <p><br /><strong>Ervaar je onverhoopt toch problemen neem dan contact op met onze servicedesk!</strong></p>
            <div class="button-container">
                <a href="mailto:support@analystict.nl"><button><img src={envelope} alt="envelope"/>Stuur een mail</button></a>
                <a href="tel:+31402070007"><button><img src={phone} alt="phone"/>Bel direct</button></a>
            </div>
        </div>
    </div>
  );
};
export default Incidents;