#书籍管理
{
    function information
    {
        echo "---------------------------"
        echo "图书操作"
        echo
        echo -n "| " ;echo "1:添加图书"
        echo -n "| " ;echo "2:删除图书"
        echo -n "| " ;echo "3:图书列表"
        echo -n "| " ;echo "4:查找图书"
        echo -n "| " ;echo "5:修改图书"
        echo -n "| " ;echo "6|q:退出系统"
        echo
        echo "---------------------------"
        read -p "请输入你的选择:" a
        
    
        case "$a" in
        1)
            add ;;
        2)
            delete ;;
        3)
            list ;;
        4)
            search;;
        5)
            modify;;
        6|q|Q)
            return -1 ;;
        *)
            information ;;
        esac
    }
    
    
    function file_exist
    {
        if [ ! -f .book.txt ];then
            touch .book.txt
        fi
    }
    
    
    function add
    {
        read -p "请输入图书的编号：" number
        read -p "请输入图书的书名：" book_name
        read -p "请输入图书的作者：" author
        read -p "请输入图书的出版社：" price 
        read -p "请输入图书的类别：" category
        read -p "请输入图书的关键词：" keyword
        read -p "请输入图书的备注：" remarks
            echo -e "$number\t$book_name\t$author\t$price\t$category\t$keyword\t$remarks" >>.book.txt && {
                echo "添加图书成功！"
                echo "-------------------"
            }
        if [ $? -ne 0 ];then
            echo "添加图书失败"
        fi
        information
    
    }
    
    function delete
    {
        read -p "请输入要删除的图书的编号：" number
        grep $number .book.txt &>/dev/null && {
                sed -i '/\<'$number'\>/d' .book.txt &>/dev/null  &&
                echo "删除图书成功"
        echo "-------------------------"
        }
        
        if [ $? -ne 0 ];then
            echo "删除图书失败"
            echo "你要删除的图书不存在"
        fi
        information
    }
    
    #列出所有图书的信息
    function list
    {
        echo -e "编号\t书名\t作者\t出版社\t类别\t关键词\t备注"
        cat .book.txt
        echo "----------------------------"
        information
        
    }
    
    
    #下面的函数用到的查询菜单
    function search_menu
    {
        echo;echo "----------------------------"
        echo -n "|";echo -e "1：\t按图书编号查询"
        echo -n "|";echo -e "2：\t按图书书名查询"
        echo -n "|";echo -e "3：\t按图书作者查询"
        echo -n "|";echo -e "4：\t按图书出版社查询"
        echo -n "|";echo -e "5：\t按图书类别查询"
        echo -n "|";echo -e "6：\t按图书关键词查询"
        echo -n "|";echo -e "7|q：\t退出类别系统"
        echo;echo "----------------------------"
    
    }
    function search
    {
        search_menu
        read -p "请输出你的选择：" myselect
        case "$myselect" in
        1)
            read -p "请输入要查询的图书的编号：" mynumber
            echo -e "编号\t书名\t作者\t价格\n"
            awk '$1=='$mynumber'{print $0}' .book.txt 2>/dev/null
                                
            if [ $? -ne 0 ];then
                echo "图书不存在"
            fi
            search
            ;;
        2)
            read -p "请输入你要查询的书名：" mybook_name
            echo -e "编号\t书名\t作者\t价格\n"
            awk '$2~/'$mybook_name'/{print $0}' .book.txt 2>/dev/null
            if [ $? -ne 0 ];then
                echo "图书不存在"
            fi
            search
            ;;
        3)
            read -p "请输入图书的作者：" myauthor
            echo -e "编号\t书名\t作者\t价格\n"
            awk '$3~/'$myauthor'/{;print $0}' .book.txt 2>/dev/null
            if [ $? -ne 0 ];then
                echo "图书不存在"
            fi
            search
            ;;
        4)
            read -p "请输入图书的出版社：" myprice
            echo -e "编号\t书名\t作者\t价格\n"
            awk '$4=='$myprice'{print $0}' .book.txt 2>/dev/null
            if [ $? -ne 0 ];then
                echo "图书不存在"
            fi
            search
            ;;
        5)
            read -p "请输入图书的类别：" mycategory
            echo -e "编号\t书名\t作者\t价格\n"
            awk '$4=='$mycategory'{print $0}' .book.txt 2>/dev/null
            if [ $? -ne 0 ];then
                echo "图书不存在"
            fi
            search
            ;;

        6)
            read -p "请输入图书的关键词：" mykeyword
            echo -e "编号\t书名\t作者\t价格\n"
            awk '$4=='$mykeyword'{print $0}' .book.txt 2>/dev/null
            if [ $? -ne 0 ];then
                echo "图书不存在"
            fi
            search
            ;;
        *)
            information
            ;;
        esac
    
    }
    
    function modify
    {
        read -p "请输入要修改的图书的编号：" number
        grep $number .book.txt &>/dev/null && {
                sed -i '/\<'$number'\>/d' .book.txt &>/dev/null  &&
                echo "修改图书开始"
        echo "-------------------------"
        }
        read -p "请输入图书的编号：" number
        read -p "请输入图书的书名：" book_name
        read -p "请输入图书的作者：" author
        read -p "请输入图书的出版社：" price 
        read -p "请输入图书的类别：" category
        read -p "请输入图书的关键词：" keyword
        read -p "请输入图书的备注：" remarks
        echo -e "$number\t$book_name\t$author\t$price\t$category\t$keyword\t$remarks" >>.book.txt && {
            echo "修改图书成功！"
            echo "-------------------"
        }
        if [ $? -ne 0 ];then
            echo "修改图书失败"
            echo "你要修改的图书不存在"
        fi
        information
    }

}



#-----------个人中心----------------
function zx()
{
    echo "欢迎:$zh
    登陆图书管理中心"

}


#login
function login
{
    read -p "请输入账号" name
    read -p "请输入密码" mi
    h=$(awk '$1=='$name'{print $0}' .zh.txt 2>/dev/null)
    zh=(${h///t/ })
    if [ $mi -eq ${zh[1]} ];then
        echo "登陆成功"
        zx($(zh[0]))

    else
        echo "登陆失败"
    fi
}

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
    if [ $bl -eq 1 -o $bl -eq 2 ];then
        read -p "请输入姓名：" myname
        read -p "请输入性别：" mysex
        read -p "请输入种类(学生/教师)：" myzhonglei
        read -p "请输入种类(学生/教师)：" beizhu
        echo -e "$name\t$mi\t$lb\t$myname\t$mysex\t$myzhonglei\t$mybeiz\t10" >>.zh.txt && {
            echo '注册成功'
            dl
            if [ $? -ne 0 ];then
            echo "注册账号失败"
            dl
            fi
        }

}
#-------------------开始登陆---------------
function dl
{
    echo "------图书管理系统-----------"
    echo -n "| " ;echo "1:登陆"
    echo -n "| " ;echo "2:注册"
    echo "---------------------------"
    read -p "请输入你的选择:" a
    case "$a" in
    1)
        login ;;
    2)
        save_user ;;
    *)
        dl ;;
    esac

}

dl