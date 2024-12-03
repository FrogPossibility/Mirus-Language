// this is a mini test
// hi

output("test")

array_1 = <array>{ 1 2 3 4 5 6 7 8 9 0 }
set_1 = <set>{ 2 4 6 8 0 }
dictionary_1 = <dict>{ "name": "Simone"  "surname": "Camoletto"  "age": 14 }

output("dictionary:" dictionary_1)
output("set:" set_1)
output("array:" array_1)

output("-----------")

output_function(n m word word1) [
    output("the word is:" word)
    output("the number is:" n)

    dict_words = <dict>{}
    set(dict_words word word1)
    o = add(n m)

    output("the dict of words is:" dict_words)
    output("the sum of" n "and" m "is:" o)
]

output_function(1 10 "clock" "tennis")

output("-----------")

each(entries(dictionary_1) [|entry|
    key = at(entry 0)
    value = at(entry 1)
    output(key "=" value)
])

output("The dict has" size(dictionary_1) "entries in it.")
output(get(dictionary_1 "age"))
output(get(dictionary_1 "name"))
output(get(dictionary_1 "surname"))

result = add(1 4)
output(result)