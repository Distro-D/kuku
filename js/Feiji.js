(function(){

window.Feiji=function(){
// 飞机的宽高
   this.w=112
   this.h=112
//    信号量
   this.idx=0

}

// 渲染飞机
Feiji.prototype.render=function(){
    game.ctx.drawImage(game.date["feiji"],game.x-40,game.y-30,130,130) 
}
})()