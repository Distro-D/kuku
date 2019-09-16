(function(){

window.Background=function(){
     this.w=512
     this.h=768
     this.idx=0
}
Background.prototype.render=function(){
    this.idx-=5
    if(this.idx<-this.h){
        this.idx=0
    }
    game.ctx.drawImage(game.date["bj"],0,-this.idx)
    game.ctx.drawImage(game.date["bj"],0,-this.h+(-this.idx))
   
}























})()