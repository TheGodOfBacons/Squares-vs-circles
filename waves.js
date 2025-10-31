let wave = 1;
let money = 0, score = 0, highscore = 0;

function spawnWave(){
  enemies = [];
  let count = 5 + wave;
  for(let i=0;i<count;i++){
    let type='normal';
    if(i%5==0 && wave>2) type='speedster';
    if(i%7==0 && wave>5) type='giant';
    enemies.push(new Enemy(type, Math.random()*window.innerWidth, Math.random()*window.innerHeight));
  }
}

function updateHUD(){
  document.getElementById('money').textContent = money;
  document.getElementById('score').textContent = score;
  document.getElementById('highscore').textContent = highscore;
}
