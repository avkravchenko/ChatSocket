const express = require("express");
const app = express();
const port = 5001;
const http = require("http");
const { Server, Socket } = require("socket.io");
const cors = require("cors");
const dayjs = require("dayjs");
const users: User[] = [];
let currentUser: User | null = null;

interface User {
  name: string;
  id: string;
  socketId: string;
}

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  },
});

io.on("connection", (socket: any) => {
  socket.on("join", (user: User) => {
    if (!users.some((existingUser) => existingUser.id === user.id)) {
      user.socketId = socket.id;
      users.push(user);
    }
  });

  interface Data {
    message: string;
    id: string;
  }

  socket.on("sendMessage", (data: Data) => {
    const currentUser = users.find((user) => user.id === data.id);

    if (currentUser) {
      io.sockets.emit("getMessage", {
        message: data.message,
        currentUser,
        date: dayjs(),
      });
    }
  });

  socket.on("disconnect", () => {
    const leavingUser = users.find(
      (existingUser) => existingUser.socketId === socket.id
    );

    if (leavingUser) {
      const index = users.indexOf(leavingUser);
      users.splice(index, 1);
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
