var content = document.getElementById('location-content');
if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition((position) => {
        console.log(position.coords);
        content.innerHTML = `
            <h3>USTED ESTA UBICADO EN ESTAS COORDENADAS</h3>
            <strong>LATITUD: </strong> ${position.coords.latitude}
            <strong>LONGITUDE: </strong> ${position.coords.longitude}
        `;
    });
} else {
    alert('La geolocalización no está disponible en este navegador');
}