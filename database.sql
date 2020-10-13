CREATE DATABASE todo_database;

--\c into todo todo_database

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE DATABASE data_siswa;

CREATE TABLE siswa(
    id SERIAL PRIMARY KEY,
    nisn INTEGER,
    nama VARCHAR(255),
    agama VARCHAR(255),
    jenis_kelamin VARCHAR(255),
    alamat TEXT
);