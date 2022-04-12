import { getInputDirection } from "./input.js"

 var Speed_Sanke = 5
var snakeBody=[
    {x:11, y:11},
]
var newSegment=0


 function update(){
     addSegment()
    let input = getInputDirection()
for(let i=snakeBody.length-2;i>=0;i--){
    
    snakeBody[i+1]={ ...snakeBody[i]}
    
} 
snakeBody[0].x +=input.x
snakeBody[0].y +=input.y
    }
function draw(gameBorad){
    console.log("draw a snake")
    snakeBody.forEach(segment =>{
const snakeELement= document.createElement("div")
snakeELement.style.gridRowStart = segment.y
snakeELement.style.gridColumnStart = segment.x
snakeELement.classList.add("snake")
gameBorad.appendChild(snakeELement)
    })

}

function expandSnake(amount){
    newSegment+= amount
}

function onsnake(postion , {ignoreHead=false } = {}){
    return snakeBody.some((segment,index) =>{ 
        if(index===0 && ignoreHead) return false
        return equalPostion(segment,postion)
    })

}

export function snakeIntersection(){
    return onsnake(snakeBody[0],{ignoreHead:true})
}

function equalPostion(pos1,pos2){
    return pos1.x===pos2.x && pos1.y===pos2.y
}
export function getSnakeHead(){
    return snakeBody[0]
}
function addSegment(){
    for(let i=0;i<newSegment;i++){
        // debugger;
        snakeBody.push({ ...snakeBody[snakeBody.length-1]})
    }
    newSegment=0
}

export {Speed_Sanke , update ,draw , expandSnake,onsnake}