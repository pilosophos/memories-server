import express, { type Express, type Request, type Response } from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app: Express = express();
const port = 3000;
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});

const db = await open({
  filename: 'precious-memories.sqlite3',
  driver: sqlite3.Database
});


io.on('connection', (socket) => {
  console.log('a user connected');
});

app.post('/submit', urlencodedParser, (req: Request, res: Response) => {
  let memory, bgColor, creator;

  try {
    ({ memory, bgColor, creator } = req.body);
  } catch (error) {
    res.sendStatus(400);
    return;
  }

  try {
    db.run(
      'INSERT INTO Memories (memory, bgColor, creator) VALUES (?, ?, ?);',
      [memory, bgColor, creator]
    );
  } catch (error) {
      res.sendStatus(500);
      return;
  }

  res.sendStatus(200);
  io.emit('memoryAdded', {memory, bgColor, creator});
});

io.listen(4000);
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});