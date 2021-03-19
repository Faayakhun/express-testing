const express = require('express')

const router =require('./routes/route')
const app = express()
const port = 3000



app.use(express.json())

app.use(router)
// app.use((req,res,next)=> {
//     next()
// })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})