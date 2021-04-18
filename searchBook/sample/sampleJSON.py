import sys
import json

resp = {
    "Response" : 200,
    "title" : "with python files"
}

print(json.dump(resp))
sys.stdout.flush()
