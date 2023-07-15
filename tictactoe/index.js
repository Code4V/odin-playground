
const play_arena = document.querySelector("#play_arena")

const playerFactory = (playershape) => 
{
    function getPlayer() { return playershape }

    return {
        getPlayer
    }
}

const playArena = (playerOne, playerTwo) =>
{
    
    let play_status = [[0, 1, 2],[3, 4, 5],[6, 7, 8]];
    const play_areas = document.querySelectorAll(".play_area")
    let currentTurn = 1;

    const update_status = (key, currentPlayer) =>
    {
        play_status.forEach((innerElement) => {
 
            if(innerElement.includes(key))
            {
                innerElement.forEach((iielement, iikey) => 
                { 
                    if(iielement === key)
                    {
                        innerElement.splice(iikey, 1, currentPlayer)
                    }
                })
                
                
            }
            
        })
    }

    play_areas.forEach((element, key)=>{
        element.addEventListener("click", () => {
            try{
                if(currentTurn === 9) throw "TIE! Game Over"
                if(element.innerHTML === "X" || element.innerHTML === "O") throw "Illegal Move!"
                console.log(play_status)
                if(currentTurn % 2)
                {
                    element.innerHTML = playerOne.getPlayer();
                    
                    update_status(key, element.innerHTML)
                    ++currentTurn;
                    console.log("END")
                }  
                else
                {
                    element.innerHTML = playerTwo.getPlayer();
                    update_status(key, element.innerHTML)
                    ++currentTurn;
                }

                
            }
            catch(error)
            {
                alert(error)
            }
            
        });
    });

    const getTurn = () => 
    {
        
        return turn = (currentTurn % 2) ? `${currentTurn} X's Turn` : `${currentTurn} O's Turn`;
    }

    return {
        play_status,
        getTurn
    }
}

const CrossPlayer = playerFactory("X");
const CirclePlayer = playerFactory("O");

const Arena1 = playArena(CrossPlayer, CirclePlayer)

