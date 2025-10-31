const player = {
  x: window.innerWidth/2,
  y: window.innerHeight/2,
  size: 30,
  color: '#00f',
  speed: 5
};

const keys = {};
window.addEventListener('keydown', e=> keys[e.key.toLowerCase()]=true);
window.addEventListener('keyup', e=> keys[e.key.toLowerCase()]=false);

const mouse = {x:0,y:0};
window.addEventListener('mousemove', e=>{ mouse.x=e.clientX; mouse.y=e.clientY; });
