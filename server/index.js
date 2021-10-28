const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000
const createStopwatchTable = require ('./db/StopwatchStorage')
const stopwatch = require('./router/stopwatch')

//akan menjalankan http method apapun yang dikirimkan 
app.use(cors())
app.use(express.json())
app.use('/api/stopwatch', stopwatch)

app.listen(PORT, async() => {
    try{
        await createStopwatchTable()
        console.log(`LISTEN TO PORT ${PORT}`)

    }catch(error){
        console.error(error)
    }
})