USE buses_db;

INSERT INTO marcas (nombre) VALUES ('Volvo'), ('Scania'), ('Fiat');

INSERT INTO buses (numero_bus, placa, activo, marca_id) VALUES
('001', 'ABC-123', true, 1),
('002', 'XYZ-789', false, 2),
('003', 'DEF-456', true, 1);