import {expandSnake , onsnake} from './snake.js'
import {RandomgridPostion} from './grid.js'
let food=RandomgridPostion()
const Expenstion_rate=1 
function update(){
    if(onsnake(food)){
        food=RandomgridPostion()
    expandSnake(Expenstion_rate)
    }
    }
function draw(gameBorad){
    console.log("draw a snake")
    
const foodELement= document.createElement("div")
foodELement.style.gridRowStart = food.y
foodELement.style.gridColumnStart =food.x
foodELement.classList.add("food")
gameBorad.appendChild(foodELement)
    

}
function getRandomFoodPostion(){
    let newFoodPostion
    while(newFoodPostion == null || onsnake(newFoodPostion)){
        newFoodPostion = RandomgridPostion()
    }
}
export {update ,draw}