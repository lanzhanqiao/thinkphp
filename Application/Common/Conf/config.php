<?php
return array(
	//'配置项'=>'配置值'
	
	'LOAD_EXT_CONFIG' => array('USER'=>'user'),
	
	//路由
	'URL_ROUTER_ON'	  => true,
	'URL_ROUTE_RULES' => array(
		'login/:id'	=>	array('index/index','user=name&age=25',array('callback'=>'checkFun'))
	),
	
	//伪静态
	'URL_DENY_SUFFIX' => 'pdf|ico',
	
	
	
	//数据库配置
	'db_type'	=>	'mysql',
	'db_host'	=>	'127.0.0.1',
	'db_name'	=>	'xdl2',
	'db_port'	=>	'3306',
	'db_user'	=>	'root',
	'db_pwd'	=>	'',
	'db_charset'	=>	'utf8',
	
	
	//默认访问的模块
	'module_allow_list' => array('Home','Admin','test'),
	'default_module' => 'Home',
	
	//默认不能直接访问admin模块
	'url_module_map' => array('test'=>'admin'),
	
	//默认成功|失败的模板
	'TMPL_ACTION_ERROR' => THINK_PATH.'Tpl/dispatch_jump.tpl',
	'TMPL_ACTION_SUCCESS' => THINK_PATH.'Tpl/dispatch_jump.tpl',
	
	//模板标签
	//'TMPL_L_DELIM'=>'<{',
	//'TMPL_R_DELIM'=>'}>',
	
);