<?php
namespace Admin\Model;
use Think\Model;
class UserModel extends Model {
	
	protected $trueTableName  = 'money';
	
	public function userInfo(){
		// $data['name'] = '兰玉平';
		// $data['sex'] = '1';
		// $data['dobule'] = 7000;
		// $data['age'] = 25;
		return $this->getByName('蓝占桥');
	}

}