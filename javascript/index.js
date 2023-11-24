'use strict';
console.log('Hello World!');



var num = 1;
var num2 = num * 2;
console.log(num2);

var remainder = 30 % 4;
console.log(remainder);

var result = 3 > 7;
console.log(result);

var one = 5;
var two = 5;

console.log(one === two);

var a = 1;
a = a + 1;

a += 1; a = a + 1
a += 2; 

var a = 1;
a = a + 1;

console.log(a);

var pInf = 10/0;
console.log(pInf);

var c = 10/0;
console.log(c);

var nInf = 10 / -0;
console.log(nInf);

var a = typeof 3;
console.log(a);

var s1 = "sonmething";
var s2 = "else";

var result = s1 + s2;
console.log(result);

var s1 = "abc ";
var s2 = "abc";

var result1 = s1 === s2;
console.log(result1);

var s3 = "abc ";
var s4 = "abc";

var result2 = s3 !== s4;
console.log(result2);

var s1 = "1";
var s2 = 1;

var result1 = s1 === s2;
console.log(result1);

var str1 = "abc";
console.log(str1.length);

var str = "abcdef";
console.log(str[0]);

var foo = null;
console.log(typeof foo);

var foo = null;
console.log(typeof foo === null);

console.log(typeof doo);

var key = Symbol('key');
console.log(typeof key);

var e = '문자열';
console.log(typeof e);

console.log('콘솔창에 문자열 띄우기');

let value = 1;
console.log(value);
value = 2;
console.log(value);

const abc = 1; //이미 선언된 이름으로는 상수 선언 불가능함.
console.log(abc);

let g = 1;
console.log(g++);
console.log(++g);

a = 1;
a += 3;
console.log(a);

a *= 3;
console.log(a);

const t = !true;
console.log(t);

let f = true || false;
console.log(f);

const h = !((true && false) || (true && false) || !false);
console.log(h);

const i = 0;
const j = false;
const equals = i === j;
console.log(equals);