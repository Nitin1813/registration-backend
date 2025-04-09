const axios = require('axios');

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Handle preflight
  }

  try {
    const response = await axios.post(
      'https://dbocwwb.delhi.gov.in/AadharAPI/api/GetJSONInfo/',
      req.body,
      { headers: { 'Content-Type': 'application/json' } }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('API Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
