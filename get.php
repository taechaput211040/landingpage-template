<?php 

	//   94459294c0bc2cf409b04a5cc521b638 9f5c314aad769769873d8bd408b11c3c
	try {
		if($_GET["code_name"]){
		$code_name = $_GET["code_name"];
	}else{
		$code_name = "9f5c314aad769769873d8bd408b11c3c";
	}
		$url = 'https://zamba777.com/public/api/Webinfomation?code_name='.$code_name;
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url); 
		// curl_setopt($ch, CURLOPT_HTTPHEADER, array("Authorization: Bearer " . $token));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0); // On dev server only!
		$result = curl_exec($ch);
		$http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		// print_r($result); 
		// $myJSON = json_encode($result);
		http_response_code($http_status);
		echo $result;
		curl_close($ch);
		
	} catch (Exception $e) {
		echo "Token Error";
	}
	
 ?>