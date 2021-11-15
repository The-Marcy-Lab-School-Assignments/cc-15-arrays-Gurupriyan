//write your code here
/*
1. Declare a function named findLongestWord with a array parameter with strings as elements
2. declare a variable to get the longest word = resultWord
3. declare a variable to get the longest word count = resultLength
4. iterate through the array using for loop
5. use if statement to check if the resultLength is greater than the str[i].length 
6. if it is reassign resultLength to that element's length and reassign resultWord with that element
7. return resultWord
*/

function findLongestWord(array) {
    let resultWord = "";
    let resultLength = 0;
    for (let i =0; i < array.length; i++){
        if (resultLength < array[i].length){
            resultLength = array[i].length;
            resultWord = array[i];
        }
    }
    return resultWord;
}
console.log(findLongestWord(["jazzy", "jumpy", "quaky"]));
