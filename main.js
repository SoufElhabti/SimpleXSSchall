

   function submit(){
    var email = document.getElementById("email").value ;
    var maname = document.querySelector("h1");
    
    var name = email.split("@");
    var S = "";
    eval(`S = "welcome ${name}"`);
    
    maname.innerText = S ;
   }
   