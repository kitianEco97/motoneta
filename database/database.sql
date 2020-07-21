CREATE DATABASE ng_motoneta_db;

USE ng_motoneta_db;

CREATE TABLE motos(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    patente VARCHAR (6),
    marca VARCHAR(50),
    modelo VARCHAR(50)
    image VARCHAR(200)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
