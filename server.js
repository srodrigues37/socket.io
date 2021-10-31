import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

// setup the port our backend app will run on
const PORT = 3030;
const CHANNELS = ['channel 1', 'channel 2', 'channel 3', 'channel 4'];

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: true,
  origins: ['localhost:3000'],
});

app.use(cors());

// Hardcoding a room name here. This is to indicate that you can do more by creating multiple rooms as needed.
const room = 'general';

io.on('connection', (socket) => {
  socket.join(room);
  CHANNELS.map((channel) =>
    socket.on(channel, (data) => io.in(room).emit(channel, data))
  );
  socket.on('disconnect', () => socket.leave(room));
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
