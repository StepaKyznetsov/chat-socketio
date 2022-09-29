import { Schema, model } from 'mongoose'

const messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    roomId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
})

export default model('Message', messageSchema)