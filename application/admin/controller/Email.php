<?php
namespace app\admin\controller;
use PHPMailer\SendEmail;
use PHPMailer\SendEmails;
class Email extends Base{
    public function sendemail()
    {
        return $this->fetch();
    }
    public function send()
    {
        $value=input("post.");
        $arr=array();
        foreach (json_decode($value["data"],true) as $k=>$v)
        {
            $arr[$v["name"]]=$v["value"];
        }
        $pattern = "/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/";
        if($arr["mailTitle"]=="" || $arr["mailTitle"]==NULL || empty($arr["mailTitle"]))
        {
            $result="邮件标题不能为空！";
        }
        else
        {
            if(preg_match($pattern,$arr["EmailN"]))
            {
                if($value["text"]=="" || $value["text"]==NULL || empty($value["text"]))
                {
                    $result="邮件内容不能为空！";
                }
                else
                {
                    if($arr["Enclosure"]==1)
                    {
                        $res = SendEmails::SendEmail($arr["mailTitle"],$value["text"],$arr["EmailN"],$value["file"],$value["fileN"]);
                        if($res)
                        {
                            $filePath="./emailfile/";
                            $this->deldir($filePath);
                            $result="success";
                        }
                        else
                        {
                            $result="error";
                        }
                    }
                    elseif($arr["Enclosure"]==0)
                    {
                        $res = SendEmail::SendEmail($arr["mailTitle"],$value["text"],$arr["EmailN"]);
                        if($res)
                        {
                            $result="success";
                        }
                        else
                        {
                            $result="error";
                        }
                    }
                }
            }
            else
            {
                $result="邮箱格式不正确！";
            }
        }
        return $result;
    }
    public function upfile()
    {
        $file = request()->file("file");
        if($file){
            $info = $file->move(ROOT_PATH . 'public' . DS . 'emailfile');
            if($info){
                $filename=$info->getFilename();
                $csvFile="./emailfile/".date("Ymd", time())."/".$filename;
                $result=array(
                    "a"=>"success",
                    "filename"=>$csvFile,
                    "file"=>$filename
                );
            }else{
                $result=array(
                    "a"=>"error",
                    "filename"=>$file->getError()
                );
                // 上传失败获取错误信息
                echo $file->getError();
            }
        }

        exit(json_encode($result,true));
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
}