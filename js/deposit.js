//  add fuction all deposti field and withdraw field same so use for the function work easy
function inputFieldValueById(inputId){
    const inputField = document.getElementById('depositField');
    const inputFieldAddValue = inputField.value;
    const inputFieldStrToNum = parseFloat(inputFieldAddValue);
    return inputFieldStrToNum;
}
//  add event for deposit btn
document.getElementById('depositBtn').addEventListener('click',function(){
    console.log("added deposit btn for the clicked");
})