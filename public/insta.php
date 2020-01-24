<?php
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    // should do a check here to match $_SERVER['HTTP_ORIGIN'] to a
    // whitelist of safe domains
    //header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header("Access-Control-Allow-Origin:*");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

}

// insta keys
$instagram_business_id = ''; 
$access_token = '';
$target_user = '';

//for your own account
if (isset($_GET['after'])) {
    $query = 'name,media.after('.htmlspecialchars($_GET['after']).').limit(1000){caption,like_count,comments_count,media_url,permalink,timestamp,username}&access_token='.$access_token;
}else{
    $query = 'name,media{caption,like_count,comments_count,media_url,permalink,timestamp,username}&access_token='.$access_token;
}

$instagram_api_url = 'https://graph.facebook.com/v5.0/';
$target_url = $instagram_api_url.$instagram_business_id."?fields=".$query;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $target_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$instagram_data = curl_exec($ch);
curl_close($ch);

echo $instagram_data;
exit;