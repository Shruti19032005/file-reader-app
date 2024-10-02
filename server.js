const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Endpoint to read the data file asynchronously
app.get('/read-file', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'data.txt'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Could not read file' });
        }
        res.json({ content: data });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
