let signup = document.getElementById("signupBtn")
let signin = document.getElementById("signinBtn")
let nameField = document.getElementById("nameField")
let title = document.getElementById("title")
let inputfiled = document.getElementsByClassName("input-field")
let span = document.getElementById("hdn")





signin.onclick = function(){
    nameField.style.maxHeight = "0"
    title.innerHTML = "Sign In"
    signin.style.background = "#eaeaea"
    signin.style.color = "black"
    signup.style.background = " #3c00a0"
    signup.style.color = " #fff"
    buttonvalidation2()
    passwordvalidation2()
}
signup.onclick = function(){
    nameField.style.maxHeight = "60px"
    title.innerHTML = "Sign Up"
    signup.style.background = "#eaeaea"
    signup.style.color = "black"
    signin.style.background = " #3c00a0"
    signin.style.color = " #fff"
    buttonvalidation()
    passwordvalidation()

}

function namevalidation() {
    
let Name = document.getElementById("Name")
let errname = document.getElementById("err")

    if ( Name.value.trim() == "") {
        errname.innerHTML = "enter full name"
        return false;
    }else{
        errname.innerHTML = ""
        return true;
    }
}
function emailvalidation() {
   
let Email = document.getElementById("Email")
let erremail = document.getElementById("err-email")
 let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (Email.value.trim() ==  "") {
        erremail.innerHTML = "enter full email"
        return false;
    }else if (!Email.value.match(regEx)){
        erremail.innerHTML = 'eamil not currect';
        return false;
    }else{
        erremail.innerHTML = ""
        return true;
    }   

}
function passwordvalidation(){
          
let password = document.getElementById("Password")
let errpass = document.getElementById("errpass")

    if ( password.value.trim() == "") {
        errpass.innerHTML = "enter full password"
      return false;
    }else if(password.value.length < 6 ){
        errpass.innerHTML = "password must 6 characters"
        return false;
    }else{
        errpass.innerHTML = ""
        return true;
    }
   

}



function buttonvalidation () {
    if (!namevalidation()||!emailvalidation()) {
        console.log("sucess");
    }
}
function namevalidation2() {
    
    let Name = document.getElementById("Name")
    let errname = document.getElementById("err")
    
        if ( Name.value.trim() == "") {
            errname.innerHTML = ""
            return false;
        }
    }
    function emailvalidation2() {
   
        let Email = document.getElementById("Email")
        let erremail = document.getElementById("err-email")
         let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (Email.value.trim() ==  "") {
                erremail.innerHTML = "enter full email"
                return false;
            }else if (!Email.value.match(regEx)){
                erremail.innerHTML = 'eamil not currect';
                return false;
            }else{
                erremail.innerHTML = ""
                return true;
            }   
        
        }
        function passwordvalidation2(){
          
            let password = document.getElementById("Password")
            let errpass = document.getElementById("errpass")
            
                if ( password.value.trim() == "") {
                    errpass.innerHTML = "enter full password"
                  return false;
                }else if(password.value.length < 6 ){
                    errpass.innerHTML = "password must 6 characters"
                    return false;
                }else{
                    errpass.innerHTML = ""
                    return true;
                }
               
            
            }
            function buttonvalidation2 () {
                if (!namevalidation2()) {
                    console.log("sucess2");
            }if(!emailvalidation2()){}
            }