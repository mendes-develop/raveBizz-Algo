// function draw(h){
//     if (h === 0){return}
//     draw(h-1)
//       for (let i = 0; i < h; i++){
//       console.log(h)
//     }
//  console.log('\n')
// }

// draw(2)

function addUpTo(n){
    let sum = 1
    for (let i = 1; i <= n ; i++){sum *= i}
    return sum
}

addUpTo(5)

// function draw(depth){
//   var tempStr = ""
//   let prevNumber = 1

//   for(i=0;i<depth;i++){
//     tempStr = "";j=0;
//     while(j<= i){
//       tempStr = tempStr + "    " + prevNumber;
//       j++;
//       prevNumber++;
//     }
//     console.log(tempStr);
//   }
// }

// draw(10)

function drawFloydTriangle(depth){
  let tempStr = ""
  let prevNumber = 1

  for(let i=0; i<depth; i++){
    tempStr = "";j=0;
    while(j<= i){
      tempStr = tempStr + " " + prevNumber;
      j++;
      prevNumber++;
    }
    console.log(tempStr);
  }
}

drawFloydTriangle(10)





// function factorial(n){
//     return n * (n +1)/2
// }

// factorial(2)


// function isAnagram(string1, string2){
//     //transform both to lower case and then to arrays

//     let arr1 = string1.toLowerCase().split("")
//     let arr2 = string2.toLowerCase().split("")

//     //check if they have the same length (same ? true : false)
//     if (arr1.length === arr2.length){

//         arr1.forEach(char => {
//             if (!arr2.includes(char)) {return false}
//         })
//         return true

//     } else return false


// }

function isAnagram(string1, string2){

  if (string1.length === string2.length){
    let arr1 = string1.toLowerCase().split("")
    let arr2 = string2.toLowerCase().split("")

    arr1.forEach(char => {
        if (!arr2.includes(char)) {
          return false
          console.log(false)
          
        }
    })
    return true
  } else { return false }
}

isAnagram("hello" , 'holla')


________________________________________________________________________________
/*
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. 

function addUpTo(n){
    let sum = 1
    for (let i = 1; i <= n ; i++){sum *= i}
 
    return sum
}




Write a function to represent Floyed Triangle, given input is the number of rows of the Floyd triangle
Example if the number of rows is 3
Result:
1
2 3
4 5 6

function drawFloydTriangle(depth){
  let tempStr = ""
  let prevNumber = 1

  for(let i=0; i<depth; i++){
    tempStr = "";j=0;
    while(j<= i){
      tempStr = tempStr + " " + prevNumber;
      j++;
      prevNumber++;
    }
    console.log(tempStr);
  }
}





write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation. For example
anagram('finder', 'Friend')  --> true
anagram('hello', 'bye') --> false


//loop through both arrays checking for matches




function isAnagram(string1, string2){

  if (string1.length === string2.length){
    let arr1 = string1.toLowerCase().split("")
    let arr2 = string2.toLowerCase().split("")

    // console.log(arr1)
    // console.log(arr2)


    arr1.forEach(char => {
        if (!arr2.includes(char)) {
          console.log(false)
          return false
        }
    })
    return true
  } else { return false }
}



*/

















