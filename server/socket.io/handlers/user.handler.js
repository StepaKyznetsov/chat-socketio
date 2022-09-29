const users = {}

export default function userHandler(io, socket) {

    const {roomId} = socket

    if (!users[roomId]) users[roomId] = []

    const updateUserList = () => {
        io.to(roomId).emit('user_list:update', users[roomId])
    }

    socket.on('user_list:add', async (user) => {
        user.socketId = socket.id
        users[roomId].push(user)
        updateUserList()
    })

    socket.on('disconnect', () => {
        if (!users[roomId]) return
        users[roomId] = users[roomId].filter(u => u.socketId !== socket.id)
    })
}