let n = 99999;
if (gt(n, 21)) {
	if (gt(n, 42)) {
		if (gt(n, 90)) {
			if (gt(n, 120)) {
				output("Bro tutt'apposto? ._.");
			} else {
				output("Complimenti per la tua età!");
			};
		} else {
			output("Sei vecchio");
		};
	} else {
		output("Sei un giovane adulto");
	};
} else {
	output("Dovresti essere un bambino");
};
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

function mod(x, y) {
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

function split(str, separator) {
    return str.split(separator);
}

function at(arr, index) {
    return arr[index];
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