import json
import sys
import requests

data =  [{"data":1, "data1":2}, {"data":3, "data1":4}]
data = json.dumps(data)

headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}
res = requests.post(url, params={'result':data}, verify=False , headers=headers)

print(res.text)	# 서버에서 전송하는 return 값 출력
print(res.status_code)	#서버 상태값 ex)200, 500...