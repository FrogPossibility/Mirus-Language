// this is an ARRAY;
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// this is a SET;
let set1 = new Set([2, 4, 6, 8, 0]);
// this is a DICTIONARY;
let dict1 = new Map([["name", "Simone"], ["surname", "Camoletto"], ["age", 13], ["code", 1234]]);
// now we stamp in the console the SET the DICTIONARY and the ARRAY with the OUTPUT function;
output("--ARRAY--");
output(array1);
output("");
output("--SET--");
output(set1);
output("");
output("--DICTIONARY--");
output(dict1);
output("");
// here we can square every number in the ARRAY and stamp it;
let squaredArr = map(array1, function (item) {
	let a = mul(item, item);
	return add(a, 3);
});
output("--ARRAY SQUARED--");
output(squaredArr);
output("");
// here we can FILTER every number in the ARRAY;
let filtered = filter(array1, function (item) {
	return eq(remainder(item, 2), 0);
});
output("--ARRAY FILTERED--");
output("filtered", filtered);
output("");
// here we can REDUCE every number in the ARRAY;
let reduced = reduce(array1, function (product, item) {
	return mul(product, item);
}, 1);
output("--ARRAY REDUCED--");
output("reduced", reduced);
output("");
/*
Runtime functions:
*/

function output(...args) {
    console.log(...args);
}

function add(...args) {
    return args.reduce((sum, num) => sum + num, 0);
}

function sub(x, y) {
    return x - y;
}

function mul(...args) {
    return args.reduce((sum, num) => sum * num, 1);
}

function div(x, y) {
    return x / y;
}

function remainder(x, y) {
    return x % y;
}

function abs(n) {
    return Math.abs(n);
}

function pow(n, m) {
    return Math.pow(n, m);
}

function sqrt(x) {
    return Math.sqrt(x);
}

function gt(x, y) {
    return x > y;
}

function eq(one, other) {
    return one === other;
}

function concat(...args) {
    return args.reduce((sum, num) => sum + num, "");
}

function split(str, separator) {
    return str.split(separator);
}

function join(arr, separator) {
    return arr.join(separator);
}

function at(arr, index) {
    return arr[index];
}

function substring(string, start, end) {
    return string.substring(start, end);
}

function toUpperCase(string) {
    return string.toUpperCase();
}

function toLowerCase(string) {
    return string.toLowerCase();
}

function each(arr, fun) {
    return arr.forEach(fun);
}

function map(arr, fun) {
    return arr.map(fun);
}

function filter(arr, fun) {
    return arr.filter(fun);
}

function reduce(arr, fun, initValue) {
    return arr.reduce(fun, initValue);
}

function entries(map) {
    return Array.from(map.entries());
}

function get(map, key) {
    return map.get(key);
}

function set(map, key, value) {
    map.set(key, value);
}

function size(setOrMap) {
    return setOrMap.size;
}

function length(arr) {
    return arr.length;
}

function $if(cond, consequent, alternate) {
    if (cond) {
        return consequent();
    } else {
        return alternate();
    }
}