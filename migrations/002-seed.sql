--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

INSERT INTO Memories (memory, bgColor, creator)
VALUES ("Me and my dad on a sailboat", "blue", "Kevin");

INSERT INTO Memories (memory, bgColor, creator)
VALUES ("My visit to the Met in New York", "red", "Kevin");

INSERT INTO Memories (memory, bgColor, creator)
VALUES ("My brother's sixth birthday party", "green", "Kevin");

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DELETE FROM Memories
WHERE id = 1;

DELETE FROM Memories
WHERE id = 2;

DELETE FROM Memories
WHERE id = 3;