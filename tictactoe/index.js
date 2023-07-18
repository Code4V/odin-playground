const playerFactory = (playershape, playerName) => 
{
    const occupied_space = [];
    const player_name = playerName;
    function getPlayer() { return playershape }
    function getSpace() { return occupied_space }

    function insertSpace(space) { occupied_space.push(space) }

    return {
        getPlayer,
        getSpace,
        insertSpace
    }
}

var highlightDelay; 



const playArena = (playerOne, playerTwo) =>
{
    
    let currentTurn = 1;

    const getTurn = () => 
    {
        return turn = (currentTurn % 2) ? `${currentTurn} X's Turn` : `${currentTurn} O's Turn`;
    }

    const setStatus = (setter) => { play_status = setter }
    const getStatus = () => { return play_status = [[0, 1, 2],
                                                    [3, 4, 5],
                                                    [6, 7, 8]];}

    const getArena = () => 
    {
        const play_areas = document.querySelectorAll(".play__arena-area");
        return play_areas;
    }

    const checkStatus = (player) => {
        const playerSpace = player.getSpace();
        const winning_combinations = [[0, 1, 2],[3, 4, 5],
                                      [6, 7, 8],[0, 3, 6],
                                      [1, 4, 7],[2, 5, 8],
                                      [0, 4, 8],[2, 4, 6]];
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
                highlightDelay = setInterval(function highlightTiles () {
                    for (let i = 0 ; i < 3 ; i++)
                    {
                        const node = document.getElementById("area"+(filtered[i]+1))
                        
                        node.classList.toggle("highlight")
                        
                        node.style.animationDelay = (150 * i) + "ms";
                    }
                }, 1000);

                finishGame();
            }
        })
    }   

    const updateStatus = (key, currentPlayer) =>
    {
        getStatus().forEach((innerElement) => {
 
            if(!innerElement.includes(key))
            {
                return
            }

            innerElement.forEach((iielement, iikey) => 
            { 
                if(iielement === key)
                {
                    innerElement.splice(iikey, 1, currentPlayer)
                }
            })
            
        })
    }

    const startGame = () => 
    {
        
        const play_areas = getArena()
        play_areas.forEach((element, key)=>{
            element.addEventListener("click", () => {
                try{
                    if(element.innerHTML === playerOne.getPlayer() || 
                       element.innerHTML === playerTwo.getPlayer()) throw "Illegal Move!"

                    if(currentTurn % 2)
                    {
                        
                        playerOne.insertSpace(parseInt(key));
                        element.innerHTML = playerOne.getPlayer();
                        updateStatus(key, element.innerHTML);
                        checkStatus(playerOne)
                        ++currentTurn;
                    }  
                    else
                    {
                        playerTwo.insertSpace(parseInt(key));
                        element.innerHTML = playerTwo.getPlayer();
                        updateStatus(key, element.innerHTML);
                        checkStatus(playerTwo)
                        ++currentTurn;
                    }
    
                    
                }
                catch(error)
                {
                    alert(error)
                }
                
            });
        });
    }

    const finishGame = () =>
    {
        getArena().forEach(element => {  
            element.setAttribute("style", "pointer-events:none")
            element.setAttribute("style", "opacity: 90%")
        })
    }

    const restartGame = () =>
    {
        getArena().forEach(element => {  
            element.innerHTML = "";
            element.removeAttribute("style")
            element.classList.remove("highlight")
        });

        currentTurn = 1;
        playerOne.getSpace().length = 0;
        playerTwo.getSpace().length = 0;

        setStatus([[0, 1, 2],
                   [3, 4, 5],
                   [6, 7, 8]]) ;

        clearInterval(highlightDelay);
    }

    return {
        getStatus,
        getTurn,
        startGame,
        restartGame
    }
}

const generateBoard = (() => 
{
    const play_arena = document.querySelector("#play_arena");
    const CELLS = 9;

    for (let i = 1; i <= CELLS; i++ )
    {
        const play_area = document.createElement("div");

        play_area.setAttribute("class", "play__arena-area");
        play_area.setAttribute("id", "area"+i);
        // play_area.innerHTML = i;
        play_arena.appendChild(play_area)
    }   

    return;
})();

const CrossPlayer = playerFactory("X");
const CirclePlayer = playerFactory("O");


const Arena = playArena(CrossPlayer, CirclePlayer);
Arena.startGame();
