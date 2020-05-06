function f() {
    document.getElementById("defer").value = 'Hello';
}
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
}
f.defer(6000);