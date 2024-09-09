<?php

  $con=mysqli_connect("localhost",'jidar','sdipfuygahw2znljbcve',"jidar");
 mysqli_select_db($con,"jidar");
 mysqli_query($con,"SET charset UTF8");
class Database{
    public static function config(){
        date_default_timezone_set('Africa/Cairo');
        $dbhost = 'localhost';
        $dbuser   = 'jidar';
        $dbpassword = 'sdipfuygahw2znljbcve';
        $database = "jidar";
		
       
     
         //   date_default_timezone_set( $_SESSION['date_zone']);
       


        try
        {
            $DB_con = new PDO("mysql:host={$dbhost};dbname={$database}",$dbuser,$dbpassword);
            $DB_con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $DB_con->query("SET names utf8; SET CHARACTER SET utf8; SET SESSION collation_connection ='utf8_bin' ; SET SQL_BIG_SELECTS=1 ");
            return $DB_con;
        }
        catch(PDOException $e)
        {
            return $e->getMessage();
        }
    }
}


