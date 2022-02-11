const io = require('socket.io')()

io.on('connect', socket => {
  socket.EventEmitter('hello world!')
})

module.exports = io
