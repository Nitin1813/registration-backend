const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/fetch-data', async (req, res) => {
  try {
    const response = await axios.post(
      'https://dbocwwb.delhi.gov.in/AadharAPI/api/GetJSONInfo/',
      req.body,
      { headers: { 'Content-Type': 'application/json' } }
    );
    res.json(response.data);
  } catch (error) {
    console.error('API Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
