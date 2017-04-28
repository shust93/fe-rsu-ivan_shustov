"use strict";
function callback() {
    console.log(s);
}
function Calculator() {
    this.s = 0;
    this.add = function(a) {
        this.s += a;
        return this;
    },
    this.sub = function(a) {
        this.s -= a;
        return this;
    },
    this.mul = function(a) {
        this.s *= a;
        return this;
    },
    this.div = function(a) {
        this.s /= a;
        return this;
    },
    this.resetCalc = function() {
        this.s = 0;
        return this;
    },
    this.getResult = function() {
        console.log(this.s);
        return this;
    },
	this.getInitialState = function() {
        setTimeout(function () {
            this.s = 5;
            callback();
        }, 2000);
    }

};
var calculator = new Calculator();
calculator.add(5).getResult().add(3).getResult().resetCalc().getResult();
calculator.getResult();
calculator.getInitialState();

