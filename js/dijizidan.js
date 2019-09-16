(function(){

window.Dijizidan=function(){
    this.idx=0
    this.x=100
    this.y=100
    game.crr.push(this)







}

Dijiziidan.prototype.dan=function(){
    this.idx+=10
    game.ctx.drawImage(game.date["dijizidan"],this.x+5,this.y-10+this.idx,80,80)
}















})()