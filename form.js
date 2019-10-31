function validateForm(form){
  //  var username=document.getElementById("username");
    //alert(username.value);
   // document.getElementById("username").value;
   var uname=form.username.value;
   var mail=form.email.value;
   var num=form.email.value;
   var emailre=/\S+@\S+\.\S+/;
   var phnumber=/(6|7|8|9)\d{9}$/;

   if(uname.length<5){
       alert("not a good address");
       return false;
   }
   else if(emailre.test(mail)==false){
       alert("please enter a valid email");
       return false;
    }

   else if(phnumber.test(num)==false){
          alert("please entr a valid ph. num.");
          return false;
       }
}