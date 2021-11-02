const express = require('express')
const router = express.Router()
const db = require('../db/index')

//CREATE Data Stopwatch
router.post('/', async (req,res,next) =>{
    try {
        const stopwatch = req.body
        const sqlText =`INSERT INTO stopwatchvue (title, total_waktu, selisih_akhir) VALUES ($1, $2, $3) RETURNING *`
        const sqlParams = [stopwatch.title, stopwatch.total_waktu, stopwatch.selisih_akhir]
        const result = (await db.query(sqlText, sqlParams)).rows   
        res.json(result)

    } catch (error) {
        console.error(error)
        next(error)
    }
})
//READ Seluruh Data Stopwatch
router.get('/', async(req,res,next) => {
    try {
        let sql = `SELECT * FROM stopwatchvue`
        let result = (await db.query(sql)).rows
        res.send(result)
    } catch (error) {
        console.error(error)
        next(error)
    }
})
//READ Seluruh Data Stopwatch Berdasarkan Id
router.get('/:id', async(req, res, next) =>{
    try {
        const sqlText =  `SELECT * FROM stopwatchvue WHERE id = $1`
        const sqlParams= [req.params.id]
        const result = (await db.query(sqlText,sqlParams)).rows
        res.json(result)
    } catch (error) {
        console.error(error)
        next(error)
    }
})
//UPDATE Seluruh Data Berdasarkan Id Stopwatch
router.put('/:id',async(req,res,next) =>{ 
    try {
        const stopwatch = req.body
        const sqlText = `UPDATE stopwatchvue SET title = $1, total_waktu = $2 , selisih_akhir =$3
        WHERE id = $4 RETURNING *`
        const sqlParams =[stopwatch.title, stopwatch.total_waktu, stopwatch.selisih_akhir, req.params.id]
        const result = (await db.query(sqlText,sqlParams)).rows
        res.json(result)
    } catch (error) {   
        console.error(error)
        next(error)
    }
})
//DELETE Stopwatch Berdasarkan ID
router.delete('/:id', async (req,res,next)=>{
    try {
        const sqlText = `DELETE FROM stopwatchvue WHERE id = $1 RETURNING *`
        const sqlParams = [req.params.id]
        const result = (await db.query(sqlText,sqlParams)).rows
        res.json(result)
    } catch (error) {
        console.error(error)
        next(error)
    }
})

module.exports=router