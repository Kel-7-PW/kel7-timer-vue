const db = require('./index')
const TABLE_NAME = 'stopwatchvue'

async function createStopwatchTable(){    
    try {
        console.log('STOPWATCH TABLE CREATED')
        let sql = `CREATE TABLE IF NOT EXISTS ${TABLE_NAME}(
            id serial,
            title VARCHAR(50) NOT NULL,
            total_waktu INTEGER NULLABLE,
            selisih_akhir INTEGER NULLABLE,
         PRIMARY KEY(id)
        )`
        await db.query(sql)
        
    } catch (error) {
        console.error(error)
    }
}

module.exports = createStopwatchTable