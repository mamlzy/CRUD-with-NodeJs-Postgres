const express = require('express')
const app = express()
const pool = require('./db')


app.use(express.json()) // => req.body

// Routes

// Get All
app.get('/siswas', async(req, res) => {
    try {
        const allSiswa = await pool.query('SELECT * FROM siswa')

        res.json(allSiswa.rows)
    } catch (err) {
        console.error(err.message)
    }
})

// Show
app.get('/siswas/:id', async(req, res) => {
    const {id} = req.params
    try {
        const siswa = await pool.query('SELECT * FROM siswa WHERE id = $1',[id])

        res.json(siswa.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

// Create
app.post('/siswas', async(req,res) => {
    try {
        const {nisn} = req.body
        const {nama} = req.body
        const {agama} = req.body
        const {jenis_kelamin} = req.body
        const {alamat} = req.body

        const newSiswa = await pool.query(
            "INSERT INTO siswa (nisn,nama,agama,jenis_kelamin,alamat) VALUES ($1,$2,$3,$4,$5) RETURNING *",
            [nisn,nama,agama,jenis_kelamin,alamat]
        )

        res.json(newSiswa.rows[0])
    } catch(err) {
        console.error(err.message)
    }
})

// Update
app.put('/siswas/:id', async(req, res) => {
    try {
        const {id} = req.params
        const {nisn} = req.body
        const {nama} = req.body
        const {agama} = req.body
        const {jenis_kelamin} = req.body
        const {alamat} = req.body

        const updateSiswa = await pool.query(
            "UPDATE siswa SET nisn = $2, nama = $3, agama = $4, jenis_kelamin = $5, alamat = $6 WHERE id = $1",
            [id, nisn, nama, agama, jenis_kelamin, alamat]
        )

        res.json('Data was Updated')
    } catch(err) {
        console.error(err.message)
    }
})

// Delete
app.delete('/siswas/:id', async(req,res) => {
    try {
        const {id} = req.params
        const deleteSiswa = await pool.query('DELETE FROM siswa WHERE id = $1', [id])
        res.json('Siswa was Succesfully Deleted')
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(3000, () => {
    console.log('Server Running on Port 3000')
})