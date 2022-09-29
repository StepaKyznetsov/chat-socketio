import MessageSchema from '../../schemas/message.schema.js'
import onError from '../../utils/onError.js'

const messages = {}

export default function messageHandlers(io, socket) {

    const {roomId} = socket

    const updateMessageList = () => {
        io.to(roomId).emit('message_list:update', messages[roomId])
    }

    socket.on('message_list:get', async () => {
        try {
            messages[roomId] = await MessageSchema.find({
                roomId
            })
            updateMessageList()
        } catch (e) {
            onError(e)
        }
    })

    socket.on('message_list:add', async (text) => {
        try {
            messages[roomId].push(
                await MessageSchema.create({
                    text,
                    roomId:'main',
                    userId: socket,
                    createdAt: Date.now()
                })
            )
        } catch (e) {
            onError(e)
        }

        updateMessageList()
    })
}