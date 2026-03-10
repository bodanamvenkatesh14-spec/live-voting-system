const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static elements like CSS, JS, and Images directly
app.use(express.static(path.join(__dirname, 'public')));

// Express routing for clean frontend URLs
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/vote', (req, res) => res.sendFile(path.join(__dirname, 'public', 'vote.html')));
app.get('/judges', (req, res) => res.sendFile(path.join(__dirname, 'public', 'judges.html')));
app.get('/judge-dashboard', (req, res) => res.sendFile(path.join(__dirname, 'public', 'judge-dashboard.html')));
app.get('/leaderboard', (req, res) => res.sendFile(path.join(__dirname, 'public', 'leaderboard.html')));
app.get('/voting-leaderboard', (req, res) => res.sendFile(path.join(__dirname, 'public', 'voting-leaderboard.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin.html')));
app.get('/admin-login', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin-login.html')));

app.listen(PORT, () => {
    console.log(`Server successfully started on port ${PORT}`);
});
