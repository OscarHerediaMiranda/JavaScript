function date () {
    var currentDate = new Date();
    var content = document.getElementById('date');
    content.textContent += " " + currentDate.getFullYear();
}

date();

const containerCourses = document.querySelector('.main__courses');

/*const data = [
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

];*/

const data = []

async function getCourses () {
    const url = 'http://localhost:3000/courses'
    const response = await fetch(url)
    console.log(response)
}

getCourses()

data.forEach(course => {
    containerCourses.innerHTML += `
    <div class="card">
        <img src="${course.img}" alt="" class="card__img">
        <h3 class="card__title">${course.title}</h3>
        <p class="card__paragraph"><strong>${course.subtitle}</strong> ${course.description} </p>
        <div class="card__data">
            <span  class="card__price"> S/ ${course.price}</span>
            <span  class=""> ${course.tag} </span>
        </div>
    </div>
    `
})
 /* FUNCION PARA CAMBIAR EL COLOR DE LETRAS (ANGULAR -> ROJO, REACT -> AZUL, VUE -> VERDE) */