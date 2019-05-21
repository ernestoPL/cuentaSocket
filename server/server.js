const express = require('express')
const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server)//para el server se usa io y pasamos la variable server

var contador = 0;

//para ficheros estaticos
app.use(express.static('../public'))

app.get('/hello', function(req, res) {
    res.status(200).send("Hola Mundo!!!!")
})
//on escucha, la funcion va a recivir un socket de coneccion
io.on('connection', function(socket){
    console.log(`Se a conectado un cliente, con id: ${socket.id}`);
    
    setInterval(() => {
        ++contador
        socket.emit('messages', 
            /*placa: "c5542",
            posicion: "metrocentro",
            encargado: "juan"*/
            contador
        )
    }, 2000)
    
})

server.listen(8080, function(){
    console.log("Servidor corrriendo con normalidad en http://localhost:8080");
})