const express = require('express')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const app = express()
let dbobject 
let connectionString = 'mongodb+srv://oscarherediamiranda:GyHa0NUMNPs9S8vl@cluster0.xapptbz.mongodb.net/dbcourse'
let collection

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log('successfully...')
    dbobject = client.db('dbcourse')
    collection = dbobject.collection('courses')
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
    const courses = await collection.find().toArray()
    console.log(courses)
    return response.json(courses)
})

app.listen(app.get('port'),() => {
    console.log('SERVIDOR ESCUCHANDO PUERTO 3000')
})