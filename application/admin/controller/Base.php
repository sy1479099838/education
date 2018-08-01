<?php
// +----------------------------------------------------------------------
// | snake
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2022 http://baiyf.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: NickBai <1902822973@qq.com>
// +----------------------------------------------------------------------
namespace app\admin\controller;

use think\Controller;

class Base extends Controller
{
    public function _initialize()
    {
        if(empty(session('username'))){

            $loginUrl = url('login/index');
            if(request()->isAjax()){
                return msg(111, $loginUrl, '登录超时');
            }

            $this->redirect($loginUrl);
        }

        // 检测权限
        $control = lcfirst(request()->controller());
        $action = lcfirst(request()->action());

        if(empty(authCheck($control . '/' . $action))){
            if(request()->isAjax()){
                return msg(403, '', '您没有权限');
            }

            $this->error('403 您没有权限');
        }

        $this->assign([
            'username' => session('username'),
            'rolename' => session('role')
        ]);
    }

    protected function code()
    {
        $code=substr(md5(microtime(true)), 0, 6);
        return $code;
    }
    protected function readcsv($fileName)
    {
        $handle = fopen("$fileName","r");
        $data = fgetcsv($handle);
        $data = eval('return '.iconv('gbk','utf-8',var_export($data,true)).';');
//        print_r($data);echo "<br />";
        $num=count($data);
        $row=1;
        $val="";
        while($value=fgetcsv($handle))
        {
            $value = eval('return '.iconv('gbk','utf-8',var_export($value,true)).';');
            for($i=0;$i<$num;$i++)
            {
                $val[$row][/*$data[*/$i/*]*/]=$value[$i];
            }
            $row++;
        }
        $i=1;
        foreach ($val as $key=>$val1)
        {
            $val[$key][]=$i;
            $i++;
        }
        return $val;
    }

    protected function code_2($num)
    {
        $code=substr(md5($num), 0, 6);
        return $code;
    }
}