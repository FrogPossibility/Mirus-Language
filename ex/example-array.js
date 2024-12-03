let arr = [1, 2, 3, 4, 5, 6];
output("arr", arr);
let squared = map(arr, function (item) {
	let a = mul(item, item);
	return add(a, 3);
});
output("squared", squared);
let filtered = filter(arr, function (item) {
	return eq(mod(item, 2), 0);
});
output("filtered", filtered);
let reduced = reduce(arr, function (product, item) {
	return mul(product, item);
}, 1);
output("reduced", reduced);
function sqr(n) {
	return mul(n, n);
};
function distance(x1, y1, x2, y2) {
	return mul(sqr(sub(x1, x2)), sqr(sub(y1, y2)));
};
output("distance(3 4 8 9)", distance(3, 4, 8, 9));
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