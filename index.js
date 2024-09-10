// // Function to append a value to the result input field
// function appendToResult(value) {
//     document.getElementById('result').value += value;
// }

// // Function to clear the result input field
// function clearResult() {
//     document.getElementById('result').value = '';
// }

// // Function to delete the last character in the result input field
// function deleteLast() {
//     let currentValue = document.getElementById('result').value;
//     document.getElementById('result').value = currentValue.slice(0, -1);
// }

// // Function to evaluate the expression and display the result
// function calculateResult() {
//     try {
//         let result = eval(document.getElementById('result').value);
//         document.getElementById('result').value = result;
//     } catch (error) {
//         document.getElementById('result').value = 'Error';
//     }
// }


const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
 function clearDisplay(){
    display.value ="";

 }
 function calculate(){
    try{
        display.value = eval(display.value);

    }
    catch(error){
        display.value = "Error";
    }
 }