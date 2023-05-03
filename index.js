let firstName = document.getElementById("name");
let lastName = document.getElementById("lastName");
let mail = document.getElementById("email");
let sub = document.getElementById("subject");
let textarea = document.getElementById("textarea");
let checkname = false;
let checklName = false;
let checkmail = false;

function validation() {
    /*------  First Name -------*/
    if (firstName.value.trim() === '') {
        checkname = false;
        document.getElementById("name1").innerHTML = "* First Name can not be Empty.";
        firstName.style="border:2px solid red";
    }else
    {
        checkname = true;
        document.getElementById("name1").innerHTML = "";
        firstName.style="border:2px solid green";
    }

     /*------  last Name -------*/
    if(lastName.value){
        checkname = true;
        //document.getElementById("lastName").innerHTML = "";
        lastName.style="border:2px solid green";
    }

    /*------ Email@ ------ */
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.value.trim() == '')
    {
        //alert("helloooooooooo");
        checkmail = false;
        document.getElementById("mail").innerHTML = "*Email Can Not be Empty.";
        mail.style="border:2px solid red";
    }
    else if(mail.value.match(mailformat)) {
        checkmail = true;
        document.getElementById("mail").innerHTML = "";
        mail.style="border:2px solid green";
     }
    else{
        checkmail = false;
         document.getElementById("mail").innerHTML = "* Enter valid Email.";
         mail.style="border:2px solid red";
    }

    /*------ Subject ------ */
    if(sub.value.trim())
    {
        //document.getElementById("sub1").innerHTML = "";
        sub.style="border:2px solid green";
    }

     /*------ textArea....! ------ */
     if(textarea.value.trim())
     {
         //document.getElementById("textarea1").innerHTML = "";
         textarea.style="border:2px solid green";
     }

}