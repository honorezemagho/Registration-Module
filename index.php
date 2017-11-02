<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>LogIn/Registration</title>
    <link rel="stylesheet" href="asset/css/bootstrapCSS.css">
    <link rel="stylesheet" href="asset/css/customCSS.css">
</head>
<body>
    <div class="container login">
        <div class="row">
        <?php 
            if(isset($_GET['msg']) && ($_GET['msg']=='success'))
            {
                ?><script>alert("Successfuly Register");</script>
                <?php
            }
            else if(isset($_GET['msg']) && ($_GET['msg']=='failed'))
            {
                ?><script>alert("Oops ... !Something Went Wrong. Registration Failed");</script><?php
            }
                        
            ?>
            <div class="col-md-2">
            </div>
            <div class="col-md-8 registration">
               <header><h3 class="heading">Register</h3></header> <br>
               <form method="post" action="public/register.php" enctype="multipart/form-data" onsubmit="return validateForm()">
                   
                    <input class="form-control" name="uname" type="text" placeholder="YourName" id="name" required onkeyup="nameValidation()">
                    <span id="nameError"></span><br><br>
                    <input class="form-control" name="uemail" type="email" placeholder="Email"  id="email" required onkeyup="emailValidation()">
                    <span id="emailError"></span><br><br>
                    
                    <input class="form-control" name="umobile" type="text" maxlength="10" placeholder="Mobile Number" id="mobile" onkeyup="mobileValidation()" required>
                    <span id="mobileError"></span><br><br>
                    
                    <input class="form-control" name="upassword" type="password" placeholder="Enter Password"   id="password" onkeyup="passValidation()" required>
                    <span id="passError"></span><br><br>
                    
                    <input class="form-control" name="cpassword" type="password" placeholder="Confirm Password" id="cpassword" onkeyup="passConfirm()" required >
                    <span id="confError"></span><br><br>    
                    
                    <label>Image</label><input name="uimg" class="form-control" type="file" id="img" onchange="imgValidation()">
                    <span id="ImgError" ></span><br><br>
                    
                    <input class="form-control btn-success" name="register" type="submit" value="Register" required >
                    
               </form>
                
                
            </div>
             <div class="col-md-2">
            </div>

            

        </div>        
        
        
    </div>





<script src="asset/js/jq.js"></script>    
<script src="asset/js/bootstrapJS.js"></script>    
<script src="asset/js/validation.js"></script>
</body>
</html>