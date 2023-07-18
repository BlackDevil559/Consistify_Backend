const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const expressWs = require('express-ws');
expressWs(app);
app.use(bodyParser.json());
app.use(cors());
const dataToSend = {
    address: '0x9760405165',
    url1: 'leetcode.com',
    url2: 'localhost',
    url3: 'www.geeksforgeeks.org'
};
app.post('/receive-data/:id', (req, res) => {
    const userId = req.params.id;
    const data = req.body;
    console.log(`Received data from Chrome extension for user with ID ${userId}:`, data);
    // app.ws('/websocket/:id', (ws, req) => {
    //     ws.send(JSON.stringify(data));
    // });
    res.status(200).json(data);
});

app.get('/api/send-data', (req, res) => {
    res.json(dataToSend);
});
// app.get('/api/sendtofront', (req, res) => {
//     res.json(dataToSend);
//     console.log("data sent to front end");
// });
app.post('/api/data', (req, res) => {
    const newData = req.body;
    console.log(newData);
    res.json({ message: 'Data received and processed successfully' });
});  
app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
