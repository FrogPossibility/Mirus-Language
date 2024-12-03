// this is a mini test;
// hi;
output("test");
let array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let set_1 = new Set([2, 4, 6, 8, 0]);
let dictionary_1 = new Map([["name", "Simone"], ["surname", "Camoletto"], ["age", 14]]);
output("dictionary:", dictionary_1);
output("set:", set_1);
output("array:", array_1);
output("-----------");
function output_function(n, m, word, word1) {
	output("the word is:", word);
	output("the number is:", n);
	let dict_words = new Map([]);
	set(dict_words, word, word1);
	let o = add(n, m);
	output("the dict of words is:", dict_words);
	return output("the sum of", n, "and", m, "is:", o);
};
output_function(1, 10, "clock", "tennis");
output("-----------");
each(entries(dictionary_1), function (entry) {
	let key = at(entry, 0);
	let value = at(entry, 1);
	return output(key, "=", value);
});
output("The dict has", size(dictionary_1), "entries in it.");
output(get(dictionary_1, "age"));
output(get(dictionary_1, "name"));
output(get(dictionary_1, "surname"));
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