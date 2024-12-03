main() [
    x = add(1 2 3 4 5 6 7 8 9)
    y = mul(1 2 3)
    output("Sum is:" x)
    output("Product is:" y)
    if (gt(x y) [
        output("Sum is bigger than product")
    ] [
        output("Sum is less than product")
    ])
]

main()