const app = require('./config/server');


const server = app.listen(80, function(){
  console.log('Servidor online !!!');
})

/* configurar o websocket, informando para ouvir eventos apartir do server configurado */
let io = require('socket.io').listen(server);

app.set('io', io);

/* criar a conexão por websocket */
io.on('connection', function(socket){
  console.log('Usuario Conectou !!!');

  socket.on('disconnect', function(){
    console.log('Usuario desconectou !!!');
  });
});
