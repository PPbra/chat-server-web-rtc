const express = require('express');
const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

server.listen(process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3001);


io.on('connection',(socket)=>{
    console.log("da co ket noi!");
    socket.on('send-message',(data)=>{
        console.log("da gui tin nhan!");
        socket.broadcast.emit("recieve-message",data);
    })
})


app.get('/', (req, res) => {
    res.send("Home page. Server running okay.");
})



