var inputDireaction ={x:0,y:0}
var lastinputDireaction ={x:0,y:0}
window.addEventListener('keydown',(e)=>{

    switch(e.key){
        case"ArrowUp":
        console.log(e.key)
        if(lastinputDireaction.y !== 0) break
        inputDireaction = {x: 0 , y : -1}
        break
        case"ArrowDown":
        console.log(e.key)
        if(lastinputDireaction.y !== 0) break
        inputDireaction = {x:0,y:1}
        break
        case"ArrowLeft":
        console.log(e.key)
        if(lastinputDireaction.x !== 0) break
        inputDireaction = {x:-1,y:0}
        break
        case"ArrowRight":
        console.log(e.key)
        if(lastinputDireaction.x !== 0) break
        inputDireaction = {x:1,y:0}
        break
    }
})
export function getInputDirection(){
    lastinputDireaction = inputDireaction
    return inputDireaction
}