function area() {
    var lado = document.getElementById('lado');
    var ans = lado.value*lado.value;
    document.getElementById('result').innerHTML = ans;
}