const moo = require("moo");

module.exports = moo.compile({
    whitespace:      /[ \t]+/,
    number:          { match: /0|[1-9][0-9]*/, value: Number },
    string:          /"(?:\\["\\]|[^\n"\\])*"/,
    left_bracket:    '[',
    right_bracket:   ']',
    left_paren:      '(',
    right_paren:     ')',
    assignment_op:   "=",
    identifier:      /[a-zA-Z_][a-zA-Z0-9_]*/,
    newline: { match: /\r?\n/, lineBreaks: true },
});
