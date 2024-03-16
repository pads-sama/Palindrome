const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const inputField = document.getElementById("text-input");
const error = document.getElementById("error")
let word = null;

//check for empty input
const isEmpty = () => {
    if (inputField.value === "") {
        error.textContent = "Please input a value";
        return true;
    }
    return false;
}

//remove spaces and special characters 
//goods
const removeNonAlphanumericChar = () => {
    //text input
    //replace all non alphanumeric character with ""
    //we need regex
    //we'll use replace method for this.
    //convert string to lowercase
    const regex = /[^a-zA-Z0-9]/g;
    word = inputField.value.toLowerCase().replace(regex, "");
}


//check if the input will be the same if reverse
const isPalindrome = () => {
    //cleaned text input value
    //we'll use .split to convert input to array and separate by ''
    //then we'll use .reverse to reverse the order of the array
    //then we'll use  .join to join them back together into string
    //we'll need to call the removeNonAlphanumericChar
    if (!word) return;
    let reverseWords = word.split('').reverse().join('');
    reverseWords === word ? result.textContent = `${inputField.value} is a palindrome.` : result.textContent = `${inputField.value} is not a palindrome.`;

}


//reset input field

const handleFormSubmit = e => {
    e.preventDefault();
    if (isEmpty()) return;
    removeNonAlphanumericChar();
    isPalindrome();
    inputField.value = "";
    error.textContent = "";
}

// checkButton.addEventListener('click', handleInput);
checkButton.addEventListener('click', handleFormSubmit)

