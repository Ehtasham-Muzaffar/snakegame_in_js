var GridSize=21
export function RandomgridPostion(){
    
return {
    x:Math.floor(Math.random() * GridSize) + 1,
    y:Math.floor(Math.random() * GridSize) + 1
}   
}

export function outSideGrid(postion){
    return(
        postion.x < 1 || postion.x > GridSize || postion.y < 1 || postion.y > GridSize
    )
}