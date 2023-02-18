import  express  from "express";
const app= express()
const port =process.env.PORT || '3000'

import web from './routes/web.js'

app.set('view engine','ejs')

app.use(express.static('public'))

app.use('/',web)




app.listen(port,(req,res)=>
{
    console.log(`Server Runnning at: ${port}}`)
})