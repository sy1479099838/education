<?php
namespace app\mobile\controller;
use think\Controller;
class Base extends Controller
{
    public function _initialize()
    {
        return $this->fetch('public/base',["logo"=>"/static/admin/images/logo.png"]);
    }
}