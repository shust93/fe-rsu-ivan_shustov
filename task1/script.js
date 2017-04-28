var calculator = (function () {
    var s = 0;
    function add(a) {
        s += a;
        return add;
    }
    function mull(a) {
        s *= a;
        return mull;
    }
    function sub(a) {
        s -= a;
        return sub;
    }
    function div(a) {
        s /= a;
        return div;
    }
    function getResult() {
        console.log(s);
    }
    function resetCalc() {
        s = 0;
    }
    return {
        add: add,
        mull: mull,
        getResult: getResult,
        sub: sub,
        div: div,
        resetCalc: resetCalc
    };
})();
calculator.add(4)(1)(3);
calculator.getResult();
calculator.resetCalc();
calculator.getResult();


