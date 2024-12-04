capitalize(string) [
    first = toUpperCase(at(string 0))
    rest = substring(string 1)
    concat(first rest)
]

toCamelCase(string) [
    parts = split(string /[-_]/)
    join(map(parts [|part idx|
        if eq(idx 0) [
            part
        ] else [
            capitalize(part)
        ]
    ]) "")
]

output("\"\" =>" toCamelCase(""))
output("the_stealth-warrior => " toCamelCase("the_stealth-warrior"))
output("The-Stealth-Warrior => " toCamelCase("the_stealth-warrior"))
output("A-B-C => " toCamelCase("A-B-C"))