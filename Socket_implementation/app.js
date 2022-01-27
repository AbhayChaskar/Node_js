const express=require('express');
const http=require('http');
const PORT = 9999;
const app = express();
const httpServer=http.createServer(app);
const {Server}=require("socket.io");
const io=new Server(httpServer)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

io.on('connection',(socket)=>{
    // console.log("User Connected");

    socket.on('message',(msg)=>{
        // console.log("message",+msg);
        io.emit('chat message',msg)
    })
    // socket.on('disconnect',()=>{
    //     console.log("User Disconnected");
    // })
})

httpServer.listen(PORT, (err) => 
{
    if (err) throw err;
    console.log(`Working on ${PORT}`);
})