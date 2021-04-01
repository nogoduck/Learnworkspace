import math

# n, m = map(int, input().split()) #n: 나무의 갯수/ m: 필요한 나무의 길이(m)
# h = list(map(int, input().split())) #h: 각 나무의 길이

#testCase1
# n, m = 4, 20
# h = [20, 15, 10, 17]

# testCase2 / res : 8
n, m = 4, 12
h = [7, 9, 13, 11]


MAXTREE = max(h)
MINTREE = min(h)
print("MAXTREE, MINTREE: ", MAXTREE, MINTREE)

#모든 나무의 길이
totalTree = sum(h) 
print("totalTree: ",totalTree)

#제일 작은나무를 기준으로 모든 나무를 자르고 챙겨갈 수 있는 나무의 길이의 합
sumMINTREE = sum(list(map(lambda x : x - MINTREE, h))) 
print("sumMINTREE: ", sumMINTREE)

#제일 작은나무 기준으로 자른 나무의 길이
topTreeLength = MAXTREE - MINTREE

#제일 작은 나무를 기준으로 자르고 남은 나무의 길이
restTree = totalTree - sumMINTREE
print("restTree: ", restTree)

def sumTreeArray(treeArr):
    sum = 0
    for i in range(0, len(treeArr) + 1):
        print(i)

    return 0

if sumMINTREE >= m:
    print("topTree small")
    print(sumTreeArray(h))
        
        # print(list(map(lambda x : 0 < x - i , h)))

        # sumMINTREE = sum(list(map(lambda x : 0 < x - i, h)))
        # print(i, sumMINTREE, h)
        # if sumMINTREE >= m:
        #     print("나무의 길이 : ", i)
        #     break
else: 
    print("topTree BIG")
    bottomTreeLength = math.ceil((m - sumMINTREE) / n)
    print("result: ", topTreeLength + bottomTreeLength)
