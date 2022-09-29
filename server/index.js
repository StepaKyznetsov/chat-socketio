import express from 'express'
import mongoose from 'mongoose'
import { Server } from 'socket.io'
import { createServer } from 'http'
import cors from 'cors'
import * as dotenv from 'dotenv'
import onError from './utils/onError.js'
import onConnection from './socket.io/onConnection.js'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors({
    origin: process.env.ALLOWED_ORIGIN
}))
app
    .use(express.json())
    .use(onError)

try {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('Connected to DB')
    })
} catch (e) {
    onError(e)
}

const server = createServer(app)

const io = new Server(server, {
    cors: process.env.ALLOWED_ORIGIN,
    serveClient: false
})

io.on('connection', (socket) => {
    onConnection(io, socket)
})

server.listen(PORT, () => {
    console.log(`Server started, port ${PORT}`)
})