

  const playDom = document.getElementById('play')
  const levelDom = document.getElementById('level');

  const resetDom = document.getElementById('reset')

  resetDom.addEventListener('click', function(){

    const gridDom = document.getElementById('grid');
    gridDom.innerHTML = "";

    
  })

  
  playDom.addEventListener('click', 
  function(){
    const level = levelDom.value;
    createNewGame(level);

  })

  function createNewGame(level) {

    let cells;
    let cellsPerSide;
    

    const freeCell = [];
    let gameOver = false;
    const myScoreDom = document.getElementById('myscore')


    switch(level){
        case "easy":
            cells = 100;
            break;

            case "medium":
            cells = 81;
            break;

            case "hard":
            cells = 49;
            break; 
    }


    cellsPerSide = Math.sqrt(cells);

    const bombs = generateBombList(16, cells);
    console.log(bombs)

    const gridDom = document.getElementById('grid');
    gridDom.innerHTML = "";

    for(let i = 1; i <= cells; i++){
        const currentCell = generateGrid(cellsPerSide, i);
        currentCell.addEventListener('click', function(){

            if(!gameOver){
                if(bombs.includes(i)){
                    this.classList.toggle('bomb')
                    gameOver = true;
                } else{
                    this.classList.toggle('clicked')
                    
                }
    
                if (!freeCell.includes(i)){
                    freeCell.push(i)
                }

            }

           
            myScoreDom.innerHTML = "Il tuo punteggio è: " + freeCell.length;
        });

        gridDom.append(currentCell);
    }


    
}

function generateBombList (numberOfBombs, cellNumber){
    const bombs = [];

    for(let i = 0; i < numberOfBombs; i++){
        bombs.push(generateRandomUniqueNumber(bombs, 1, cellNumber))


    }

    return bombs;

}


function generateRandomNumber(min, max){
    const numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroCasuale
}

function generateRandomUniqueNumber(blacklist, min, max){
    let valid = false;
    let randomNumber;

    while(!valid) {
        randomNumber = generateRandomNumber(min, max);

        if(!blacklist.includes(randomNumber)){
            valid = true;
        }

    }

    return randomNumber;

}





function generateGrid(cellsPerSide, number){
    const cell = document.createElement ('div');
    cell.classList.add('square');
    cell.style.width = `calc(100% / ${cellsPerSide})`;
    cell.style.height = `calc(100% / ${cellsPerSide})`;
    cell.innerHTML = `<div class="number-square">${number}</div>`;

    return cell;

}

