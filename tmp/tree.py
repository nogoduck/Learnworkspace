import sys, time, math
start = time.time()
input = 

n, m = map(int, input().split()) #n: 나무의 갯수/ m: 필요한 나무의 길이(m)
h = list(map(int, input().split())) #h: 각 나무의 길이

#testCase1
# n, m = 4, 7
# h = [20, 15, 10, 17]

#testCase2 / res : 8
# n, m = 4, 4
# h = [7, 9, 13, 11]

#testCase3
# n, m

MAXTREE = max(h)
MINTREE = min(h)

# 작은나무를 기준으로 모든 나무를 자르고 챙겨갈 수 있는 나무의 길이의 합
sumMINTREE = sum(list(map(lambda x : x - MINTREE, h))) 
# print("sumMINTREE: ", sumMINTREE)

#제일 작은나무 기준으로 자른 나무의 길이
topTreeLength = MAXTREE - MINTREE

def sumTreeArray(treeArr, cutValue):
    sum = 0
    for i in range(0, len(treeArr)):
       if treeArr[i] - cutValue > 0:
            sum += treeArr[i] - cutValue
    return sum

if sumMINTREE >= m:
    # print("SMALL TREE")
    h = (list(map(lambda x : x - MINTREE, h)))
    MAXTOPTREE = max(h)
    # MINTOPTREE = min(h)
    # print("M ", m)
    idx = False
    for i in range(MAXTOPTREE, -1 ,-1):
        processTree = sumTreeArray(h, i)
        # print(processTree , i, bool(sumTreeArray(h, i) >= m))
        if sumTreeArray(h, i) >= m:
            idx = i
            break
    print(MINTREE + idx)
 
    
else: 
    # print("topTree BIG")
    bottomTreeLength = math.ceil((m - sumMINTREE) / n)
    # print("result: ", MAXTREE - (topTreeLength + bottomTreeLength))
    print(MAXTREE - (topTreeLength + bottomTreeLength))
print("time: ", time.time() - start)