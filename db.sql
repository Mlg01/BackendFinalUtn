create database turnos;
use turnos;
CREATE TABLE turnos (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(40) NOT NULL,
    telefono VARCHAR(40),
    description VARCHAR(300),
    done BOOLEAN NOT NULL DEFAULT 0,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);