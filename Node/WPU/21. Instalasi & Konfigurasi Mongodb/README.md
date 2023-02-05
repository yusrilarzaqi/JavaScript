# Instalasi & Konfigurasi

## Instalasi `mongosh`

- Download `mongosh.deb`
  - `wget https://downloads.mongodb.com/compass/mongodb-mongosh_1.6.2_amd64.deb`
- Install `mongosh.deb`
  - `sudo gdebi https://downloads.mongodb.com/compass/mongodb-mongosh_1.6.2_amd64.deb`

## Connect to mongodb

`mongosh "mongodb+srv://cluster0.xxx.mongodb.net/myFirstDatabase" --apiVersion 1 --username xxx`

## Create Conllections

`db.createCollection('mahasiswa')`

## Insert Data

- Insert One `db.mahasiswa.insertOne(nama: "Yusril Arzaqi", email: "arzaqiyusril@gmail.com")`
- Insert many `db.mahasiswa.insertMany([{nama: "Bimo Alamsyah", email: "bimoalam@gmail.com"}, {nama: "Adam Saputra", email: "adamsaputra@gmail.com"}])`

## Find Data (show data)

`db.mahasiswa.find()`
