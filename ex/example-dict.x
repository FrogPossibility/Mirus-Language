dict1 = <dict>{ 1: 2  3: 4 }
dict2 = { "a": 2  "b": 4 }
dict3 = <dict>{}

set(dict3 "foo" "bar")
output(get(dict3 "foo"))
set(dict3 "garage" "out")
output(dict3)
output("The dict has" size(dict3) "entries in it.")

each(entries(dict3) [ |entry|
    key = at(entry 0)
    value = at(entry 1)
    output(key "=" value)
])