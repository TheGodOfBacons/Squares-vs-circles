let projectiles = [];

window.addEventListener('mousedown', ()=>{
  const dx = mouse.x - player.x;
  const dy = mouse.y - player.y;
  const dist = Math.sqrt(dx*dx + dy*dy);
  projectiles.push({x:player.x, y:player.y, dx:dx/dist*10, dy:dy/dist*10, size:5});
});
