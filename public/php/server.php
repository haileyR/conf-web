<?php
// header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
// header("Access-Control-Allow-Origin", "http://http://127.0.0.1:8080");
// header("Access-Control-Allow-Methods", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
// header("Access-Control-Allow-Headers", "GET, PUT, POST, OPTIONS, DELETE, X-XSRF-TOKEN");

	$data = file_get_contents("php://input");
	$objData = json_decode($data);
	$myServer		= "mssql.ksea.org";
	$myUser			= "";
	$myPass			= "";
	$myDB			= "kseadb_member";
	console.log($first_name);
	$dbhandle = mssql_connect($myServer, $myUser, $myPass) or die("Couldn't connect to SQL Server on $myServer"); 
	$selected = mssql_select_db($myDB, $dbhandle) or die("Couldn't open database $myDB");
	$sql = "insert into ukc_2016_abstracts(first_name, last_name, email) values('HanGyeol', 'Gyeol', 'test@test.com');";
	$qry_res = mssql_query($sql) or die("guest-inserting query failed");
	$res = mysql_fetch_assoc($qry_res);
	echo (mssql_query($sql) or die("guest-inserting query failed"););
	
	mssql_close($dbhandle);

	if ($res['cnt'] == 0) {
	    $qry = 'INSERT INTO users (name,pass,email) values ("' . $usrname . '","' . $upswd . '","' . $uemail . '")';
	    $qry_res = mysql_query($qry);
	    if ($qry_res) {
	        $arr = array('msg' => "User Created Successfully!!!", 'error' => '');
	        $jsn = json_encode($arr);
	        print_r($jsn);
	    } else {
	        $arr = array('msg' => "", 'error' => 'Error In inserting record');
	        $jsn = json_encode($arr);
	        print_r($jsn);
	    }
	} else {
	    $arr = array('msg' => "", 'error' => 'User Already exists with same email');
	    $jsn = json_encode($arr);
	    print_r($jsn);
	}
?>