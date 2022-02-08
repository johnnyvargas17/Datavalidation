

function Phonenumberoutput(){
    inpField = document.getElementById("myInput").value;
    var isphone = /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/;
    result = isphone.test(inpField);
    if (result == true) {
        texts = "Phone number submitted."
        document.getElementById("Phonenumbermessage").innerHTML = texts;
        document.getElementById("Phonenumbermessage").style.color = "green"
    }
    else {
        texts = "Please enter only numbers, and in the correct format (555-555-5555 (555)555-5555)"
        document.getElementById("Phonenumbermessage").innerHTML = texts;
        document.getElementById("Phonenumbermessage").style.color = "red";

        inpField.value = "";
    }
    
}



function validateCardNumber(){
    inpField = document.getElementById("CCNumbers").value;
    var visaregexs = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercard = /^(?:5[1-5][0-9]{14})$/;
    var discovercard = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    if (visaregexs.test(inpField) == true || mastercard.regexs.text(inpField) == true || discovercard.regexs.text(inpField) == true){
        texts = "Valid Credit Card Submitted."
        document.getElementById("CreditCardNumberMessage").innerHTML = texts;
        document.getElementById("CreditCardNumberMessage").style.color = "green"
    }

    else {
        texts = "Please enter a valid credit card number."
        document.getElementById("CreditCardNumberMessage").innerHTML = texts;
        document.getElementById("CreditCardNumberMessage").style.color = "red";


    }
}

function Age(){
    let x = document.getElementById("Age").value;
    if (isNaN(x)){
       document.getElementById("AgeErrorMessage").innerHTML = "Please enter a number, not a string.";
       document.getElementById("AgeErrorMessage").style.color = "red";
    }
    else if (x < 16 || x > 100) {
        document.getElementById("AgeErrorMessage").innerHTML = "Invalid input. Too young or too old.";
        document.getElementById("AgeErrorMessage").style.color = "red";
        
    }
    else  {
        document.getElementById("AgeErrorMessage").innerHTML = "Age submitted";
        document.getElementById("AgeErrorMessage").style.color = "green";
    }

}




function State(){
    texts = "State submitted."
    document.getElementById("Statemessage").innerHTML = texts;
    document.getElementById("Statemessage").style.color = "green";
}