# encoding:utf-8
import requests
import cookie0
import base64
import os
import sys
import tzi


#获取文件名称作为保存本地
filename=os.path.basename(__file__).split(".")
filename=filename[0]

#账号密码
username=""
password=""

#cookie
CenterSoftWeb="null"
num=0
#获取cookie
CenterSoftWeb=cookie0.cookie(username,password,filename)
if CenterSoftWeb == "登陆失败":
  tzi.fasong(filename,"cookie获取失败")
  sys.exit(0)


#登陆 以下信息抓包获取

url = "http://xgxlsg.cqbvc.edu.cn:17535/SPCP/Web/Report/Index"
payload={'StudentId': '',#账号
'Name': ' ',#姓名
'Sex': ' ',#性别
'SpeType': ' Z',
'CollegeNo': ' 01',
'SpeGrade': ' 2021',
'SpecialtyName': ' ',
'ClassName': ' ',
'MoveTel': ' ',
'Province': ' ',
'City': ' ',
'County': ' ',
'ComeWhere': ' ',
'FaProvince': ' ',
'FaCity': ' ',
'FaCounty': ' ',
'FaComeWhere': ' ',
'text_1': ' ',
'radio_1': ' ',
'text_2': ' ',
'radio_2': ' ',
'radio_3': ' ',
'radio_4': ' ',
'radio_5': ' ',
'text_3': ' ',
'text_4': ' ',
'radio_6': ' ',
'radio_7': ' ',
'radio_8': ' ',
'radio_9': ' ',
'radio_10': ' ',
'checkbox_1': ' ',
'radio_11': ' ',
'Other': ' ',
'GetAreaUrl': ' ',
'IdCard': ' ',
'ProvinceName': ' ',
'CityName': ' ',
'CountyName': ' ',
'FaProvinceName': ' ',
'FaCityName': ' ',
'FaCountyName': ' ',
'radioCount': ' ',
'checkboxCount': ' ',
'blackCount': ' ',
'PZData': ' '}

headers = {
  'Cookie': f'CenterSoftWeb={CenterSoftWeb}'
}
response = requests.request("POST", url, data=payload,headers=headers)
print(response.text)
if "登录" in response.text:
  tzi.fasong(filename,"登陆提交失败")