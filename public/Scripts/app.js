/*
 COMP308-W2019-Assignment2 (MEANPortfolio)
 Student Name: Heeyeong Kim
 Student Number: 300954759
 Date: 03/30/2019
*/

// IIFE -- Immediately Invoked Function Express
(function(){
    function Start() {
        console.log(`%c App Started...`, "font-size: 20px; color: blue; font-weight: bold;");
    }

    window.addEventListener("load", Start);
})();

// capture contact form informaion
function sendContactInfo(){
     var firstName = document.contactForm.txtFirstName.value;
     var lastName = document.contactForm.txtLastName.value;
     var phoneNum = document.contactForm.txtPhoneNum.value;
     var email = document.contactForm.txtEmail.value;
     var msg = document.contactForm.txtMsg.value;

     var message = "name: " + firstName + " " + lastName
                + "\nphone: " + phoneNum + "\nemail: " + email + "\nmsg: " + msg
                + "\n\nWould you like to send this message?";

     if(confirm(message)){
        // redirect to homepage
        window.location.replace("/");
     }else{
        // cancel
     }
}
