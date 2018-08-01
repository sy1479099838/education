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
use app\admin\model\NodeModel;

class App extends Base
{
    public function index()
    {
        echo "123456";
        return $this->fetch();
    }
    public function appstatic()
    {
//        echo "123456";exit;
        return $this->fetch();
    }

    public function choiceapp()
    {
        return $this->fetch("choiceapp");
    }

    public function dynamic()
    {
        return $this->fetch();
    }

    public function encrypt()
    {
        return $this->fetch();
    }

    public function monitor()
    {
        return $this->fetch();
    }
}
