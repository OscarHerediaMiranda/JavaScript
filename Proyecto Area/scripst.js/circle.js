function area() {
    var radio = document.getElementById('radio');
    var ans = Math.PI*radio.value*radio.value;
    document.getElementById('result').innerHTML = ans;
}