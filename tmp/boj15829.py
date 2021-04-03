while True:
    n = input()
    a = b = c = d = 0
    for i in n:
        if i.islower():
            a += 1
        elif i.isupper():
            b +=1
        elif i.isdigit():
            c+=1
        elif i.isspace():
            d+=1
    print(a, b, c, d)