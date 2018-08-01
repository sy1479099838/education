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
use app\admin\controller\Phonecode;
use app\admin\model\PhonecodeModel;
use app\admin\model\ArticleModel;
use PHPMailer\SendEmail;
//header("Content-type:text/html;charset=utf-8");
class Message extends Base
{
    public function index()
    {
        return $this->fetch();
    }
    public function sendmsg()
    {
        $list=PhonecodeModel::order('createTime desc')->paginate(10);
        $this->assign("list",$list);
        return $this->fetch();
    }
    public function send()
    {
        $data=input('post.');
        $phoneNum=$data["num"];
        $user=$data["user"];
        $code=$this->code();
        $result=Phonecode::sendSms($phoneNum,$code);
        $result=json_decode(json_encode($result,true),true);
        if($result["Message"]=="OK")
        {
            $value=PhonecodeModel::create([
                "phoneNum"=>$phoneNum,
                "code"=>$code,
                "state"=>0,
                "createTime"=>time(),
                "useerName"=>$user
            ]);
            exit("success");
        }
        else
        {
            exit($result);
        }
    }

    public function upcsvfile()
    {
        $file = request()->file('file');
        $filePath="./csvfile/";
        $this->deldir($filePath);
        // 移动到框架应用根目录/public/uploads/ 目录下
        $value="";
        if($file){
            $info = $file->move(ROOT_PATH . 'public' . DS . 'csvfile');
            if($info){
                $filename=$info->getFilename();
//                $csvFile=dirname(dirname(dirname(dirname(__FILE__))))."/public/csvfile/".date("Ymd", time())."/".$filename;
                $csvFile="./csvfile/".date("Ymd", time())."/".$filename;
                $value=$this->readcsv($csvFile);
            }else{
                // 上传失败获取错误信息
                echo $file->getError();
            }
        }
//        dump($this->getTree($value));
        return $this->fetch("upcsvfile",["list"=>$this->getTree($value),"filename"=>$csvFile]);

    }
    public function getTree($list)
    {
        $fenLei=array();
        foreach ($list as $val)
        {
            $fenLei[]=$val[3]."&,&".$val[4];
        }
        $fenLei=array_unique($fenLei);
        $arr=array();
        foreach ($fenLei as $num=>$text)
        {
            $arr[]=explode("&,&",$text);
        }
        $fenLei=$arr;
        $treeList=array();
        foreach ($fenLei as $key1=>$val1)
        {
            foreach ($list as $key2=>$val2)
            {
                $treeList[$key1]["name"]=$val1;
                if($val2[3]==$val1[0])
                {
                    $treeList[$key1]["children"][]=$val2;
                }
            }
        }
        return $treeList;
    }





    public function deldir($path)
    {
        //如果是目录则继续
        if (is_dir($path)) {
            //扫描一个文件夹内的所有文件夹和文件并返回数组
            $p = scandir($path);
            foreach ($p as $val) {
                //排除目录中的.和..
                if ($val != "." && $val != "..") {
                    //如果是目录则递归子目录，继续操作
                    if (is_dir($path . $val)) {
                        //子目录中操作删除文件夹和文件
                        $this->deldir($path . $val . '/');
                        //目录清空后删除空文件夹
                        @rmdir($path . $val . '/');
                    } else {
                        //如果是文件直接删除
                        unlink($path . $val);
                    }
                }
            }
        }
    }

    public function moreup()
    {
        $path=input('post.');
        $info=$this->readcsv($path["path"]);
        $phoneChoice=explode(",",$path["text"]);
        $arr=array();
        foreach ($info as $key1=>$val1)
        {
            if(in_array($val1[5],$phoneChoice))
            {
                $arr[]=$val1;
            }
        }
        $info=$arr;
        $NameCode=array();
        $phone=array();
        $Label=array();
        $i=0;
        $j=0;
        $create=array();
        foreach ($info as $key=>$val)
        {
            $code=$this->code_2(microtime(true)+$i);
            $create[]=array(
                "phoneNum"=>$val[2],
                "code"=>$code,
                "state"=>0,
                "createTime"=>time(),
                "useerName"=>$val[1]
            );
            $NameCode[$j]["code"]=$code;
            $NameCode[$j]["product"]="dsd";
            $phone[]=$val[2];
            $Label[]="网络安全意识教育体验";
            $i += 0.01;
            $j++;

        }
        $result=Phonecode::sendBatchSms($NameCode,$phone,$Label);
        $result=json_decode(json_encode($result,true),true);
        if($result["Message"]=="OK")
        {
            $user = new PhonecodeModel;
            $list = $create;
            $value=$user->saveAll($list, false);
            exit("success");
        }
        else
        {
            exit("error");
        }
    }

    public function explain()
    {
        $wen=ArticleModel::where("id",2)->field("content")->find()->content;
        if($wen)
        {
            return $this->fetch("explain",["wen"=>$wen]);
        }
        else
        {
            exit("error");
        }
    }
}
