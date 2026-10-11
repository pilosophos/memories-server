import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function migrate() {
  const db = await open({
    filename: 'precious-memories.sqlite3',
    driver: sqlite3.Database
  });

  await db.migrate({
    migrationsPath: './migrations'
  });
}

migrate();