<?php
    
    function __autoload($className)
    {
        include_once "$className.php";
    }
    
    extract($_POST);
    
    $user = new Users();
    
    if(isset($_POST['register']))
    {   
        $date = date("Y/m/d");
        
        $micSec = microtime();
        $micSec = explode('.',$micSec);
        $micSec = str_replace(' ','',$micSec); 
       
        $imgName = $umobile.$micSec[1];
       
       
        move_uploaded_file($_FILES['uimg']['tmp_name'],"image/$imgName.jpg");
        
        $query = "INSERT INTO register (name,email,mobile,password,img,date) values('$uname','$uemail','$umobile','$upassword','$imgName','$date')";
        
        if($user->insert($query))
        {
            $user->url('../index.php?msg=success');
            exit();
        }
        else
        {
            $user->url("index.php/msg=failed");
        }
    }
    
    

?>