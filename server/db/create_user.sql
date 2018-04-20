INSERT INTO users (username, auth_id)
VALUES (${username}, ${auth_id})
RETURNING *;
