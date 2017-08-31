let canvas, ctx, player

function init() {
  canvas = document.getElementById("canvas")
  ctx = canvas.getContext( "2d" )
  resizeCanvas()
  
  const center = { 
    x: canvas.width / 2, 
    y: canvas.height / 2 - 10 
  }

  player = new Player(
    ctx, 
    center.x, 
    center.y
  )
  
  player.dest = center
  
  window.onresize = resizeCanvas
  
  canvas.onmousemove = mousemove
  canvas.ontouchmove = mousemove
  canvas.ontouchstart = mousemove
  
  step()
}

function mousemove( e ) {
  e.preventDefault()
  
  let clientX = e.clientX || e.touches[0].pageX
  let clientY = e.clientY || e.touches[0].pageY
  
  player.dest.x = clientX * devicePixelRatio
  player.dest.y = clientY * devicePixelRatio
}

function step() {
  ctx.clearRect( 0, 0, canvas.width, canvas.height )
  player.step()
  requestAnimationFrame( step )
}

init()

