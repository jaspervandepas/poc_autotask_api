import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('/api/tickets');
        setTickets(response.data);
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Ticketoverzicht (storingen)</h1>
      {error ? <p>Error: {error}</p> : (
        <ul>
          {tickets.map(ticket => (
            <li key={ticket.id}>{ticket.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tickets;
