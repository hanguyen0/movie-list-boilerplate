drop DATABASE if exists movies;
CREATE DATABASE movies;
use movies

-- mysql -u student -p < server/schema.sql
-- mysql -u student -p

CREATE TABLE movies(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255)
)