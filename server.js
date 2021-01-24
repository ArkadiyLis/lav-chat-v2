const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();

app.use(express.static(`${__dirname}/dist`));

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('connection');

    socket.emit('init', 'socket init');

    socket.once("disconnect", (socket) => {
        console.log('socket disconnect');
    });
});

server.listen(4000, () => {
    console.log(`Server is ready`);
});
