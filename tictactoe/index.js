
const play_arena = document.querySelector("#play_arena")

const play_areas = document.querySelectorAll(".play_area")

const playerFactory = (playershape) => 
{
    function getPlayer() { return playershape }

    return {
        getPlayer
    }
}

const CrossPlayer = playerFactory("X");
const CirclePlayer = playerFactory("O");

var currentTurn = 1;

var play_status = [[0, 1, 2],[3, 4, 5],[6, 7, 8]];



play_areas.forEach((element, key)=>{

    element.addEventListener("click", () => {
        if(currentTurn % 2)
        {
            element.innerHTML = CrossPlayer.getPlayer();
            currentTurn++;
        }  
        else
        {
            element.innerHTML = CirclePlayer.getPlayer();
            currentTurn++;
        }
        
    });
});





console.log(CrossPlayer.getPlayer())