while :
do
echo "*****菜单*****
*1. 新增用户信息
*2. 修改用户信息
*3. 列出系统用户信息
*4. 删除用户
*5. 批量创建/修改/删除指定个数用户信息 
*6. 新增用户组信息
*7. 修改用户组信息
*8. 删除用户组
*9. 列出用户组信息
*10. 批量用户组的新增/修改/删除操作
*"

read -p "请输入你的操作选择：" user

#创建用户，user输入1时，写一个if条件语句 完成

if [ $user -eq 1 ]
then
read -p "请输入你的用户名：" name

#判断输入的用户名是否存在，若存在可以查看用户id，该命令能够执行，返回值1，说明用户已存在不能创建了；若用户不存在，就无法执行该命令，返回值为0，就可以创建用户
id $name &> /dev/null
if [ $? -eq 0 ]
then
echo "******用户已存在！******"
else
read -p "请输入密码：" mi

echo "是否需要指定UID与用户组
1:填写
2:不填写"
read -p "请填写:" Number
if [ $Number -eq 1 ]
then
read -p "请填写UID:" NameUid
read -p "请填写所属用户组:" NameZu
useradd $name -u $NameUid -g $NameZu && echo "$mi" | passwd --stdin $name &> /dev/null
echo "******用户创建成功！******"
else
useradd $name  && echo "$mi" | passwd --stdin $name &> /dev/null
echo "******用户创建成功！******"
fi
fi
fi

#修改用户2

if [ $user -eq 2 ]
then
read -p "请输入你的用户名：" name
id $name &> /dev/null
if [ $? -eq 0 ]
then
read -p "修改用户信息
1:修改用户名
2:修改密码
3:修改UID
4:修改用户组
：" Number
if [ $Number -eq 1 ]; then
read -p "请输入新用户名：" names
usermod -l $names $name
echo "*****修改用户名成功*****"
elif [ $Number -eq 2 ]; then
read -p "请输入新密码：" names
passwd $name echo "$names"
echo "*****修改密码成功*****"
elif [ $Number -eq 3 ]; then
read -p "请输入新UID：" names
usermod -u $names $name
echo "*****修改UID成功*****"
else
read -p "请输入新组：" names
usermod -g $names $name
echo "*****修改组成功*****"
fi

echo "******删除用户成功！******"
else
echo "******用户不存在！******"
fi
fi

#列出系统用户信息
if [ $user -eq 3 ]
then
echo "查看用户
1:单个用户查询
2:所有用户查询"
read -p "请输入：" Number
if [ $Number -eq 1 ]
then
read -p "请输入用户：" name
id $name
else
cat /etc/passwd
fi
fi

#删除用户
if [ $user -eq 4 ]
then
read -p "请输入你的用户名：" name
id $name &> /dev/null
if [ $? -eq 0 ]
then
read -p "是否删除用户目录：
1:删除
2:不删除
：" Number
if [ $Number -eq 1 ]
then
userdel -r $name
else
userdel $name
fi
echo "******删除用户成功！******"
else
echo "******用户不存在！******"
fi
fi

#批量创建/修改/删除指定个数用户
if [ $user -eq 5 ]
then
     read -p "请选择:
     1:批量创建
     2:批量修改
     3:批量删除
     ：" Number
     if [ $Number -eq 1 ]; then
           read -p "请输入创建用户,以逗号分隔
           例：张三,李四,王麻子
           ：" names
           read -p "请输入密码：" mi
           NameArray=(${names//,/ })
           for name in ${NameArray[@]}; do
                useradd $name  && echo "$mi" | passwd --stdin $name &> /dev/null
                echo $name
           done
           echo "批量创建成功"
     elif [ $Number -eq 2 ]; then
           read -p "请输入修改用户,以逗号分隔
           例：张三,李四,王麻子
           ：" names
           read -p "请输入密码：" mi
           NameArray=(${names//,/ })
           for name in ${NameArray[@]}; do
                echo $name
                read -p "请输入新用户名:" NewNames
                echo "$mi" | passwd --stdin $name &>/dev/null
                usermod -l $NewNames $name
           done
            echo "批量修改成功"
     else
           read -p "请输入删除用户,以逗号分隔
           例：张三,李四,王麻子
           ：" names
           NameArray=(${names//,/ })
           for name in ${NameArray[@]}; do
                echo "正在删除 $name"
                userdel -r $name
           done
           echo "删除成功"
     fi
     


fi


#新增用户组
if [ $user -eq 6 ]
then
read -p "请输入新增用户组：" name
grep $name /etc/group &> /dev/null

if [ $? -eq 0 ]
then
echo "******用户组已存在！******"
else
read -p "是否指定GID
1:是
2:否
：" Number
if [ $Number -eq 1 ]; then
     read -p "请输入GID：" groupGID
     groupadd $name -g $groupGID
else
     groupadd $name
fi

fi
fi


#修改用户组信息

if [ $user -eq 7 ]
then
     read -p "请输入你的用户组：" name
     grep $name /etc/group &> /dev/null

     if [ $? -eq 0 ]
     then
          read -p "修改用户组
          1:修改GID
          2:修改组名
          ：" Number

          if [ $Number -eq 1 ]; then
          read -p "请输入新ID：" names
          groupmod $name -g $names
          else
          read -p "请输入新名称：" names
          groupmod $name -n $names
          fi

          echo "******修改用户组成功！******"
     else
     echo "******用户组不存在！******"
     fi
fi



#删除用户组
if [ $user -eq 8 ]
then
read -p "请输入你的用户组：" name
grep $name /etc/group &> /dev/null

if [ $? -eq 0 ]
then
groupdel $name
echo "******删除用户组成功！******"
else
echo "******用户组不存在！******"
fi
fi

#列出用户组信息
if [ $user -eq 9 ]
then
read -p "查看用户组
1:单个用户组
2:全部用户组
：" Number
if [ $Number -eq 1 ]
then
read -p "请输入你的用户组：" name
grep $name /etc/group &> /dev/null
if [ $? -eq 0 ]
then
groups $name
echo "******查看用户组成功！******"
else
echo "******用户组不存在！******"
fi
else
cat /etc/group
fi
fi


#批量实现指定个数用户组的新增/修改/删除操作
if [ $user -eq 10 ]
then
     read -p "请选择:
     1:批量创建
     2:批量修改
     3:批量删除
     ：" Number
     if [ $Number -eq 1 ];then
          read -p "请输入创建组,以逗号分隔
           例：张三,李四,王麻子
           ：" groups
           GroupsArray=(${groups//,/ })
           for name in ${GroupsArray[@]}; do
                echo "正在创建 $name"
                groupadd $name
           done
           echo "批量创建成功"

     elif [ $Number -eq 2 ];then
           read -p "请输入修改组,以逗号分隔
           例：张三,李四,王麻子
           ：" groups
           GroupsArray=(${groups//,/ })
           for name in ${GroupsArray[@]}; do
                read -p "请输入$name 新组名：" NewNames
                groupmod -n $NewNames $name
           done
           echo "批量修改成功"

     else
          read -p "请输入删除组,以逗号分隔
           例：张三,李四,王麻子
           ：" groups
           GroupsArray=(${groups//,/ })
           for name in ${GroupsArray[@]}; do
                echo "正在删除 $name"
                groupdel $name
           done
           echo "批量修改成功"

     fi
     
     
fi


#退出脚本
if [ $user -eq 11 ]
then

exit
fi

done






# ------------------save_user-------------
function save_user
{
    read -p "请输入账号" name
    read -p "请输入密码" mi
    read -p "请选择类别
    1：匿名
    2：普通账号
    3：工作人员
    4：最高管理
    ：" lb
    echo -e "$name\t$mi\t$lb" >>.zh.txt && {
         echo '注册成功'
         if [ $? -ne 0 ];then
         echo "注册账号失败"
         fi
    }

}