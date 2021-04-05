# inp = int(input())
inp = 10

# starcnt =  0
# spacecnt = 0
length = inp * 2

for i in range(0, length):
    
    if i < inp :
        space = abs(10 - i)
        print("*" * (i + 1) + " " * space + "*" * space)
    # print(i+1, space, space)
    else :
        # print("L")
        buttomi = i % 10
        buttomspace =  abs(10 - buttomi)
        # print(buttomi, space)
        print(" " * (buttomspace) + "*" * buttomi + " " * buttomi + "*" * buttomspace)
    # print("*" * (i + 1) + " " * space + "*" * space)
    # if i > inp:
    #     # print("DDASDF")
    #     buttom = i % 10
    #     buttomSpace =  abs(10 - i)
    #     print(" " * buttomSpace + "*" * buttom + " " * buttom + "*" * buttomSpace)
        

