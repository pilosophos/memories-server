--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

INSERT INTO Memories (memory, bgColor, creator)
VALUES ("My friend Mori drinking orange juice in a castle", "orange", "Pi");

INSERT INTO Memories (memory, bgColor, creator)
VALUES ("A happy corgi at a Buddhist temple", "darkred", "Pi");

INSERT INTO Memories (memory, bgColor, creator)
VALUES ("Me and Robin at the Space Needle", "teal", "Pi");

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DELETE FROM Memories
WHERE id = 1;

DELETE FROM Memories
WHERE id = 2;

DELETE FROM Memories
WHERE id = 3;