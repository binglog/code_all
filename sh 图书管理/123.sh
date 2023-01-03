#!/bin/bash

function information
{
    echo "---------------------------"
  echo "图书馆管理系统）" 
  echo  
  echo "1:读者信息" 
  echo "2:书籍信息" 
  echo "3:借书系统" 
  echo "4:还书系统" 
  echo "5|q|Q:退出系统" 
  echo  
  echo "---------------------------" 
  read -p "请输入你的选择:" a

case "$a" in
  1)  
    duzhe ;;
  2)  
    tushu ;;
  3)  
    jieshu ;;
  4)  
    huanshu;;
  5|q|Q)
    return -1 ;;
  *)  
    information ;;  
esac
}

 function duzhe
{ 
source yonghu.sh
information 

}
 function tushu
{
source library1.sh
information

}
 function jieshu
{
source jieshu.sh
information
}
 function huanshu
{
source huanshu.sh
information

}




















