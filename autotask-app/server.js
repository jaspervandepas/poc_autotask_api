const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Endpoint om tickets op te halen
app.get('/api/tickets', async (req, res) => {
  try {
    const response = await axios.get('https://webservices19.autotask.net/atservicesrest/v1.0/Tickets', {
      headers: {
        'Content-Type': 'application/json',
        'ApiIntegrationCode': 'HRA3PN2X3XXC2ODHZTNYRHNULHU',
        'UserName': 'fqvwhxblusg562m@ANALYSTICT.NL',
        'Secret': '0s$RT*1ok4G@Xb~75#CdJc@93'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching tickets:', error.response ? error.response.data : error.message);
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
