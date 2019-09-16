(function(){

window.Zidan=function(x,y){
   this.idx=0;
   this.x = game.x;
   this.y = game.y;
   game.brr.push(this)
}
// 渲染我方飞机子弹
Zidan.prototype.dan=function(){
    this.idx-=10
    game.ctx.drawImage(game.date["zidan"],this.x-5,this.y-10+this.idx,60,60)

    if(this.y-10+this.idx<0){
        game.brr.splice(game.brr.indexOf(this),1)  
    }
}

 














})()