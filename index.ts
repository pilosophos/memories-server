import express, { type Express, type Request, type Response } from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app: Express = express();
const port = process.env.PORT || 3000;
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://pilosophos.com"]
  }
});

const db = await open({
  filename: 'precious-memories.sqlite3',
  driver: sqlite3.Database
});


io.on('connection', (socket) => {
  console.log('a user connected');
});

app.post('/submit', urlencodedParser, async (req: Request, res: Response) => {
  let memory, bgColor, creator;

  try {
    ({ memory, bgColor, creator } = req.body);
    console.log('Received a memory: ', memory);
  } catch (error) {
    res.sendStatus(400);
    return;
  }

  try {
    await db.run(
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

app.get('/memories', async (req: Request, res: Response) => {
  let memories;
  try {
    memories = await db.all('SELECT memory, bgColor, creator FROM Memories;')
  } catch (error) {
    console.error(error)
    res.sendStatus(500);
    return;
  }

  res.send(JSON.stringify(memories));
})

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});