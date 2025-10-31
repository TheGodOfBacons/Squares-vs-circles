class Enemy {
  constructor(type,x,y){
    this.type = type;
    this.x = x;
    this.y = y;
    this.size = 30;
    switch(type){
      case 'normal': this.hp=50; this.speed=1; this.symbol='■'; break;
      case 'speedster': this.hp=20; this.speed=2; this.symbol='⚡'; break;
      case 'giant': this.hp=100; this.speed=0.7; this.symbol='↑'; break;
    }
  }
}

let enemies = [];
