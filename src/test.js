
var enumerator = (function(){
    var actual = 0;
    return function () {
        actual++;
    return actual;
}
})();