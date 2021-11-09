import React from 'react'
import useCanvas from './useCanvas'

const Canvas = props => {  
  const draw = (ctx, frameCount) =>{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()

  }
  const { ...rest } = props
  const canvasRef = useCanvas(draw)
  
function onClickButton() {
  console.log("clicked")
  fetch('/test')
}

  return (
    <div>
    <button onClick={onClickButton}> Click </button>
    <canvas ref={canvasRef} {...rest}/>
    </div>
  )
}

export default Canvas