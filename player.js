const weapons = {
  fists: {name:'Fists', type:'melee', damage:10, ammo:Infinity},
  pistol: {name:'Pistol', type:'ranged', damage:20, ammo:15},
  katana: {name:'Katana', type:'melee', damage:30, ammo:Infinity}
};

const player = {
  x: window.innerWidth/2,
  y: window.innerHeight/2,
  size: 30,
  color: '#00f',
  speed: 5,
  activeWeapon: 'fists'
};

const keys = {};
window.addEventListener('keydown', e=> keys[e.key.toLowerCase()]=true);
window.addEventListener('keyup', e=> keys[e.key.toLowerCase()]=false);

const mouse = {x:0,y:0};
window.addEventListener('mousemove', e=>{ mouse.x=e.clientX; mouse.y=e.clientY; });

// Weapon switching
window.addEventListener('keydown', e=>{
  if(e.key==='1') {player.activeWeapon='fists'; updateAmmoHUD();}
  if(e.key==='2') {player.activeWeapon='pistol'; updateAmmoHUD();}
  if(e.key==='3') {player.activeWeapon='katana'; updateAmmoHUD();}
});

function getAmmo(){
  const w = weapons[player.activeWeapon];
  return w.ammo===Infinity ? '∞' : w.ammo;
}

function updateAmmoHUD(){
  document.getElementById('ammo').textContent = getAmmo();
}
