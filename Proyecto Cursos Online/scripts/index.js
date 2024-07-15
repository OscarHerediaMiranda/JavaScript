function date () {
    var currentDate = new Date();
    var content = document.getElementById('date');
    content.textContent += " " + currentDate.getFullYear();
}

date();

const containerCourses = document.querySelector('.main__courses');

let data = []

async function getCourses () {
    const url = 'http://localhost:3000/courses'
    const response =  await fetch(url)
    //console.log(response)
    const json = await response.json()
    console.log(json)
    data = json
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
}

getCourses()