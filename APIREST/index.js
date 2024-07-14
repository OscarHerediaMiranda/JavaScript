const express = require('express')
const cors = require('cors')
const app = express()

app.set('port',3000)
app.use(cors())

app.get('/',(request,response) => {
    console.log('URL BASE')
    return response.json({message:'HOLA MUNDO'})
})

app.get('/courses',(request,response) => {
    return response.json([
        {
            title: 'Angular Foundamentals',
            subtitle: 'AGREGADO DE FORMA DINAMICA',
            description: 'sit amet consectetur, adipisicing elit. Maxime consectetur quae at obcaecati cum vel non fuga provident ex ipsam?',
            price: 150,
            tag: 'ANGULAR',
            img: './images/angular.png'
        },
        { title: 'Angular Intermedio', subtitle: 'AGREGADO DE FORMA DINÁMICA', description: 'sit amet consectetur, adipisicing elit. Maxime consectetur quae at obcaecati cum vel non fuga provident ex ipsam?', price: 200, tag: 'Angular', img: 'images/angular.png' },
        { title: 'React Hooks', subtitle: 'AGREGADO DE FORMA DINÁMICA', description: 'sit amet consectetur, adipisicing elit. Maxime consectetur quae at obcaecati cum vel non fuga provident ex ipsam?', price: 300, tag: 'React', img: 'images/react.png' },
        { title: 'Introducción a VueJS', subtitle: 'AGREGADO DE FORMA DINÁMICA', description: 'sit amet consectetur, adipisicing elit. Maxime consectetur quae at obcaecati cum vel non fuga provident ex ipsam?', price: 250, tag: 'VueJS', img: 'images/vue.png' },
        { title: 'React Native', subtitle: 'AGREGADO DE FORMA DINÁMICA', description: 'sit amet consectetur, adipisicing elit. Maxime consectetur quae at obcaecati cum vel non fuga provident ex ipsam?', price: 350, tag: 'React', img: 'images/react.png' },
        { title: 'Angular Ionic', subtitle: 'AGREGADO DE FORMA DINÁMICA', description: 'sit amet consectetur, adipisicing elit. Maxime consectetur quae at obcaecati cum vel non fuga provident ex ipsam?', price: 300, tag: 'Angular', img: 'images/angular.png' },
    
    ])
})

app.listen(app.get('port'),() => {
    console.log('SERVIDOR ESCUCHANDO PUERTO 3000')
})