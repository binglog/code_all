# encoding:utf-8

from array import array
from webbrowser import get
import requests
import base64
import os



def cookie(username1,password1,filename1):
    username=f'{username1}'
    password=f'{password1}'
    filename=f'{filename1}'

    #ASP连接通道
    ASP="ASP.NET_SessionId=eqsj1caycv4ncvi"+"202005243"

    print(ASP)

    #健康填报初始化
    url = "http://xgxlsg.cqbvc.edu.cn:17535/SPCP/Web"
    headers = {'Cookie':f'{ASP}'}

    #获取隐藏信息ReSubmiteFlag
    response = requests.request("GET", url,headers=headers)
    ReSubmiteFlag=response.text.split("ReSubmiteFlag")[1]
    ReSubmiteFlag=ReSubmiteFlag.split("\"")[4]



    #获取图片验证码
    def img():
        headers={
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
        'Cookie': f'{ASP}'
        }
        r=requests.get('http://xgxlsg.cqbvc.edu.cn:17535/SPCP/Web/Account/GetLoginVCode?',headers=headers)
        with open(f'{filename}.png','wb') as f:
            f.write(r.content)

    '''
    图形识别 保存code
    '''
    def imgcode():
        request_url = "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic"
        # 二进制方式打开图片文件
        f = open(f'{filename}.png', 'rb')
        img = base64.b64encode(f.read())
        params = {"image":img}
        #百度文字识别token
        access_token = ''
        request_url = request_url + "?access_token=" + access_token
        headers = {'content-type': 'application/x-www-form-urlencoded'}
        response = requests.post(request_url, data=params, headers=headers)
        if response:
            code=response.json()["words_result"][0]["words"].replace(" ","")
            print(code)
        return code
    


    #POST 登陆并获取cookie值
    def get_Cookies0(code):
        
        headers = {'Cookie': f'{ASP}'
        }
        
        payload={'ReSubmiteFlag':f'{ReSubmiteFlag}',
        'StuLoginMode':'3',
        'txtUid': f'{username}',
        'txtPwd': f'{password}',
        'code': f'{code}'}
        
        session = requests.session()
        print(session.post(url,headers = headers,data=payload))

        cookie = session.cookies
        a = cookie.get_dict()
        print("判断是否有cen")
        if any(a):
            print("有")
            return a["CenterSoftWeb"]
        else:
            print("没有")
            return "没有"
        

    num=0
    while True:
        img()
        code=imgcode()
        if len(code) ==4:
            print(f"这是第{num}")
            code=get_Cookies0(code)
            if code== "没有":
                num=num+1
                print(f"这是第{num}没有")
            else:
                return code
        if num==10:
            return "登陆失败"