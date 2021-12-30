// console.log("Hello World !")

// //console.log("1", userName)

// var user_Name = "Gamze"

// userName = "Ebuzer"

// console.log(userName)

// let mail = "abc@gmail.com"
// //let mail = "abcdef"

// mail = "xyz"
// console.log(mail)
// //let -> mutable

// mail = "xyz@mail.com"

// console.log(mail)

// const email = "ababab"
// //email = "xyzasd"
// //const -> immutable

// // console.log(uName)
// let uName="Afra";
// //const secondName;

// let firstUserName;
// let s1Name;

// let _name;
// let $name;

// let a = '3';
// let b = 8;
// let c = a

// a = b ;
// b = c ;

// console.log(a, b)
/* 
This is used for 
multiline comments
*/

// var fName = "Afra";
// fname = "Abcdcd";
// let fName2 = "Muhlise";
// fName2 = "Kemal";
// const fName3 = "Fatih";

// // ------------------------------------ DATA TYPES -------------------------------- //

// /* 
//     1. string; 
//     2. number; 
//     3. boolean; 
//     4. undefined; 
//     5. null; 
// */

// // let name;
// // console.log("name: " + name)
// // name = null;
// // console.log("name", name)

// // let phoneNumber;
// // console.log("phoneNumber", phoneNumber)
// // let email = null;
// // console.log("email", email)

// // let variable = 'ali29';
// // console.log(typeof variable)

// // console.log(phoneNumber)
// // console.log(email)

// // console.log(typeof name)

// // console.log("11111",typeof 29)
// // console.log(typeof "125")
// // console.log("2222", typeof 3.14)
// // console.log(typeof "true")
// // console.log(typeof true)
// // console.log(typeof false)

// // ------------------------------------ BASIC OPERATORS  -------------------------------- //""

// // let currentYear = 2021;
// // let age = currentYear - 1971;

// // console.log("age: ", age)

// // let a = 3;
// // let b = 8;

// // let total = a + b ;
// // let totalValue =  5 + 8;
// // console.log(total, totalValue)

// // let x = 3 * 5 ;
// // console.log(x)

// // let y = 8 / 4;
// // console.log(y)

// // let exponent = 2 ** 3;
// // console.log(exponent)

// // let mod = 10 % 3;
// // console.log(mod)

// // Increment, decrement

// // " -- " -> 1 azalt
// // " ++ " -> 1 artır

// // let ab = 3;
// // let xy = --ab;   // bu satırda ab = 2  // azalt sonra ata
// // console.log(ab, xy) // bu satırda ab = 2

// // let abc = 3;
// // let xyz = abc-- // bu satırda abc = 3  // ata sonra azalt
// // console.log(xyz, abc)

// // let dec = 5;
// // let assg = ++dec;  // artır sonra ata

// // console.log(dec, assg)

// // let dec2 = 5;
// // let assg2 = dec2++ // ata sonra artır

// // console.log(assg2, dec2)

// // String Concetanation

// // const firstName = "Jeff";
// // const surName = "Bezos";

// // console.log(firstName + " " +surName)

// // Assignment Operator

// // let val = true;

// // let x = 2;

// // x = x + 5;
// // console.log("x = " + x);

// // x += 5;
// // console.log("x = " + x);

// // let y = 10;
// // y /= 2;
// // console.log("y = " + y);

// // y *= 4;
// // console.log("y = " + y);

// // //x = x + y

// // x += y;
// // console.log("x", x);

// // // Comparison Operators
// // // <, >, >= , <=

// // let ageAhmet = 50;
// // let ageUtku = 28;
// // // This gives boolean value.
// // console.log(ageAhmet > ageUtku);
// // console.log(ageAhmet < ageUtku);

// // console.log(ageAhmet == 50);
// // console.log(ageUtku != 28);

// // console.log("1", ageAhmet == "50"); // loose comparison
// // console.log("2", ageAhmet === "50"); // strict comparison
// // console.log("2", ageAhmet !== "50");

// // // Template Literal

// // let firstName = "Jeff";
// // let secondName = "Bezos";
// // let work = "Amazon";

// // let sentence =
// //   "He is " +
// //   firstName +
// //   " " +
// //   secondName +
// //   " and He is founder of " +
// //   work +
// //   ".";

// // console.log(sentence);

// // let betterSentece = `He is ${firstName} ${secondName}, and He is foumder of ${work}.`;

// // console.log(betterSentece);

// // console.log("I want to write this \n\
// // on new line");

// // console.log(`I want to write this \n\
// // on new line`);

// // console.log("For github desktop.");

// // // ------------------------------------ CONDITIONALS -------------------------------- //

// const currentAge = 19;
// const allowed = currentAge < 18;

// //If the statement within the paranthesis is true, the code within the if block will execute.
// // if (currentAge >= 18) {
// //   console.log("You can drive legally.");
// // } else {
// //   // if cuurentage < 18
// //   console.log("You are not allowed to drive.");
// // }

// if(!allowed){
//     console.log("You can drive legally.");
// }


// // const birthYear = 2001;

// // let generation;

// // if (birthYear >= 2000) {
// //   generation = "Z";
// //   //console.log(generation)
// // } else if (birthYear < 2000) {
// //   generation = "y";
// //   //console.log(generation)
// // } else {
// // }

// // console.log("gen", generation);
// /*
// Control flow
// if (){

// }else{

// }
// */

// let grade = "85";

// let mark;
// if(grade >= 90){
//     mark = "AA"
// }else if(grade>= 80){
//     mark = "BB"
// }else if( grade >= 70){
//     mark = "CC"
// }
// console.log("mark ", mark)

// // TYPE CONVERSION AND TYPE COERCION
// // Type conversion -> manually convert type
// console.log(typeof "18")
// console.log(typeof Number("18"))
// console.log(typeof String(18))

// console.log(Number("Gamze")) // Not a Number
// console.log(Number("3,14")) // Not a Number
// console.log(typeof NaN)

// // Type coersion -> Js converts value behind the scenes

// let num = "5"

// let mult = num * 2;
// console.log("mult ", mult)
// let divide = 10 / num
// console.log("divide ", divide)
// let minus = num - 1
// console.log("minus ", minus)
// let add = num + 5 // concatenate the values
// console.log("add ", add) 
// console.log(typeof add)

// let add2 = Number(num) + 5
// console.log("add2 ", add2)

// let a = "1"
// a += 1 // 11 -> string
// a -= 1 // 10 -> number 
// console.log(a)

// // TRUTHY AND FALSY VALUES 

//     /**
//      * There are 5 falsy values
//         * 0
//         * ""
//         * undefined
//         * null
//         * Nan
//     */

// let cash = 0;

// if(cash){
//     console.log("Find a job")
// }
// // If you write one line code u don't have to use curly braces
// // if(cash == 0) console.log("No jobs found")


// /** 
//  * AND OPERATOR
//     const a = have license (true)
//     const b = bigger than 18 (true)

//     a && b = can drive (true)
//     !a && b = cannot drive (false)
//     a && !b = cannot drive (false)
//     !a && !b = cannot drive(false)
//  */

// /** 
//  * OR OPERATOR 
//     const x = bigger than 65 
//     const y = chronic disease 

//     x || y = risky (true)
//     !x || y = risky (true)
//     x || !y = risky (true)
//     !x || !y = not risky (false)
//  */

// // SWITCH STATEMENT 

// // switch(expression){
// //     case x:
// //         code block
// //         break
// //     case y:
// //         code block
// //         break
// //     case z:
// //         code block
// //         break
// //     case m:
// //         code block
// //         break
// //     case n:
// //         code block
// //         break
// // }

// let day = "saturday" 

// //if(day == "saturday" || day == "sunday")

// switch(day){
//     case "monday":
//         console.log("There is not class, ypu can practice")
//         break
//     case "tuesday":
//         console.log("CSS")
//         break
//     case "wednesday":
//         console.log("Js")
//         break
//     case "thursday":
//         console.log("no class")
//         break
//     case "friday":
//         console.log("CSS")
//         break
//     default:
//         console.log("holiday")
//         break
//     // case "saturday":
//     // case "sunday":
//     //     console.log("holiday")
//     //     break
// }


// // TERNARY OPERATOR
// const gradeX = 50

// // if(gradeX >= 60){
// //     console.log("Passed")
// // }else{
// //     console.log("Failed")
// // }

// gradeX >= 60 ? console.log("Passed") : console.log("Failed")

// const weather = "cold"

// const season = weather === "hot" ? "summer" : "winter"

// console.log("season: ", season)

// // NULLISH COALESCING

// //const val = "xyz"
// const val = undefined

// const value = val ?? "Ahmet"

// console.log("values ", value)

// console.log( 0 || "Ahmet")

// console.log("Ahmet" && undefined && 2 )


/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team,using the test data below
Compare the team's average scores to determine the winner of the competition,
and print it to the console. 

2. Include a requirement for a minimum scoreof 100. Witht his rule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
3. Minimum score also applies to a draw!So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// // Q1

// const avgDolphins = (96 + 108 + 89) / 3
// const avgKoalas = (88+ 91 + 110) / 3

// console.log(avgDolphins, avgKoalas)

// if (avgDolphins > avgKoalas){
//     console.log("Winner is Dolphins")
// }else {
//     console.log("Winner Kolas")
// }

// // Q2

// const avgDolphins2 = (97 + 112 + 101) / 3
// const avgKoalas2 = (109+ 95 + 123) / 3

// console.log(avgDolphins2, avgKoalas2)

// if(avgDolphins2 > avgKoalas2 &&  avgDolphins2 >= 100){
//     console.log("Winner is Dolphins")

// }else if(avgKoalas2 > avgDolphins2 && avgKoalas2 >=100){
//     console.log("Winner Koalas")
// }

// // Q3 

// const avgDolphins3 = (97 + 112 + 101) / 3
// const avgKoalas3 = (109+ 95 + 106) / 3

// console.log(avgDolphins3, avgKoalas3)

// if(avgDolphins3 > avgKoalas3 &&  avgDolphins3 >= 100){
//     console.log("Winner is Dolphins")

// }else if(avgKoalas3 > avgDolphins3 && avgKoalas3 >=100){
//     console.log("Winner Koalas")
// }else if (avgKoalas3 == avgDolphins3 && avgKoalas3 >= 100 && avgDolphins3 >= 100){
//     console.log("This is draw")
// }else {
//     console.log("There is no winner")
// }


// // Take inputs from the user (the day and the time)  and return output whether is open or closed.
// // Open -> Monday to Friday, 10-21 
// // Close -> all weekend

// const day = prompt("Enter the day: ")
// const time = prompt ("Enter the time: ")

// if (day != "Monday" && day != "Tuesday" && day!= "Wednesday" && day !="Thursday" && day != "Friday" && day != "Saturday" &&  day != "Sunday"){
//     alert("Please enter valid day")
// }else {
//     if ( (day != "Saturday" && day != "Sunday") &&  (time >= 10 && time < 21) ){
//         console.log("Open")
//     }else{
//         console.log("Close")
//     }
// }




// if (hour <=21 && hour >= 10) {
//     switch (day) {
//         case ("monday"):
//             console.log("OPEN!")
//             break
//         case ("tuesday"):
//             console.log("OPEN!")
//             break
//         case ("wednesday"):
//             console.log("OPEN!")
//             break
//         case ("thursday"):
//             console.log("OPEN!")
//             break
//         case ("friday"):
//             console.log("OPEN!")
//             break
//         default:
//             console.log("CLOSED!")
//             break
//     }
// }
// else{
//     console.log("CLOSED!")
// }


// if(gun=="Monday" && time>=10 && time<=21)   { console.log("open")}
// else if(gun=="Tuesday" && time>=10 && time<=21)  { console.log("open")}
// else if(gun=="Wednesday" && time>=10 && time<=21){ console.log("open")}
// else if(gun=="Thursday" && time>=10 && time<=21) { console.log("open")}
// else if(gun=="Friday" && time>=10 && time<=21)   { console.log("open")}
// else                                             {console.log("close")} 



// ------------------------------------ FUNCTIONS -------------------------------- //

// Piece of code that we can use multiple times

// function myFirstFunction(){
//     console.log("Hello World !")
// }

// myFirstFunction() // call, execute, , invoke
// // myFirstFunction()
// // myFirstFunction()
// // myFirstFunction()
// // myFirstFunction()

// function juiceExtractor (fruit1, fruit2){
//     // console.log("çalıştı")
//     const juice = `This is ${fruit1} and ${fruit2} juice.`
//     console.log("Function: ", juice)
//     return juice
//     // console.log(juice)
// }
// //console.log(juiceExtractor("apple", "orange")) 
// const myJuice = juiceExtractor("apple", "orange")
// console.log(myJuice)

// //---- Function decleration 
// function calcAge (birthYear){
//     // const age = 2021 - birthYear
//     // return age
//     return 2021 - birthYear
// }

// //console.log(calcAge(1965))

// // console.log(calcAge(1997))

// //---- Function Expression code
// const addition = function (a, b){
//     return a + b
// }

// const total = addition(1965, 1612737)
// console.log(total)


// // ---- Arrow Function 

// const calcAge2 = birthYear  => 2021 - birthYear 

// console.log(calcAge2(2000))

// const canDrive = (birthYear) => {
//     const age = 2021 - birthYear
//     const allowed = 18 - age
//     return `You can drive ${allowed} year later.`
// }

// const result = canDrive(2006)
// console.log(result)


// function hipotenus (a, b){
//     const firstValue = exponentValues(a)
//     const secondValue = exponentValues(b)
//     const result = (firstValue + secondValue) ** (0.5)
//     return result 
// }

// function exponentValues(value){
//     return value ** 2
// }

// const hipoResult = hipotenus (7, 24)
// console.log(hipoResult)


// /*
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:

// 1. Write a function that calculates the average points of the teams.
// 2. Write another function to compare the averages and return the winner of the play.

// Data 1: Dolphins score: 96, 108 and 89. 
//         Koalas score:  88, 91 and 110
// */


// function average (a, b, c){
//     return (a + b + c) / 3
// }

// const avgDolphin = average(96, 108, 89)
// console.log(avgDolphin)
// const avgKoala = average(88, 91, 110)
// console.log(avgKoala)

// function findWinner(avgDolphin, avgKoala){
//     if (avgDolphin > avgKoala){
//         return `The winner is Dolphin`
//     }else{
//         return `The winner is Koala`
//     }
// }

// console.log(findWinner(avgDolphin, avgKoala))

/** 
 Find out if a given year is a “leap” year.
In the Gregorian calendar, three criteria must be taken into account to identify leap years:
-- The year must be evenly divisible by 4;
-- If the year can also be evenly divided by 100, it is not a leap year; unless...
--  The year is also evenly divisible by 400. Then it is a leap year.
According to these rules, the years 2000 and 2400 are leap years, while 1800, 1900, 2100, 2200, 2300, and 2500 are not the leap years.
Write a program that takes the year from user and gives output as “2020 is a leap year” or “2019 is not a leap year” .
 */


// const year = prompt("Enter a year: ")

// function leapYear (year){
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//         return `${year} is a leap year.`
//     }else {
//         return `${year} is not a leap year.`
//     }
// }

// console.log(leapYear(year))


/**
1.Take a positive number from user,
2. Write a function that check whether  the number is "Armstrong" or not.

An n-digit number that is the sum of the nth powers of its digits is called an n-Armstrong number. Examples :
371 =3 ** 3 + 7 ** 3 + 1 ** 3;
9474 = 9 ** 4 + 4 ** 4 + 7 ** 4 + 4 ** 4;
93084 = 9 ** 5 + 3 ** 5 + 0 ** 5 + 8 ** 5 + 4 **5.

P.S:  consider the negative, decimal and any entries other than numeric values then display a warning message to the user.

*/


// const number = prompt("Enter a three digit number: ")

// function isArmstrong(number){
//     const len = number.length
//     const newNumber = number.split("")
//     console.log(newNumber)
//     console.log(len)

//     const sum = newNumber[0] ** len + newNumber[1] ** len + newNumber[2] ** len

//     return sum == number ? "is Armstrong" :  "not Armstrong"
// }

// console.log(isArmstrong(number))

// ------------------------------------ STRING METHODS -------------------------------- //

// let text = "Her şey güzel olacak !"
// let len = text.length
// console.log("length " + len)

// // EXTRACT METHODS 
// // slice(start,end)

// let firstPArt = text.slice(8,13)
// console.log(firstPArt)
// console.log("text: " + text)

// let secondPart = text.slice(8)
// console.log(secondPart)

// let thirdPart = text.slice(-14, -9)
// console.log(thirdPart)

// // substring(start, end)
// // does  not accept negative numbers
// let part = text.substring(8, 13)
// console.log(part)

// // substr(start, length)

// let substrPart = text.substr(8,5)
// console.log(substrPart)

// let substrPart2 = text.substr(-14, 5)
// console.log(substrPart)

// // SPLIT

// let text2 = "Turkey, Germany, USA, France"
// let splittedPart = text2.split(" ")
// console.log(splittedPart)

// let splittedPart2 = text2.split(",")
// console.log(splittedPart2)
// //console.log(splittedPart2[1])

// let splittedPart3 = text.split("")
// console.log(splittedPart3)

// // REPLACE
// let string = "Current euro currency, is 15,22"
// let splitIt = string.split(" ")
// console.log(splitIt)
// let currency = splitIt[splitIt.length - 1]

// currency = currency.replace(",", ".")
// console.log(currency)
// // replace method only replaces the first match value.
// currency = Number(currency)
// console.log(currency)

// let replacedStr = string.replaceAll(",", ".")
// console.log(replacedStr)

// let string2 = "Welcome to DGHome"
// let newString = string2.replace("DGHome", "DigiHome")
// let newString2 = string2.replace(" ", "")
// console.log(newString)
// //console.log(newString2)

// // TRIM
// let string3 = "       Welcome to DGHome        "
// console.log(string3)
// let trimmed = string3.trim()
// console.log(trimmed)
// // let replacedAll = string3.replaceAll(" ", "")
// // console.log(replacedAll)


// // INCLUDES 
// // returns true or false
// console.log(trimmed.includes("Welcome"))

// // INDEXOF
// let string4 = "All is well !"
// let ind = string4.indexOf("l")
// let lastInd = string4.lastIndexOf("l")
// console.log(lastInd)
// console.log(ind)

// let ind2 = string4.indexOf("l", ind + 1)
// let ind3 = string4.indexOf("l", ind2 + 1)
// console.log(ind2)
// console.log(ind3)

// // concat
// let s1 = "Hello "
// let s2 = "World"
// let s3 = s1.concat(s2)
// console.log(s3)

// //charAt
// let char = s3.charAt(6)
// console.log(char)


// // toLowerCase / toUpperCase
// let newStr = string3.toLowerCase()
// console.log(newStr) 
// let newStr2 = string3.toUpperCase()
// console.log(newStr2) 
// ------------------------------------ STRING METHODS -------------------------------- //


// ------------------------------------ ARRAYS -------------------------------- //
// const student1 = "Muhlise"
// const student2 = "Utku"
// const student3 = "Kemal"

// const studentArray = ["Muhlise", "Utku", "Kemal", "Cengiz", "Erhan"]
// console.log(studentArray)

// console.log(studentArray[4])
// console.log(studentArray[studentArray.length - 1])

// console.log(studentArray.length)

// studentArray[2] = "Beyza"
// console.log(studentArray)

// //----- BASIC ARRAY METHODS/OPERATIONS
// // ADDING ELEMENT 
// // push() -> adds element at the and of the array
// //studentArray.push("Ahmet")
// const newLength = studentArray.push("Ahmet") // psuh returns the length of new array
// console.log(studentArray)
// console.log(newLength)

// // unshift() -> adds element as a first value of array
// const newArr = studentArray.unshift("Hasan")
// console.log("1: ", newArr)
// studentArray.unshift(3)
// studentArray.unshift(['a'])
// studentArray.unshift(true)
// console.log(studentArray)

// // REMOVE ELEMENT
// // pop() -> removes last element
// studentArray.pop()
// console.log(studentArray)
// studentArray.pop()
// console.log(studentArray)
// const popped = studentArray.pop()
// console.log(popped)

// // shift() -> removes first element from array
// studentArray.shift()
// console.log(studentArray)
// studentArray.shift()
// console.log(studentArray)
// const shifted = studentArray.shift()
// console.log(shifted)
// console.log(studentArray)

// // INDEXOF
// console.log(studentArray.indexOf("Muhlise"))
// // if array does not include elemnt it returns "-1"
// studentArray.push(23)
// console.log(studentArray)
// console.log(studentArray.indexOf("23")) // it has to be strict equivelant

// // INCLUDES 
// console.log(studentArray.includes("Cengiz"))
// console.log(studentArray.includes("Utku"))

// // SPLICE 
// /**
//   splice(start, deleteCount)
//   splice(start, deleteCount, item1)
//  */

// //   const spliced = studentArray.splice(2, 2)
// //   console.log(spliced)
//   console.log(studentArray)

//   const spliced2 = studentArray.splice(0,2, "Ebuzer", "Cengiz", "Erhand")
//   console.log(spliced2)
//   console.log(studentArray)
//   const spliced3 = studentArray.splice(2,0, "Hasan", "Muhlise")
//   console.log(spliced3)
//   console.log(studentArray)

//   // SLICE 
//   // slice(start, end) // end does not included
//   const sliced = studentArray.slice(1,3)
//   console.log(sliced)
//   console.log(studentArray)


  // FizzBuzz 
  // boş array oluştu
  // fizzBuzz function yaz 
  // function her çağırıldığında 1 den başlayarak sırayla sayıları ekle
  // 3 ve 3 ün katları Fizz 5 ve 5 in katları Buzz 15 ve katları FizzBuzz yazacak

//   const fbArray = [];
//   let count = 1;
  
//   function fizzBuzz(){
//       if(count % 3 == 0 && count % 5 != 0){
//           fbArray.push('Fizz');
//       }else if(count % 5 == 0 && count % 3 != 0){
//           fbArray.push('Buzz')
//       }else if(count % 3 == 0 && count % 5 == 0){
//           fbArray.push('FizzBuzz')
//       }else{
//           fbArray.push(count)
//       }
//       count++ 
//       return fbArray 
//   }
  
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())
//   console.log(fizzBuzz())

// ------------------------------------ ARRAYS -------------------------------- //


// ------------------------------------ OBJECTS -------------------------------- //
// const employeeArr = [
//     'John', 
//     'Snow',
//     28,
//     'trainer'
// ]

// // key-value pairs
// const empObj = {
//     firstName: 'John',
//     lastName: 'Snow',
//     age: 28,
//     job: 'trainer'
// }
// console.log(empObj)

// // // DOT NOTATION - BRACKET NOTATION

// // // DOT N.
// console.log(empObj.firstName)

// // //BRACKET N.
// console.log(empObj['firstName'])

// // nameKey = "Name"
// // console.log(empObj['first' + nameKey])
// // console.log(empObj['last' + nameKey])


// // const val = prompt('What do u want to know about John')

// // // //console.log(empObj.val)
// // // console.log(empObj[val])

// // // empObj[val] ? console.log(empObj[val]) : console.log('Wrong Request')

//  empObj.location = 'Germany'
// // console.log(empObj)

// empObj['mail'] = "abc@mail.com"
// // console.log(empObj)

// // empObj['language'] = ['English', "Deutsch", "Spanish"]
// // console.log(empObj)

// // empObj['driveLicense'] = true
// // console.log(empObj)


// const empObj2 = {
//     firstName: 'John',
//     lastName: 'Snow',
//     birthYear: 1990,
//     job: 'trainer',

//     // calcAge : function(birthYear){
//     //     return 2021 - birthYear
//     // }
//     calcAge : function(){
//         console.log("this: ",this)
//         return 2021 - this.birthYear
//     }
// }

//  console.log(empObj2.calcAge())

// ------------------------------------ OBJECTS -------------------------------- //


// ------------------------------------ LOOPS-------------------------------- //

// console.log('push up 1')
// console.log('push up 2')
// console.log('push up 3')
// console.log('push up 4')
// console.log('push up 5')
// console.log('push up 6')
// console.log('push up 7')
// console.log('push up 8')
// console.log('push up 9')
// console.log('push up 10')

// for(let rep = 1; rep <= 30; rep++){
//     console.log(`push up ${rep}`)
// }

// const fbArray = []

// function fizzBuzz(){
//     for(let i = 1; i <= 100; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             fbArray.push('FizzBuzz')
//         }else if (i % 5 == 0){
//             fbArray.push('Buzz')
//         }else if (i % 3 == 0){
//             fbArray.push('Fizz')
//         }else {
//             fbArray.push(i)
//         }
//     }
//     return fbArray
// }

// console.log(fbArray)

const array = ['data1', 'data2', 'data3', 'data4', 'data5']

// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])
// for (let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// continue - break
// let evenNumbers = []
// for(let i = 0; i <= 100; i++){
//     if(i % 2 != 0) continue
//     if(i == 51) break
//     evenNumbers.push(i)
// }
// console.log(evenNumbers)


// for(let i = 1; i <= 3; i++){
//     console.log(`--------- Exercise ${i}`)
//     for(let j = 1; j <= 5; j++){
//         console.log(`repeat ${j}`)
//         for(let m = 1; m <= 3; m++){
//             console.log(`break ${m} sec`)
//         }
//     }
// }

// const reverseArr = []
// for(let i = 10; i >= 0; i--){
//     reverseArr.push(i)
// }

// console.log(reverseArr)

// WHILE

// let rep = 1
// while(rep <= 10){
//     console.log(`push up ${rep}`)
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1

// //console.log(dice)

// while(dice !== 6){
//     console.log(`You rolled ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1
//     console.log(dice == 6 ? "You win" : "Try again")
// }

// let num = 11;
// let sum = 0 

// do {
//     sum += num
//     num++
// }while(num <=10)

// console.log("The total is: ", sum)

/** 
1.Take a positive number from user,
2. Write a function that check whether  the number is "Armstrong" or not.

An n-digit number that is the sum of the nth powers of its digits is called an n-Armstrong number. Examples :
371 =3 ** 3 + 7 ** 3 + 1 ** 3;
9474 = 9 ** 4 + 4 ** 4 + 7 ** 4 + 4 ** 4;
93084 = 9 ** 5 + 3 ** 5 + 0 ** 5 + 8 ** 5 + 4 **5.

P.S:  consider the negative, decimal and any entries other than numeric values then display a warning message to the
*/

// const number = prompt("Please enter a number: ")
// function isArmstrong(number){
//     let len = number.length
//     let arr = number.split('')
//     let sum = 0
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i] ** len
//     }

//     return sum == number ? `${number} is Armstrong` : `${number} is not Armstrong`
    
// }

// console.log(isArmstrong(number))
// console.log(fizzBuzz())


// ------------------------------------ LOOPS -------------------------------- //

//PRIME NUMBER 

let number = prompt("Please enter a number: ")
alert("Alert")
// // console.log(typeof number)
// // console.log(Number(number))
// number = Number(number)
// // console.log(Number.isInteger(number))
// // console.log(typeof number)
// if(number <= 0 || Number.isInteger(number) == false || isNaN(number)) alert("Please enter a positive integer")

// function isPrime(num){
//   if(num == 1){
//     return `${num} is not a Prime Number`
//   }else if(num == 2){
//     return `${num} is a Prime Number`
//   } else {
//     for(let i = 2; i < num; i++){
//       if(num % i == 0){
//         return `${num} is not a Prime Number`
//       }
//     }
//     return `${num} is a Prime Number`
//   }
// }

// console.log(isPrime(number))



