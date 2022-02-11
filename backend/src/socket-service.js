const io = require('socket.io')()

io.on('connect', socket => {
  socket.emit('connection established')

  socket.on('new message', (streamId, message) => {
    socket.to(streamId).emit('new live stream message', message)
  })

  socket.on('join stream', streamId => {
    socket.join(streamId)
  })

  socket.on('go live', (userId, cb) => {
    // eslint-disable-next-line no-console
    console.log(`${userId} is going live`)

    socket.broadcast.emit('new auction', userId)
    socket.join(userId)
    cb(true)
  })
})

module.exports = io
