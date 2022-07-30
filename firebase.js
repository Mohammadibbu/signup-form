const firebaseConfig = {
  apiKey: "AIzaSyBbRbW4WjjNg0LOrtl-20zmPshTfyyvqzQ",
  authDomain: "send-a-feedback.firebaseapp.com",
  databaseURL: "https://send-a-feedback-default-rtdb.firebaseio.com",
  projectId: "send-a-feedback",
  storageBucket: "send-a-feedback.appspot.com",
  messagingSenderId: "691104972009",
  appId: "1:691104972009:web:7510b3de69459bd5260478"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var contactformDB=firebase.database().ref("form");

document.getElementById('form').addEventListener('submit',validate);


document.getElementById("submitbtn").addEventListener("click",function(event){event.preventDefault()}); 
function showpassword() {
  var x = document.getElementById("pwd");
  var y=document.getElementById("pwd_2")
  if (x.type === "password") {
    x.type = "text";

  }else {
    x.type = "password";
  }

  if(y.type === "password"){
    y.type ="text"
  }
   else {
    y.type = "password";
  }
}
 function validate() {

  // body...

var name=document.getElementById('name').value;
var mailid=document.getElementById('mail').value;
var phno=document.getElementById('phno').value;
var pwd=document.getElementById('pwd').value;
var confirm_pwd=document.getElementById('pwd_2').value;



const save= (name,mailid,phno,pwd)=>{
  var newform=contactformDB.push();
  newform.set({
    name :name,
    Mailid:mailid,
    PhoneNumber: phno,
    password: pwd,
  });
  };

 var mail_check=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailid);
  var name_check=/^[A-Za-z]+$/.test(name);
if (pwd!=confirm_pwd) {
  var same=document.getElementById("check_same");
      document.getElementById('b5').style.color="red"; 
        same.style.display = "block" ;
         document.getElementById("pwd_2").style.border="4px solid red";
         pwd='';
       
      setTimeout(()=>{same.style.display = "none" ;document.getElementById("pwd_2").style.border="2px solid  #2F96EF"; document.getElementById('b5').style.color="blue";document.getElementById("pwd_2").focus()},2500);
   
}else if(name === "" || name.length<3  || name_check==false) {
  var n=document.getElementById("check_uname");
   document.getElementById('b1').style.color="red"; 
        n.style.display = "block" ;
         document.getElementById("name").style.border="4px solid red";
          name='';
      setTimeout(()=>{n.style.display = "none";document.getElementById("name").style.border="2px solid  #2F96EF"; document.getElementById('b1').style.color="blue";document.getElementById("name").focus()},2500);
  
}else if(mailid==="" || mail_check==false){
  var mail=document.getElementById("check_mailid");
      document.getElementById('b2').style.color="red"; 
        mail.style.display = "block" ;
         document.getElementById("mail").style.border="4px solid red";
          mailid='';
      setTimeout(()=>{mail.style.display = "none" ;document.getElementById("mail").style.border="2px solid  #2F96EF"; document.getElementById('b2').style.color="blue";document.getElementById("mail").focus()},1500);

}else if(phno==""|| phno.length<10||phno.length>10||isNaN(phno)){
  var ph=document.getElementById("check_mno");
      document.getElementById('b3').style.color="red"; 
        ph.style.display = "block" ;
         document.getElementById("phno").style.border="4px solid red";
          phno='';
      setTimeout(()=>{ph.style.display = "none" ;document.getElementById("phno").style.border="2px solid  #2F96EF"; document.getElementById('b3').style.color="blue";document.getElementById("phno").focus()},1500);

}else if(pwd===""){
  var p=document.getElementById("check_pwd");
      document.getElementById('b4').style.color="red"; 
        p.style.display = "block" ;
         document.getElementById("pwd").style.border="4px solid red";
        pwd='';
      setTimeout(()=>{p.style.display = "none" ;document.getElementById("pwd").style.border="2px solid  #2F96EF"; document.getElementById('b4').style.color="blue";document.getElementById("pwd").focus()},1500);

}else if(pwd.length<6){
  var p=document.getElementById("check_pwdlen");
      document.getElementById('b4').style.color="red"; 
        p.style.display = "block" ;
         document.getElementById("pwd").style.border="4px solid red";
         pwd='';
      setTimeout(()=>{p.style.display = "none" ;document.getElementById("pwd").style.border="2px solid  #2F96EF"; document.getElementById('b4').style.color="blue";document.getElementById("pwd").focus()},1500);
}

else{


 document.getElementById("success").style.display="block";
 setTimeout(()=>{document.getElementById("success").style.display="none";},5000);

console.log(name,pwd,phno,pwd)
 


 save(name,mailid,phno,pwd);
 document.getElementById("form").reset();


 
}
}
//   if (uName.value == null|| uName.value == "" ||uName.value == isNaN) {
//    document.getElementById('b1').style.color="red"; 
//         error_name.style.display = "block" ;
//          uName.style.border="4px solid red";
       
//       setTimeout(()=>{error_name.style.display="none";uName.style.border="2px solid  #2F96EF"; document.getElementById('b1').style.color="blue";uName.focus()},2000);
  
//     return false;
// }
// else if (pass_word.value == null|| pass_word.value == "") {
//     document.getElementById('b2').style.color="red";  
//         error_pwd.style.display = "block" ;
//          pass_word.style.border="4px solid red";
       
//       setTimeout(()=>{error_pwd.style.display="none";pass_word.style.border="2px solid  #2F96EF"; document.getElementById('b2').style.color="blue";pass_word.focus()},2000);
  
//     return false;

// }
// else if (pass_word.value.length<6){
//    document.getElementById('b2').style.color="red";
//       error_pwdlen.style.display = "block" ;
//        pass_word.style.border="4px solid red";
       
//       setTimeout(()=>{error_pwdlen.style.display="none";pass_word.style.border="2px solid  #2F96EF"; document.getElementById('b2').style.color="blue";pass_word.focus()},2000);
  
//     return false;
// }
// }