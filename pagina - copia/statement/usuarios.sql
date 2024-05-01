-- Crear la tabla de usuarios
CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
    contrasena VARCHAR(100) NOT NULL
);

-- Insertar algunos usuarios de ejemplo
INSERT INTO Usuarios (nombre_usuario, correo_electronico, contrasena) VALUES
('usuario1', 'usuario1@example.com', 'contrasena123'),
('usuario2', 'usuario2@example.com', 'abc123'),
('usuario3', 'usuario3@example.com', 'clave_secreta');

-- Ejemplo de consulta para verificar el inicio de sesión
SELECT * FROM Usuarios WHERE nombre_usuario = 'usuario1' AND contrasena = 'contrasena123';
