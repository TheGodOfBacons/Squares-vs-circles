const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let nextWaveTimer = 0;

function gameLoop(){
  ctx.fillStyle='#111';
  ctx.fillRect(0,0,width,height);

  // Player movement
  if(keys['w']) player.y-=player.speed;
  if(keys['s']) player.y+=player.speed;
  if(keys['a']) player.x-=player.speed;
  if(keys['d']) player.x+=player.speed;

  // Draw player
  ctx.fillStyle=player.color;
  ctx.beginPath();
  ctx.arc(player.x,player.y,player.size,0,Math.PI*2);
  ctx.fill();

  // Projectiles
  projectiles.forEach((p,i)=>{
    p.x+=p.dx; p.y+=p.dy;
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fill();

    enemies.forEach((e,j)=>{
      let dx=e.x-p.x, dy=e.y-p.y;
      if(Math.sqrt(dx*dx+dy*dy)<e.size/2+p.size){
        e.hp -= p.damage;
        if(e.hp<=0){
          enemies.splice(j,1);
          money+=10; score+=1;
          if(score>highscore) highscore=score;
          updateHUD();
        }
        if(!p.melee) projectiles.splice(i,1);
      }
    });
  });

  // Draw enemies
  ctx.fillStyle='red';
  enemies.forEach(e=>{
    let dx=player.x-e.x, dy=player.y-e.y;
    let dist=Math.sqrt(dx*dx+dy*dy);
    if(dist>0){ e.x+=dx/dist*e.speed; e.y+=dy/dist*e.speed; }
    ctx.fillRect(e.x-e.size/2,e.y-e.size/2,e.size,e.size);
    ctx.fillStyle='#fff';
    ctx.font='20px Arial';
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(e.symbol,e.x,e.y);
    ctx.fillStyle='red';
  });

  // Next wave
  if(enemies.length===0){
    nextWaveTimer++;
    if(nextWaveTimer>120){
      wave++; spawnWave(); nextWaveTimer=0;
    }
  } else nextWaveTimer=0;

  updateAmmoHUD();
  requestAnimationFrame(gameLoop);
}

spawnWave(); updateHUD(); gameLoop();

window.addEventListener('resize',()=>{
  width=window.innerWidth; height=window.innerHeight;
  canvas.width=width; canvas.height=height;
});
