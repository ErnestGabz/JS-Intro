let btn = document.querySelector(".test_btn");
btn.onclick = function(){
    alert("Hello i am the second button");
}

// Variables
var test;              //to create a variable // variable declaration
test = 34;             // to assign a value // variable intialization
var ay = "Ayo Ayodeji"; //both declaration & intialization

let myBro = "Mozillar 2022";
const age = 13;
let dob = "19/12/2009";

console.log(ay);

let sam = `${dob}, ${myBro}`; //backtick
console.log(sam);

console.log(myBro.toUpperCase () ); //uppercase

//DATA TYPES AND STRUCTURES

//Strings
let name1 = "Mr. Ernest"; //double quote
let name2 = 'Mr. Peter';  //single quote
let name3 = `Hello I am ${name1} - ${230 +450 }`;  //batic-javascript template string
console.log(name3);

let accountBalance = 4568900;
let account = "67869";

let totalBalance = 453 + accountBalance + account; // concatenation
let totalBalance2= accountBalance - account

console.log(typeof accountBalance); //Number
console.log(typeof account);        //string
console.log(totalBalance);
console.log(totalBalance2);

console.log( name1.toUpperCase () );
console.log( name1.toLowerCase () );

let myStory = "My name is Ernest, i am a Fullstack Engineer and a Tech Founder"

console.log(myStory[0])      //Position of a character in myStory
console.log(myStory.length)  // Number of chharacters in myStory

let numOfWords = myStory.split(" "); //split the myStory into substrings and return them as array

console.log( numOfWords.length  ); //Number of words in myStory

console.log(myStory);
console.log(myStory.trim()) // removes whitespace from the beginning of the string
//let xyy = myStory.trimEnd(); //without console.log

let myLife = myStory.concat("PHP","java","Python");
console.log(myLife);

let testStr = "HP|lenovo|host|Dell|Mac";
console.log(testStr);

let Agaba = testStr.repeat(3);
console.log(Agaba);
console.log("*".repeat (10) );
console.log( testStr.charAt(5) );

console.log( testStr.charCodeAt(0) );


//NUMBERS

let myNum = 50;
let xNum = "123.56897";

let xConverted = Number(xNum);
let xConverted2 = parseInt(xNum);
let xConverted3 = parseFloat(xNum);

console.log(xNum, xConverted, xConverted2, xConverted3);

let approx = xConverted3.toFixed(2);
console.log(approx);

let xdiv = 23/0
console.log( xdiv ); //typeof to tell if it's a number

//float is a decimal point number

let number;
let nxObj = null;
console.log(number);
console.log(typeof nxObj);

//DATA STRUCTURES
//Basic data structures in Javascript
//-Array= Linear data structure
//-Object
//-Map
//-Set

//Array:
let myArray = [
    "Mr.Christian",
    true,
    1991,
    [1,2,3,4,5]
];

//reading value from an array & it's zero indexed element-the index position of the element is 0

//Reading from the array
console.log(myArray[0]);
console.log(myArray[3][1]);

//writing to the array
myArray[0] = 2023
myArray[4] = "Ngozi"
// myArray[14] = 'you know'

let newPush = myArray.push(45);//add more items to array
myArray.push('HongKong', 'NewYork', 'Dubai');

myArray.unshift('900', 'Canada', 'Paris');//add items at the beginning
//learn big o notation & time complexity
//remove element from array-pop & shift
let removeditem = myArray.pop();//removes the last element in an array
let shiftedItem = myArray.shift();//removes the first element
console.log(removeditem)
console.log(myArray);

//using the slice & splice
let firstCopy = myArray.slice(3,9);//Slices the array
let firstCopy2 = myArray.slice(3,13);
console.log(firstCopy, firstCopy2);

//using the splice
let removedItems = myArray.splice(5,3);//removes elements from ana array
let removedItems2 = myArray.splice(3,3, "Abuja", "Enugu");
console.log(removedItems, removedItems2);

let NewYorkIndex = myArray.indexOf("NewYork");//checks if it exists
console.log(NewYorkIndex);

let filteredItem = myArray.filter( (item)=> typeof item === 'number');//filter items
let filteredItem2 = myArray.filter( function(item){ 
    return typeof item === 'number'; 
});

//foreach and the map
myArray.forEach ( (item, index) => console.log(index, item) );

let myProducts = [20000,50000,40000]
let sellingPrice = myProducts.map ( (price) => 0.2*price + price );

console.log(sellingPrice);
console.log(sellingPrice.sort ((a,b) => a - b ));



//Read Garbbage collection: WHAT IS & HOW
//Array methods

//Methods of Array
//pop, unshift, shift, pop, slice, splice, length, indexOf



//ASSIGNMENT
// Write a story about Nigeria, it must  not be less than 100 words. Do the following
//-How many words in the write up
//-Find a way to reverse what you've written (last word becomes first & vice versa)
//-write a javascript code that will take a string value & check if the string is a pallindrome or not

let Naija = "Nigeria, officially federal Republic of Nigeria, Country, western Africa Capital: Abuja. There are more than 250 ethnic groups, including Hausa, Fulani, Yoruba, and Igbo. Languages: English (official), Hausa. Religions: Christianity (Protestant, other Christians, Roman Catholic), Islam, traditional beliefs. Currency: naira. Nigeria consists of plateaus and the lowlands between them, which are major river basins fed especially by the Niger River. It has a developing mixed economy based largely on petroleum production and agriculture; manufacturing is growing in importance. Services, trade, and transportation employ more than two-fifths of the workforce. Nigeria is a federal republic with two legislative bodies; its head of state and government is the president. Inhabited for thousands of years, the region was the centre of the Nok culture from 500 BCE to 200 CE and of several precolonial empires, including Kanem-Bornu, Benin, and Oyo. The Hausa and Fulani also had states. Visited in the 15th century by Europeans, it became a centre for the trade in enslaved people. The area began to come under British control in 1861 and was made a British colony in 1914. Nigeria gained independence in 1960 and became a republic in 1963. Ethnic strife soon led to military coups, and military groups ruled the country from 1966 to 1979 and from 1983 to 1999. Civil war between the federal government and the former Eastern region, Biafra (1967-70), ended in Biafras surrender after the death by starvation of perhaps a million Biafrans. In 1991 the capital was moved from Lagos to Abuja. The governments execution of Ken Saro-Wiwa in 1995 led to international sanctions, and civilian rule was finally reestablished in 1999 with the election of a president. Ethnic strife—formerly held in check by periods of military rule—erupted in the early 21st century, as did protests over oil production in the Niger delta. Friction also increased between Muslims and Christians after some of the northern and central states adopted Islamic law (the Sharīʿah)."
//Number of Words

console.log(Naija);

let numOfWordds = Naija.split(" ");

console.log( numOfWordds.length );

console.log(Naija.length) // Number of characters

//Reverse Words

let reverseWords = Naija.split(" ").reverse().join(' ');

console.log(reverseWords);

//palindrome

function isPalindrome(text){
    return text === text.split('').reverse().join('');

}

console.log(isPalindrome('madam'));
// console.log(isPalindrome(Hello)); 

let myAge = 32

console.log(myAge);






