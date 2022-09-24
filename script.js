num = []

document.getElementById("test").addEventListener("click", myFunction, );
document.getElementById("test").addEventListener("click", functionTwo, );
// document.getElementById("test").addEventListener("click", functionThree, );

function myFunction() {
  document.getElementById("test").innerHTML = "YOU CLICKED ME!";
}

function functionTwo(){
    intOne = Math.floor(Math.random() * 11)
    intTwo =  Math.floor(Math.random() * 11)
    intThree =  Math.floor(Math.random() * 11)
    intFour  =  Math.floor(Math.random() * 11)
    array =  [intOne, intTwo, intThree, intFour]

    num = [intOne, intTwo+intOne, intThree+intTwo+intOne, intFour+intThree+intTwo+intOne]


}

// function  functionThree(){
//     console.log(num)
// }

// console.log(num)
