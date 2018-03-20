const port = process.env.PORT || 10000;
const server = require("http").Server();

var io = require("socket.io")(server);

var allUsers = {};

io.on("connection", function(socket){
    
    socket.on("playInstrument", function(data1, data2){
        socket.broadcast.to(this.myRoom).emit("playInstrument", data1, data2)
    })
});

server.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    
    console.log("Port is running");
})