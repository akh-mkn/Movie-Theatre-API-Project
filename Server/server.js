const express = require("express")
const app = express

// Define my route
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
  // Initialize server on port 3000
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });