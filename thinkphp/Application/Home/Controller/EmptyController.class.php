<?php 
namespace Home\Controller;
use Think\Controller;

class EmptyController extends Controller{
	
		public function index(){
			$city = CONTROLLER_NAME;
			echo $city;
		}
	
}

?>