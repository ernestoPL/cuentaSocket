const socket = io.connect('http://localhost:8080',{'forceNew': true})//esta es la connecion en parte cliente



socket.on('messages', function(data) {
    console.log(data);
    render(data)
})

function render(data) {
    var html = `<div>
                    <strong>NUMERITOS DE UNO EN UNO:</STRONG><br>
                    <em>${data}</em>
                </div>`
    document.getElementById('messages').innerHTML = html;
}