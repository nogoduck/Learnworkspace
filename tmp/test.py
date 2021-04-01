# import math

# n, m = map(int, input().split()) #n: 나무의 갯수/ m: 필요한 나무의 길이(m)
# h = list(map(int, input().split())) #h: 각 나무의 길이

# maxTree = max(h)
# minTree = min(h)
# print("maxTree, minTree: ", maxTree, minTree)

# #모든 나무의 길이
# totalTree = sum(h) 
# print("totalTree: ",totalTree)

# #제일 작은나무를 기준으로 모든 나무를 자르고 챙겨갈 수 있는 나무의 길이의 합
# sumMinTree = sum(list(map(lambda x : x - minTree, h))) 
# print("sumMinTree: ", sumMinTree)

# #제일 작은나무 기준으로 자른 나무의 길이
# topTreeLength = maxTree - minTree

# #제일 작은 나무를 기준으로 자르고 남은 나무의 길이
# restTree = totalTree - sumMinTree
# print("restTree: ", restTree)

# #작은나무를 기준으로 자르고 남은 나무가 나무꾼이 원하는 나무의 길이보다 부족할 때
# if sumMinTree >= m:  #  summin : 22, m 20
#     for i in range(minTree, maxTree+1):
#         if m < sum(list(map(lambda x : x - i, h))):
#             print("길이:", m) 
# else:
#     pass
#     # print("topTreeLength: ", topTreeLength)
#     # bottomTreeLength = topTreeLength - m
#     # print("bottomTreeLength: ", bottomTreeLength)
#     # result = math.ceil(bottomTreeLength / n) + topTreeLength
#     # print(result)





# # a = max(h)
# # c = 0
# # while True:
# #     if c >= m:
# #         break
# #     a -= 1
# #     c = sum(list(map(lambda x: x - a if x > a else 0, h)))
    
# # print(a)

import math

n, m = map(int, input().split()) #n: 나무의 갯수/ m: 필요한 나무의 길이(m)
h = list(map(int, input().split())) #h: 각 나무의 길이

maxTree = max(h)
minTree = min(h)
print("maxTree, minTree: ", maxTree, minTree)

#모든 나무의 길이
totalTree = sum(h) 
print("totalTree: ",totalTree)

#제일 작은나무를 기준으로 모든 나무를 자르고 챙겨갈 수 있는 나무의 길이의 합
sumMinTree = sum(list(map(lambda x : x - minTree, h))) 
print("sumMinTree: ", sumMinTree)

#제일 작은나무 기준으로 자른 나무의 길이
topTreeLength = maxTree - minTree

#제일 작은 나무를 기준으로 자르고 남은 나무의 길이
restTree = totalTree - sumMinTree
print("restTree: ", restTree)


print(m, topTreeLength, bool(m >= topTreeLength))
if m <= topTreeLength:
    for i in range(topTreeLength, maxTree+1):
        if m <= sum(list(map(lambda x : x - i, h))):
            
