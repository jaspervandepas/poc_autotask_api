import React, { useEffect, useState } from 'react';
import greenDot from '../images/dot_green.png';
import redDot from '../images/dot_red.png';

const Status = ({ isButtonDisabled }) => {
    const statusStyle = {
        backgroundColor: isButtonDisabled ? '#D4111B' : '#31c337',
        color: 'white',
    };


   return (
    <div className="status">
        <div id="status-container1" className="statuscontainer">
            <div className="status-block">Geen storingen bekend</div>
            <div className="status-overzicht">
                <h2>Analyst ICT services</h2>
                <p className="single-status"><img src={greenDot} alt="dot" className="mini-dot"/>Analyst ICT servicedesk</p>
                <p className="single-status"><img src={greenDot} alt="dot" className="mini-dot"/>WeMail</p>
            </div>
        </div>
        <div id="status-container2" className="statuscontainer">
            <div className="status-block" style={statusStyle}>{isButtonDisabled ? 'Sorry, er zijn systemen die op dit moment niet optimaal werken' : 'Geen storingen bekend'}</div>
            <div className="status-overzicht">
                <h2>Externe connectiviteit</h2>
                <p className="single-status"><img src={isButtonDisabled ? redDot : greenDot} alt="dot" className="mini-dot"/><span className='image-text'>Microsoft 365{isButtonDisabled ? <em>Helaas ervaren we op dit moment problemen met het verzenden van mails vanuit Microsoft 365.</em> : ''}</span></p>
                <p className="single-status"><img src={greenDot} alt="dot" className="mini-dot"/>Internet</p>
                <p className="single-status"><img src={greenDot} alt="dot" className="mini-dot"/>Telefonie</p>
            </div>
        </div>
    </div>
  );
};
export default Status;