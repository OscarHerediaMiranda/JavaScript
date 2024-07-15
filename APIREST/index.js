const express = require('express')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const app = express()
let dbobject 
let connectionString = 'mongodb+srv://oscarherediamiranda:GyHa0NUMNPs9S8vl@cluster0.xapptbz.mongodb.net/dbcourse'

MongoClient.connect(connectionString)
  .then((db) => {
    console.log('successfully...',db)
    dbobject = db
  })
  .catch((err) => {
    console.log('Failed...', err)
  })


app.set('port',3000)
app.use(cors())

app.get('/',(request,response) => {
    console.log('URL BASE')
    return response.json({message:'HOLA MUNDO'})
})

app.get('/courses',async (request,response) => {
    const courses = await dbobject.collection('courses')
    console.log(courses)
})

app.listen(app.get('port'),() => {
    console.log('SERVIDOR ESCUCHANDO PUERTO 3000')
})