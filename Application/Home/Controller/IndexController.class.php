<?php
namespace Home\Controller;
use Think\Controller;
use Think\Verify as verify;
use Think\Image as image;

class IndexController extends Controller {
	
    public function index(){
		// $path = './upload';
		// var_dump($path);
		// if(!is_dir($path)){
			// var_dump(mkdir($path));
		// }
    }
	
	
	public function _empty($name){
		echo __ACTION__;
		exit("你错了");
	}

}