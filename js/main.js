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

    

    

    let currentElement = createSquare(number);
    let numeriBomba = []
    
      currentElement.addEventListener('click',
      function () {
        if(currentElement.includes(numeriBomba)){
            this.classList.toggle('bomb')
        } else{
            this.classList.toggle('clicked');
         

        }
      }
      );
      gridDom.append (currentElement);
    }
    
})


function createSquare(number){
  const currentElement = document.createElement('div');
  currentElement.classList.add('square');

  
  currentElement.innerHTML = number;

  
  


  return currentElement;

}

function bombRandomNumber(){
  for (let i = 1; i < 17; i++){
    let bombNumber = Math.floor((Math.random() * 100) + 1);
    return numeriBomba.push(bombNumber);

  }
  
}




