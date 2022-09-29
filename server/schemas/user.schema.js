import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        autoIncrement: true
    }
})

export default model('User', userSchema)