import express, { type Express, type Request, type Response } from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bodyParser from 'body-parser';

const app: Express = express();
const port = 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const db = await open({
  filename: 'precious-memories.sqlite3',
  driver: sqlite3.Database
});

app.post('/submit', urlencodedParser, (req: Request, res: Response) => {
  console.log(req)
  const { memory, bgColor, creator } = req.body;
  db.run(
    'INSERT INTO Memories (memory, bgColor, creator) VALUES (?, ?, ?);',
    [memory, bgColor, creator]
  );

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});