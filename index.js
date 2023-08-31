/*------------------------------------
    Navbar jQuery Code..
------------------------------------*/
$(document).ready(function(){
    
    $('.js-scroll-triger').click(function(){
        $('.navbar-collapse').collapse('hide');
    });

});

// go  to top  button Function(s).
let mybutton = document.querySelector(".Top");

// when the user scroll page down 100px from the top of the document  , then show the button.
window.onscroll = function(){scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

/*------------------------------------
  Form Validation Code Satrating.. 
-------------------------------------*/

let firstName = document.getElementById("name");
let lastName = document.getElementById("lastname");
let mail = document.getElementById("Email");
let subject = document.getElementById("subject");
let text = document.getElementById("textarea");
let checkname = true;
let checkmail = true;

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

    /*-----------------------------
      lastName Validation
    ------------------------------*/
    if (lastName.value.trim()) {
        document.getElementById("lastname").innerHTML = "";
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
         //mail.style="border:2px solid red";
    }

    /*-----------------------------
      Subject  Validation
    ------------------------------*/
    if (subject.value.trim()) {
        document.getElementById("subject").innerHTML = "";
        subject.style="border:2px solid green";
    }

    /*-----------------------------
      Subject  Validation
    ------------------------------*/
    if (text.value.trim()) {
        document.getElementById("textarea").innerHTML = "";
        text.style="border:2px solid green";
    }

     /************************
        check return
      ***********************/
     if(checkname == true && checkmail == true)
     {
        return true;
     }
     else
     {
        return false;
     }

}
