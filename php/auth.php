<?php
if(isset($_REQUEST['name'])){
    $email = $_REQUEST['name'];
    $password = $_REQUEST['password'];

    $db = mysqli_connect("sql6.freemysqlhosting.net","sql6510524","sql6510524","sql6510524");

    if ($db->connect_errno) {
      echo "Failed to connect to MySQL: " . $db->connect_error;
      exit();
    }

    $sql = "INSERT INTO `users` (`user_id`, `email`, `password`) VALUES ('""', '".$name."', '".$password"')";

    $result = mysqli_query($db,$sql);

    if($result==true){
        echo "Successfully inserted";
    }
}