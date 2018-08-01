<?php
namespace app\mobile\controller;


class Index extends Base
{
    public function index()
    {
//        echo 123;
        return $this->fetch();
    }
}
