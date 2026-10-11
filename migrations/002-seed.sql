--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

INSERT INTO Memories (memory, bgColor, creator)
VALUES ("Drinking orange juice in a Japanese castle", "orange", "Pi");

INSERT INTO Memories (memory, bgColor, creator)
VALUES ("Visiting the Met in New York", "darkred", "Pi");

INSERT INTO Memories (memory, bgColor, creator)
VALUES ("Showing my online friend around my hometown", "green", "Pi");

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DELETE FROM Memories
WHERE id = 1;

DELETE FROM Memories
WHERE id = 2;

DELETE FROM Memories
WHERE id = 3;