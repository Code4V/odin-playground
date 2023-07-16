
const play_arena = document.querySelector("#play_arena")

const playerFactory = (playershape) => 
{
    const occupied_space = [];
    function getPlayer() { return playershape }
    function getSpace() { return occupied_space }
    function insertSpace(space) { occupied_space.push(space) }

    return {
        getPlayer,
        getSpace,
        insertSpace
    }
}

const playArena = (playerOne, playerTwo) =>
{
    
    let play_status = [[0, 1, 2],[3, 4, 5],[6, 7, 8]];
    const play_areas = document.querySelectorAll(".play_area");
    let currentTurn = 1;

    const checkStatus = (player) => {

        const playerSpace = player.getSpace();
        const winning_combinations = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
        winning_combinations.forEach((element)=>
        {
           
            let filtered = element.filter(innerElement => {
                if(playerSpace.includes(innerElement))
                {
                    return true;
                }
                else return false;
            });
            
            if(filtered.length === 3)
            {
                console.log(`${player.getPlayer()} WON` )
                play_areas.forEach(element => {
                    
                    element.setAttribute("style", "pointer-events:none")
                })
            }
        })
    }   

    const updateStatus = (key, currentPlayer) =>
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
                if(currentTurn === 10) throw "TIE! Game Over"
                if(element.innerHTML === "X" || element.innerHTML === "O") throw "Illegal Move!"
                if(currentTurn % 2)
                {
                    playerOne.insertSpace(parseInt(element.innerHTML)-1);
                    element.innerHTML = playerOne.getPlayer();
                    updateStatus(key, element.innerHTML);
                    checkStatus(playerOne)
                    ++currentTurn;
                    console.log("END TURN")
                    // console.log(playerOne.getSpace());
                }  
                else
                {
                    playerTwo.insertSpace(parseInt(element.innerHTML)-1);
                    element.innerHTML = playerTwo.getPlayer();
                    updateStatus(key, element.innerHTML);
                    checkStatus(playerTwo)
                    ++currentTurn;
                    console.log("END TURN")
                    // console.log(playerTwo.getSpace())
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

