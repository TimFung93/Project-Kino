const express = require('express');
const path = require('path');
const app = express();

app.get('/index.html', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about.html', (req, res) => {
	res.sendFile(path.join(__dirname + '/about.html'));
})



app.get('/gallery.html', (req, res) => {
	res.sendFile(path.join(__dirname + '/gallery.html'));
})


app.use(express.static('public'))

app.listen(8080, () => {
	console.log("Server started on http://localhost:8080");
	console.log("Press Ctrl + C to kill server")
});