const firstName=document.querySelector("#firstName");
const firstNameErr=document.querySelector("#firstNameErr");
const firstNameEmpty=document.querySelector("#firstNameEmpty")
const lastName=document.querySelector("#lastName");
const lastNameErr=document.querySelector("#lastNameErr");
const lastNameEmpty=document.querySelector("#lastNameEmpty");
const email=document.querySelector("#email");
const emailErr=document.querySelector("#emailErr");
const emailEmpty=document.querySelector("#emailEmpty");
const contactNumber=document.querySelector("#contactNumber");
const contactErr=document.querySelector("#contactErr");
const contactEmpty=document.querySelector("#contactEmpty");
const pinCode=document.querySelector("#pinCode");
const pinCodeErr=document.querySelector("#pinCodeErr");
const pinCodeEmpty=document.querySelector("#pinCodeEmpty");
const cardNum=document.querySelector("#cardNumber");
const cardNumErr=document.querySelector("#cardNumErr");
const cardNumEmpty=document.querySelector("#cardNumEmpty");
const cardExpiry=document.querySelector("#cardExpiry");
const cardExpiryErr=document.querySelector("#cardExpiryErr");
const cardExpiryEmpty=document.querySelector("#cardExpiryEmpty");
const cvv=document.querySelector("#cvv");
const cvvErr=document.querySelector("#cvvErr");
const cvvEmpty=document.querySelector("#cvvEmpty");


//various patterns
let namePattern=/^[a-zA-Z]{1,30}$/;
let emailPattern=/^([a-z A-Z 0-9 _\.\-])+\@(([a-z A-Z 0-9\-])+\.)+([a-z A-z 0-9]{3,3})+$/;
let contactNumberPattern=/^[789]\d{9}$/;
let pinCodePattern=/^[1-9][0-9]{5}$/;
let cardNumPattern=/^[1-9][0-9]{15}$/;
let cardExpiryPattern=/^[1-9][0-9]{3}$/;
let cvvPattern=/^[0-9]{3,4}$/;
let currentYear=new Date().getFullYear()

   
//error display handler - if the value is empty or invalid
const errorDisplayHandler=(valid,currentValue,Err,Empty)=>{
    if(currentValue)
    {
        valid && Err.classList.add("display");
        !valid && Err.classList.remove("display");
        Empty.classList.add("display");
    }
    else
    {
        Empty.classList.remove("display");
        Err.classList.add("display");
    }
}

//first name check handler
const firstNameCheckHandler=(e)=>
{
    let currentValue=e.target.value;
    let valid=namePattern.test(currentValue);
    errorDisplayHandler(valid,currentValue,firstNameErr,firstNameEmpty);
}
//last name check handler
const lastNameCheckHandler=(e)=>
{
    let currentValue=e.target.value;
    let valid=namePattern.test(currentValue);
    errorDisplayHandler(valid,currentValue,lastNameErr,lastNameEmpty);
}
//email check handler
const emailCheckHandler=(e)=>
{
    let currentValue=e.target.value;
    let valid=emailPattern.test(currentValue);
    errorDisplayHandler(valid,currentValue,emailErr,emailEmpty);
}
//contact number check handler
const contactCheckHandler=(e)=>
{
    let currentValue=e.target.value;
    let valid=contactNumberPattern.test(currentValue);
    errorDisplayHandler(valid,currentValue,contactErr,contactEmpty);
}
//pin code check handler
const pinCodeCheckHandler=(e)=>
{
    let currentValue=e.target.value;
    let valid=pinCodePattern.test(currentValue);
    errorDisplayHandler(valid,currentValue,pinCodeErr,pinCodeEmpty);
}
//card number check handler
const cardNumCheckHandler=(e)=>
{
    let currentValue=e.target.value;
    let valid=cardNumPattern.test(currentValue);
    errorDisplayHandler(valid,currentValue,cardNumErr,cardNumEmpty);
}
//card expiry check handler
const cardExpiryCheckHandler=(e)=>
{
    let currentValue=e.target.value;
    let valid=cardExpiryPattern.test(currentValue) && currentValue>=currentYear;
    errorDisplayHandler(valid,currentValue,cardExpiryErr,cardExpiryEmpty);
}
//cvv check handler
const cvvCheckHandler=(e)=>
{
    let currentValue=e.target.value;
    let valid=cvvPattern.test(currentValue);
    errorDisplayHandler(valid,currentValue,cvvErr,cvvEmpty);
}

//event listeners for all the inputs
firstName.addEventListener("input",firstNameCheckHandler);
lastName.addEventListener("input",lastNameCheckHandler);
email.addEventListener("input",emailCheckHandler);
contactNumber.addEventListener("input",contactCheckHandler);
pinCode.addEventListener("input",pinCodeCheckHandler);
cardNum.addEventListener("input",cardNumCheckHandler);
cardExpiry.addEventListener("input",cardExpiryCheckHandler);
cvv.addEventListener("input",cvvCheckHandler);
