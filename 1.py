import requests
import json

header = {"_limit":"50"}

url = "https://api.spaceflightnewsapi.net/v3/articles"

r = requests.get(url,params=header)

cont = json.loads(r.content)

cont
len(cont)

def add(*args):
    sum = 0
    for i in args:
        sum += i
    return sum

add(1,2,3,4,5)













#
