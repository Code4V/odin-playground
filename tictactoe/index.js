// PLAYER FACTORY
const playerFactory = (playershape) => 
{
    
    const occupied_space = [];
    var player_name;
    var player_score = 0;

    function getPlayer() { return playershape }
    function getSpace() { return occupied_space }
    function getName() { return player_name }
    function getScore() { return player_score }

    function setName(playerName) { player_name = playerName }
    function addScore() {player_score++}
    

    function insertSpace(space) { occupied_space.push(space) }

    return {
        getPlayer,
        getSpace,
        getName,
        getScore,
        setName,
        insertSpace,
        addScore
    }
}

const scoreBoard = (() =>
{
    const turnby = document.querySelector("#turnby")
    const scores = document.querySelectorAll(".scoreboard__player span")

    const updateTurn = (turn) =>
    {
        turnby.innerHTML = turn;
    }

    const updateScore = (player) =>
    {
        const isFirst = 'X';
        if(player.getPlayer() == isFirst)
            scores[0].innerHTML = player.getScore();
        else 
            scores[1].innerHTML = player.getScore();

    }
    
    return {
        updateTurn,
        updateScore
    }
    ;
})();

// ARENA EVENTS
const gameState = (() =>
{
    const { updateTurn, updateScore } = scoreBoard;
    var playerOne, playerTwo;
    var highlightDelay;
    let currentTurn = 1;
    var play_status  = [[0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8]];

    const getTurn = () => 
    {
        return turn = (currentTurn % 2) ? 
                    `${currentTurn} -> ${playerTwo.getName()}'s Turn` :
                    `${currentTurn} -> ${playerOne.getName()}'s Turn`;
    }
    
    const getArena = () => 
    {
        const play_areas = document.querySelectorAll(".play__arena-area");
        return play_areas;
    }

    const setPlayers = (setPlayerOne, setPlayerTwo) => 
    {
        const playerBoardOne = document.querySelector('.scoreboard__player-one>p');
        const playerBoardTwo = document.querySelector('.scoreboard__player-two>p');
        playerOne = setPlayerOne;
        playerTwo = setPlayerTwo;

        playerBoardOne.innerHTML = playerOne.getName();
        playerBoardTwo.innerHTML = playerTwo.getName();
    }

    const setStatus = (setter) => 
    { 
        play_status = setter 
    }

    const getStatus = () => 
    { 
        return play_status 
    }

    const checkStatus = (player) => 
    {
        const playerSpace = player.getSpace();
        const winning_combinations = [[0, 1, 2],[3, 4, 5],
                                      [6, 7, 8],[0, 3, 6],
                                      [1, 4, 7],[2, 5, 8],
                                      [0, 4, 8],[2, 4, 6]];

        if (currentTurn == 10)
        {
            updateTurn("It's a Tie!")
        }

        winning_combinations.forEach((element)=>
        {
           
            let filtered = element.filter(innerElement => {
                if(playerSpace.includes(innerElement))
                {
                    return true;
                }
                else return false;
            });
            
            if(filtered.length != 3)
            {
                return;
            }

            highlightDelay = setInterval(function highlightTiles () {
                for (let i = 0 ; i < 3 ; i++)
                {
                    const node = document.getElementById("area"+(filtered[i]+1))
                    
                    node.classList.toggle("highlight")
                    
                    node.style.animationDelay = (150 * i) + "ms";
                }
            }, 1000);

            player.addScore();
            updateScore(player)
            updateTurn(player.getName() + " Won! ")
            finishGame(filtered);

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
                    innerElement.splice(iikey, 1, currentPlayer.getPlayer())
                    
                }
            })
        })
       
        
        updateTurn(getTurn())
        checkStatus(currentPlayer)
    }

    const startGame = () => 
    {
        const play_areas = getArena()
        updateTurn(getTurn())
        play_areas.forEach((element, key)=>{
            
            element.addEventListener("click", () => {
                try{
                    if(element.innerHTML === playerOne.getPlayer() || 
                       element.innerHTML === playerTwo.getPlayer()) 
                       throw "Illegal Move!"
                    
                    if(currentTurn % 2)
                    {
                        
                        playerOne.insertSpace(parseInt(key));
                        element.innerHTML = playerOne.getPlayer();
                        currentTurn++;
                        updateStatus(key, playerOne);
                        
                       
                    }  
                    else
                    {
                        playerTwo.insertSpace(parseInt(key));
                        element.innerHTML = playerTwo.getPlayer();
                        currentTurn++;
                        updateStatus(key, playerTwo);
                   
                    }
    
                    
                }
                catch(error)
                {
                    alert(error)
                }
                
            });
        });
    }

    const finishGame = (excluded) =>
    {
        getArena().forEach(element => {  
            element.setAttribute("style", "pointer-events:none")

            if(!excluded.includes(
                         parseInt(element.getAttribute("id").slice(4)-1)))
            {
                element.setAttribute("style",
                                     "opacity:50%; pointer-events:none");
            }
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
        
        updateTurn(getTurn())

        clearInterval(highlightDelay);
    }

    return {
        getStatus,
        getTurn,
        setPlayers,
        startGame,
        restartGame
    }
})();

// CREATES THE TILES
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

// THEME PICKER 
(() => {
    const colorpicker = document.querySelectorAll(".colorpicker__selection")
    const rootStyle = document.documentElement.style
    const colors = {
                    "theme1": [ "--brown", "--green" ],
                    "theme2": [ "--orange", "--red" ],
                    "theme3": [ "--purple", "--green" ],
                    }               

    colorpicker.forEach(element => {
        element.addEventListener('click', ()=>{
            if(element.id === "theme1")
            {
                rootStyle.setProperty('--primary-color', 
                                      `var(${colors[element.id][0]})`);
                rootStyle.setProperty('--secondary-color', 
                                      `var(${colors[element.id][1]})`);
            }
            if(element.id === "theme2")
            {
                rootStyle.setProperty('--primary-color', 
                                      `var(${colors[element.id][0]})`);
                rootStyle.setProperty('--secondary-color', 
                                      `var(${colors[element.id][1]})`);
            }
            if(element.id === "theme3")
            {
                rootStyle.setProperty('--primary-color', 
                                      `var(${colors[element.id][0]})`);
                rootStyle.setProperty('--secondary-color', 
                                      `var(${colors[element.id][1]})`);
            }
        })
    })
})();


const CrossPlayer = playerFactory("X");
const CirclePlayer = playerFactory("O");

const play = document.querySelector(".play");
const board = document.querySelector(".scoreboard")

const form = document.forms['register'];

const register = document.querySelector(".register");

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    var playerName1 = form.elements['player1'].value;
    var playerName2 = form.elements['player2'].value;

    if(!playerName1.localeCompare(playerName2))
    {
        alert("Players cant have the same name");
        return false;
    }

    CrossPlayer.setName(playerName1)
    CirclePlayer.setName(playerName2)

    play.classList.toggle('show')
    board.classList.toggle('show')
    gameState.setPlayers(CrossPlayer, CirclePlayer)
    gameState.startGame();

    register.setAttribute("style", "display: none;")
})

// const Arena = playArena(CrossPlayer, CirclePlayer);



