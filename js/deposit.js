function getInputFieldValueById(inputId){
    const inputFiled = document.getElementById('depositField');
    const inputFieldValueString = inputFiled.value;
    const inputFieldStringToNum = parseFloat(inputFieldValueString);
    return inputFieldStringToNum;
}
document.getElementById('depositBtn').addEventListener('click',function(){
    // console.log("added new button clicked for deposit btn");
})