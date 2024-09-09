//  use the project deposit field and amount field for deposit use function 
function getInputFieldById(inputIdField){
const inputField = document.getElementById(inputIdField);
const inputFieldAddValue = inputField.value;
const inputFieldStToNum = parseFloat(inputFieldAddValue);
inputField.value = '';
return inputFieldStToNum;


}
// use the projeft depositInnerText use function for the step two
function getElementByIdInnerTextById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementInnerText = textElement.innerText;
    const textElementStrToNum = parseFloat(textElementInnerText);
    return textElementStrToNum;
}
// the total deposti add deposit value and deposit innerText 
function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
// deposit button for click function and event handler
document.getElementById('depositBtn').addEventListener('click',function(){
    const newDepositFieldAmount = getInputFieldById('depositField');
    const newDepositInnerText = getElementByIdInnerTextById('depositTotal');
    //  set the total value the deposit value and deposit inner text 
    const newDepositTotal = newDepositFieldAmount + newDepositInnerText;
    // set deposit total value
    setTextElementValueById('depositTotal',newDepositTotal);

})

//  use depopsit input field function 
// function getInputFiledValueById(inputIdField){
//     const inputField = document.getElementById(inputIdField);
//     const inputFieldValue = inputField.value;
//     const inputFieldValueStToNum = parseFloat(inputFieldValue);
//     inputField.value = '';
//     return inputFieldValueStToNum;
// }
// element for the all innter text 
// function getTextElementValueById(elementId){
//     const textElement = document.getElementById(elementId);
//     const textElementInnerText = textElement.innerText;
//     const textStrToNum = parseFloat(textElementInnerText);
//     return textStrToNum;
// }
// function getElementById(elementid){
//     const element = document.getElementById(elementid);
//     const value = element.innerText;
//     const valueStToNum = parseFloat(value);
//     return valueStToNum;


// this is event handler button for the click function
// document.getElementById('depositBtn').addEventListener('click',function(){
//     const newDepsitAmount =getInputFiledValueById('depositField');
//     //  get previous deposit total by id
//    const previousDepositAmount =getTextElementValueById('depositTotal');
//     console.log(newDepsitAmount,previousDepositAmount);
    //  const newDepositField = document.getElementById('depositField');
    //  console.log(newDepositField);
    
// })
// function getElementByIdField(inputId){
//     const inputField = document.getElementById(inputId);
//     const inputFieldValue = inputField.value;
//     return inputFieldValue;
// }
// document.getElementById('depositBtn').addEventListener('click',function(){
//     console.log("added new button for the clicked");

// })
//  add fuction all deposti field and withdraw field same so use for the function work easy
// function getinputFieldValueById(inputFieldId){
//     const inputField = document.getElementById(inputFieldId);
//     const inputFieldAddValue = inputField.value;
//     const inputFieldStrToNum = parseFloat(inputFieldAddValue);
//     inputField.value = '';
//     return inputFieldStrToNum;
// }
// //  add event for deposit btn
// document.getElementById('depositBtn').addEventListener('click',function(){
//     const newDepositAmount = getinputFieldValueById('depositField');
//     console.log(newDepositAmount);
// })