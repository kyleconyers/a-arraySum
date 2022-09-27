num = []

document.getElementById("test").addEventListener("click", myFunction, );
document.getElementById("test").addEventListener("click", functionTwo, );
// document.getElementById("test").addEventListener("click", createVariables, );

function myFunction() {
  document.getElementById("test").innerHTML = "YOU CLICKED ME!";
}

function functionTwo(){
    let arrayLength = Math.floor(Math.random() * 11)
    console.log(arrayLength)
    // let newInt = Math.floor(Math.random() * 11)
    let array = []
    for (let i = 0; i < arrayLength; i++) {
        array.push(i);
      }    
    
    let arrayTwo = []
    for (let i = 0; i < array.length; i++) {
        let newInt = Math.floor(Math.random() * 11)
        arrayTwo.push(newInt);
        // return newInt
      } 
    console.log("arrayTwo " + arrayTwo)
    
    let arrayThree = []
    let arrayFour = []
    let finalArray =  []
    // let SumArray = []
    for (let i = 0; i < array.length; i++) {
        // finalArray[i] = finalArray[i] + arrayTwo[i]
        // console.log("f" + finalArray)
        // console.log([i.value])
        // let SumArray  = []
        let SumArray = []
        arrayThree[i] = arrayTwo[i]
        SumArray = SumArray[i].push(arrayTwo)
        arrayTwo[i] = 0;
        console.log(sumArray)
        console.log(arrayTwo)
        // arrayFour[i] = arrayThree[i]
        
        // arrayFour[i] = arrayThree[i] + arrayTwo[i]
        // console.log(arrayTwo)
        // arrayFour[i] = arrayThree[i] + arrayTwo[i]
        // console.log(arrayFour)
        // console.log("array Two" + arrayTwo + "array Three" + arrayThree)
        // arrayThree[i] = arrayTwo[i]
        // arrayTwo.splice(i, 1);
        // console.log("array Two" + arrayTwo + "array Three" + arrayThree)
        // arrayThree[i] = arrayTwo[i]

        // console.log("array Two" + arrayTwo + "array Three" + arrayThree)
        }
        console.log(finalArray)
    // for (let i = 0; i < array.length; i++) {
    //     console.log(arrayTwo)
    //     let arrayThree = []
    //     arrayThree = array.map((arrayTwo, index) => array.slice(0,index + 1).reduce((a, b) => a + b));
    //     console.log(array);

    //     // let newInt = Math.floor(Math.random() * 11)
    //     // arrayTwo.push(newInt);
    //   } 
    // console.log(arrayThree)

    // let arrayFour = []
    //   for (let i = 0; i < array.length; i++) {
    //     arrayFour[i] = arrayThree[i];
    //     // let newInt = Math.floor(Math.random() * 11)
    //     // arrayTwo.push(newInt);
    //   } 

}

// function createVariables(){
//     var accounts = [];
  
//     for (var i = 0; i <= 20; ++i) {
//         accounts[i] = "whatever";
//     }
//     console.log(accounts);
//     return accounts;
// }




    //     for (let i = 0; i < array.length; i++) {
    //     arrayTwo.push(i);
    //   }
    // intOne = Math.floor(Math.random() * 11)
    // let intTwo =  Math.floor(Math.random() * 11)
    // let intThree =  Math.floor(Math.random() * 11)
    // let intFour  =  Math.floor(Math.random() * 11)
    // let array =  [intOne, intTwo, intThree, intFour]

    // let arrayThree = []


    // num = [intOne, intTwo+intOne, intThree+intTwo+intOne, intFour+intThree+intTwo+intOne]


//     for (let i = 0; i < nums.length; i++) {
    // number.push(nums.value);

//    let number = [nums[0], nums[1]+ nums[0], nums[2]+nums[1]+nums[0], nums[3]+nums[2]+nums[1]+nums[0]]
// function  functionThree(){
//     console.log(num)
// }

// console.log(num)
