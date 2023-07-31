function area() {
    var base = document.getElementById('base');
    var altura = document.getElementById('altura');
    var ans = base.value * altura.value;
    document.getElementById('result').innerHTML = ans;
}