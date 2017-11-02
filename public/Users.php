<?php
    
	class Users{
        
         private $serverName='localhost';
         private $userName='root';
         private $password='';
         private $dbName='oops';
         public $conn='';
         
        public function __construct()
        {
            $this->conn = new mysqli($this->serverName,$this->userName,$this->password,$this->dbName);
            
            if($this->conn->connect_error)
            {
                die("Connection Faileds ".$this->conn->connect_error);
                exit();
            }
           
        }
        
   
        public function insert($data)
        {   
            
            if($this->conn->query($data)===TRUE)
            {
                return true;
            }
            else
            {
                 return false;
            }
            
        }
        
        
        public function url($url)
        {
            header("location:".$url);
        }
        
    }

?>