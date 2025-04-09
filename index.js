const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, welcome to the Express.js demo!');
});

app.post('/greet', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    const sanitizedName = name.trim();
    res.json({ message: `Hello, ${sanitizedName}!` });
});

app.post('/test', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    const sanitizedName = name.trim(); // Add sanitization
    res.json({ message: `Hello, ${sanitizedName}!` });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
