const port = process.env.PORT || 10000;
const server = require("http").Server();

var io = require("socket.io")(server);

var allUsers = {};
var colors = {
    "frontDoorColor": "#ffffff",
    "mainFrameColor": "#ffffff",
    "rearDoorColor": "#ffffff",
    "rearIndicatorColor": "#ffffff",
    "sideIndicatorColor": "#ffffff",
    "rearHandleColor": "#ffffff",
    "frontHandleColor": "#ffffff",
    "ventsColor": "#ffffff",
    "rearTireShadowColor": "#ffffff",
    "rearHubColor": "#ffffff",
    "rearTireColor": "#ffffff",
    "frontTireColor": "#ffffff",
    "frontHubColor": "#ffffff",
    "rearWindowColor": "#ffffff",
    "windowTrimColor": "#ffffff",
    "mirrorColor": "#ffffff",
    "headLightsColor": "#ffffff",
    "tailLightsColor": "#ffffff"
};

io.on("connection", function(socket){
    io.emit("initializeColors", colors);
    
    socket.on("colorChange", function(data){
        colors[data.part] = data.color; 
        io.emit("colorChange", data);
    });
});

server.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    
    console.log("Port is running");
})