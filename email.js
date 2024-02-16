var visible = false;
function showOrHideEmail(){
  if (visible){
    document.getElementById('email').innerHTML=" Show my Email";
    visible=false;
  }
  else{
    var myEmail="<a href='mailto:payyavsa" +"@"+
                "mail.uc.edu'>payyavsa"+"@"+"mail.uc.edu</a>";
    document.getElementById('email').innerHTML=myEmail;
    visible= true;
  }
}