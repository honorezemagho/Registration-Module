function nameValidation()
{
    var name = document.getElementById('name').value;
     
    if(name==''){
            document.getElementById('nameError').innerHTML="* Name Field cannot be empty";
            document.getElementById('nameError').style.color='red';
            return false;
    }
    if(!name.match(/^[a-zA-Z]+[a-z A-Z]+$/g))
        {
           
            document.getElementById('nameError').innerHTML="* Only Alphabates";
            document.getElementById('nameError').style.color='red';
            return false;
        }
    
    else
     {
            document.getElementById('nameError').innerHTML="Good";
            document.getElementById('nameError').style.color='green';
     }
    
}

function emailValidation()
{
    var email = document.getElementById('email').value;  
    if(email==''){
            document.getElementById('emailError').innerHTML="* Email Field cannot be empty";
            document.getElementById('emailError').style.color='red';
            return false;
    }
    if(!email.match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.(com|org|in|gov)$/))
        {
            document.getElementById('emailError').innerHTML="* Invalid Email";
            document.getElementById('emailError').style.color='red';
            return false;
        }else{
            document.getElementById('emailError').innerHTML="Good";
            document.getElementById('emailError').style.color='green';
        }
}


function mobileValidation()
{
    var mobile = document.getElementById('mobile').value;
    if(!mobile.match(/^[0-9]{10}$/))
        {
            document.getElementById('mobileError').innerHTML="* Only 10 Digits Allowed" ; 
            document.getElementById('mobileError').style.color='red';
            return false;
        }
    else 
        {
            document.getElementById('mobileError').innerHTML="Good" ; 
            document.getElementById('mobileError').style.color='green';
        }

    
}

function passValidation()
{
     var pass = document.getElementById('password').value;
     
    if(pass=='')
        {
            document.getElementById('passError').innerHTML='* Password Cannot be empty';
            document.getElementById('cpassword').disabled=true;
            document.getElementById('passError').style.color='red';
            return false;
        }
    if(!pass.match(/[a-z]/g)){
        document.getElementById('passError').innerHTML='* LowerCase Character missing';
        document.getElementById('passError').style.color='red';
        return false;
    }
    if(!pass.match(/[A-Z]/g)){
        document.getElementById('passError').innerHTML='* UpperCase Character missing';
        document.getElementById('passError').style.color='red';
        return false;
    }
    if(!pass.match(/[0-9]/g)){
        document.getElementById('passError').innerHTML='* Numeric Character missing';
        document.getElementById('passError').style.color='red';
        return false;
    }
    if(!pass.match(/[@+_.?]/g))
        {
            document.getElementById('passError').innerHTML='* password must include @+_.? (atleast one)';
            document.getElementById('passError').style.color='red';
            return false;
        }
    
    else if(pass.length<8)
    {
        document.getElementById('passError').innerHTML='* password must be 8 character long';
        document.getElementById('passError').style.color='red';
        return false;
    }
    else{
        document.getElementById('passError').innerHTML='Good';
        document.getElementById('passError').style.color='green';
        document.getElementById('cpassword').disabled=false;
    }
    
}

function passConfirm()
{
    var cpass= document.getElementById('cpassword').value;
    var pass= document.getElementById('password').value;
    
    
    if(cpass.localeCompare(pass)===0)
    {
        document.getElementById('confError').innerHTML='Password Matched';
        document.getElementById('confError').style.color='green';  
       
    }
    else{
        document.getElementById('confError').innerHTML='* password Does not match';
        document.getElementById('confError').style.color='red';  
        return false;
    }
}

function imgValidation()
{
    var imgPath = document.getElementById('img').value;
    if(imgPath=='')
        {
            document.getElementById('ImgError').innerHTML='* Select the Image';
            document.getElementById('ImgError').style.color='red';  
            return false;
        }
    else{
        var ext = imgPath.substring(imgPath.lastIndexOf('.')+1).toLowerCase();
        if(ext=='jpg'||ext=='jpeg')
            {   
                 document.getElementById('ImgError').innerHTML='Good';
                document.getElementById('ImgError').style.color='green';  
                return true;
            }
        else
        {
            document.getElementById('ImgError').innerHTML='* Only Jpg or jpeg  image allowed';
            document.getElementById('ImgError').style.color='red';  
            return false;
        }
    }
   
}

function validateForm()
{
    
    if(nameValidation()==false || emailValidation()==false || mobileValidation()==false || passValidation()==false || passConfirm()==false ||imgValidation()==false)
        {   
            
            return false;
            
        }
    else{
        return true;
    }
    
   
}

