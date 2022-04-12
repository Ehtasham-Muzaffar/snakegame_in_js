var log = console.log
let lastrendertime
var gameBorad = document.getElementById("game-borde")
var gameover=false
import { Speed_Sanke, update as updatesnake, draw as drawsnake } from "./snake.js";
import {update as updatefood , draw as drawfood  } from './food.js';
import {snakeIntersection,getSnakeHead } from './snake.js'
import { outSideGrid} from './grid.js'
// debugger;
log(Speed_Sanke)
function main(currentTime) {
    if(gameover){
        alert("game over")
    }
    window.requestAnimationFrame(main)
    let secondSineceLastRender = (currentTime - lastrendertime) / 1000
    if (secondSineceLastRender < 1 / Speed_Sanke) return


    lastrendertime = currentTime
    log("render")
    update()
    draw()
}
window.requestAnimationFrame(main)

function update() {
    updatesnake()
    updatefood()
    checkDeath()
}

function draw() {
    gameBorad.innerHTML = ''
    drawsnake(gameBorad)
    drawfood(gameBorad)
}
function checkDeath(){  
    gameover = outSideGrid(getSnakeHead()) || snakeIntersection()
}