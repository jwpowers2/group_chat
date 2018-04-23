
var express = require( "express");
var path = require( "path");

var app = express();

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get("/", function (req, res){

    res.render('index');

})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);


var users = [];

io.sockets.on('connection', function(socket){
  console.log("Client/socket is connected");
  console.log("Client/socket id is: ", socket.id);

    socket.on( "new_user", function (data){
      
      console.log(data);

      users.push({'user':data,'hash':socket.id});
      
      io.emit( 'users', users);

    });
    /*
    socket.on("reset", function (data){
      count = 0;
      io.emit('count', count);
    })
    */
});


