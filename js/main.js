const gridDom = document.getElementById('grid');


const playDom = document.getElementById('play');
const resetDom = document.getElementById('reset');

playDom.addEventListener('click', function(){
  gridDom.innerHTML = "";

})

resetDom.addEventListener('click', function(){
  gridDom.innerHTML = "";

})


playDom.addEventListener('click', function(){

  for (let i = 1; i < 101; i++) {
    

    const number = i
    console.log(number)

    let bombNumber = bombRandomNumber(number);

    let currentElement = createSquare(number);
      currentElement.addEventListener('click',
      function () {
        
      
    
        this.classList.toggle('clicked');
        console.log(this.innerHTML)
      }
      );
      gridDom.append (currentElement);
    }
    
})


function createSquare(number){
  const currentElement = document.createElement('div');
  currentElement.classList.add('square');
  if(currentElement == bombRandomNumber)
  currentElement.innerHTML = number;
  


  return currentElement;

}
// generazione  numero bomba casuali da 1 a 100
function bombRandomNumber(min, max){
    
    const bombNumber = Math.floor((Math.random() * 100) + 1);
    console.log(bombNumber);
    return bombNumber
}
// generazione di 16 numeri bomba 
function numeriUniqueBomba(bombRandomNumber, min, max){
    let isValidNumber = false;
    let bombRandomNumber;
    for( let i = 1; i <= 16; i++){

    }
}

function addBomb(bombNumber){
    if(bombNumber == currentElement){
        return bombNumber;
    } else {
        return currentElement;
    }

}




