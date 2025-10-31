let projectiles = [];

window.addEventListener('mousedown', ()=>{
  const w = weapons[player.activeWeapon];
  if(w.type==='ranged'){
    if(w.ammo<=0) return;
    w.ammo--;
    updateAmmoHUD();
    const dx = mouse.x - player.x;
    const dy = mouse.y - player.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    projectiles.push({x:player.x, y:player.y, dx:dx/dist*10, dy:dy/dist*10, size:5, damage:w.damage});
  } else if(w.type==='melee'){
    const dx = mouse.x - player.x;
    const dy = mouse.y - player.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    projectiles.push({x:player.x, y:player.y, dx:dx/dist*15, dy:dy/dist*15, size:15, damage:w.damage, melee:true});
  }
});
