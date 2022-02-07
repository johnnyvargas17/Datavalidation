function Phonenumber(){
    var inpField = document.getElementById("myInput");
    var l = inpField.value.length;
    var key = event.inputType;
    var toDelete = (key == 'deleteContentBackward' || key == 'deleteContentForward') ? 'delete' : 'keep';
    //deleteContentBackward and deleteContentForward are obtained when user hits backspace or delete keys. To get extra info from inputType, check: InputEvent https://www.w3schools.com/jsref/obj_inputevent.asp
    if (toDelete === 'delete') {
        alert('Please, enter your number again.');
        // clears the whole input field
        inpField.value = "";
    }
    // then, checks the inputs to add the required pattern. Also helps the user to check if number is typed correctly
    switch (l) {
        case 1:
        inpField.value = "(" + inpField.value;
        break
        case 4:
        inpField.value = inpField.value + ") ";
        break
        case 9:
        inpField.value = inpField.value + " - ";
        break
        case 17:
        // prevents user from typing more numbers than necessary:
        inpField.value = inpField.value.slice(0, l - 1)
}
}


function Age(){
    let x = document.getElementById("Age").value;
    let text;
    if (isNaN(x) || x < 16 || x > 100) {
        text = "Invalid input. Too young or too old.";
        document.getElementById("AgeErrorMessage").innerHTML = text;
        document.getElementById("AgeErrorMessage").style.color = "red";
        
    } else {
        text = "Age submitted";
        document.getElementById("AgeErrorMessage").innerHTML = text;
        document.getElementById("AgeErrorMessage").style.color = "green";
    }

}


//function CreditCardNumber(){
 //   document.getElementById("CreditCardNumberMessage").innerHTML = "Credit Card Number Submitted.";
 //   document.getElementById("CreditCardNumberMessage").style.color = "green";
//}

function cc_format(ccid,ctid) {
    // supports Amex, Master Card, Visa, and Discover
    // parameter 1 ccid= id of credit card number field
    // parameter 2 ctid= id of credit card type field

    var ccNumString=document.getElementById(ccid).value;
    ccNumString=ccNumString.replace(/[^0-9]/g, '');
    // mc, starts with - 51 to 55
    // v, starts with - 4
    // dsc, starts with 6011, 622126-622925, 644-649, 65
    // amex, starts with 34 or 37
    var typeCheck = ccNumString.substring(0, 2);
    var cType='';
    var block1='';
    var block2='';
    var block3='';
    var block4='';
    var formatted='';

    if  (typeCheck.length==2) {
        typeCheck=parseInt(typeCheck);
        if (typeCheck >= 40 && typeCheck <= 49) {
            cType='Visa';
        }
        else if (typeCheck >= 51 && typeCheck <= 55) {
            cType='Master Card';
        }
        else if ((typeCheck >= 60 && typeCheck <= 62) || (typeCheck == 64) || (typeCheck == 65)) {
            cType='Discover';
        }
        else if (typeCheck==34 || typeCheck==37) {
            cType='American Express';
        }
        else {
            cType='Invalid';
        }
    }

    // all support card types have a 4 digit firt block
    block1 = ccNumString.substring(0, 4);
    if (block1.length==4) {
        block1=block1 + ' ';
    }

    if (cType == 'Visa' || cType == 'Master Card' || cType == 'Discover') {
        // for 4X4 cards
        block2 = ccNumString.substring(4, 8);
        if (block2.length==4) {
            block2=block2 + ' ';
        }
        block3 = ccNumString.substring(8, 12);
        if (block3.length==4) {
            block3=block3 + ' ';
        }
        block4 = ccNumString.substring(12, 16);
    }
    else if (cType == 'American Express') {
        // for Amex cards
        block2 =  ccNumString.substring(4, 10);
        if (block2.length==6) {
            block2=block2 + ' ';
        }
        block3 =  ccNumString.substring(10, 15);
        block4='';
    }
    else if (cType == 'Invalid') {
        // for Amex cards
        block1 =  typeCheck;
        block2='';
        block3='';
        block4='';
        alert('Invalid Card Number');
    }

    formatted=block1 + block2 + block3 + block4;
    document.getElementById(ccid).value=formatted;
    document.getElementById(ctid).value=cType;
}
function Names(){

}

function State(){

}