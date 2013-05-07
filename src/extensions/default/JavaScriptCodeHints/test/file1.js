/*jslint vars: true, plusplus: true, devel: true, browser: true, node: true, nomen: true, indent: 4, maxerr: 50 */
/*global brackets, require */
'use strict';
var A1 = { propA : 1 },
    A2 = { propA : 2 },
    A3 = A2;

function funB(paramB1, paramB2) {
    var B1 = { propB : 1 },
        B2 = { propB : 2 };

    function funC(paramC1, paramC2) {
        var C1 = { propC : 1 },
            C2 = { propC : 2 };

        B1.propB = 0;
        C1.propC = 0;
        B1.foo = 0;
        console.log("hello\\\" world!");
    }
    
    var s = "a string";
    var r = s;
    var t = r;

}

/**
 * @param {string} a
 * @param {number} b
 */
function funD(a, b) {
    return {x: a, y: b};
}

require(["MyModule"], function (myModule) {
    var x = myModule.a;
});

funB();
var x = A1;

var arr = [];
arr["my-key"] = 1;
arr["for"] = 10;

function MClass() {}
MClass.prototype.calc = function (a4, b4) {
    return a4 + b4;
};

var ins1 = new MClass();
ins1.calc(10, 10);

var Person = function (name) {
    this.name = name;
};

Person.prototype.getName = function () {
    return this.name;
};

var Customer = function (name) {
    this.name = name;
};

Customer.prototype = new Person();

var myCustomer = new Customer('Dream Inc.');
myCustomer.getName();

Customer.prototype.setAmountDue = function (amountDue) {
    this.amountDue = amountDue;
};
Customer.prototype.getAmountDue = function () {
    return this.amountDue;
};

function testInnerFunc() {
    var t = "test";
    function innerFunc(arg) {
        return {t: function () {return arg; }};
    }
    var t2 = innerFunc("test").t().toLocaleLowerCase();
    
}

/**
 * @param {boolean} a
 * @param {Date} b
 */

function funTypeAn1(a, b) {
   
    return {x: a, y: b};
}

/**
 * @param {function(): number} f
 */
function funFuncArg(f) {
   
    return f();
}

function testRef1() {return 100; }

funFuncArg(testRef1); //also test return type
    
/**
 * @param {function(string,number): string} f
 */
function funFunc2Arg(f) {
    var s = "test";
    return f(s, 10);
}

function testRef2(s, n) {return s + n; }

funFunc2Arg(testRef2);