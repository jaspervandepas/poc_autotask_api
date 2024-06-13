import React, { useEffect, useState } from 'react';
import greenDot from '../images/dot_green.png';

const Status = () => {
   return (
    <div class="status">
        <div id="status-container1" class="statuscontainer">
            <div class="status-block">Geen storingen bekend</div>
            <div class="status-overzicht">
                <h2>Analyst ICT services</h2>
                <p class="single-status"><img src={greenDot} alt="dot" class="mini-dot"/>Analyst ICT servicedesk</p>
                <p class="single-status"><img src={greenDot} alt="dot" class="mini-dot"/>WeMail</p>
            </div>
        </div>
        <div id="status-container2" class="statuscontainer">
            <div class="status-block">Geen storingen bekend</div>
            <div class="status-overzicht">
                <h2>Externe connectiviteit</h2>
                <p class="single-status"><img src={greenDot} alt="dot" class="mini-dot"/>Microsoft 365</p>
                <p class="single-status"><img src={greenDot} alt="dot" class="mini-dot"/>Internet</p>
                <p class="single-status"><img src={greenDot} alt="dot" class="mini-dot"/>Telefonie</p>
            </div>
        </div>
    </div>
  );
};
export default Status;