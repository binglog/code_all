# encoding:utf-8
import requests
def fasong(filename,title):
    url = "http://www.pushplus.plus/send"
    #pushplus的token
    payload={'token': '',
    'title': f'{filename}{title}',
    'content': f'{filename}{title}',
    'template': 'html'}
    response = requests.request("POST", url, data=payload)
    print(response.text)