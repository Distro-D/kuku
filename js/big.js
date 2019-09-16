(function(){

window.Big=function(){
    this.w=100
    this.h=100
    this.x=_.random(0,450)
    this.y=0
    this.idx=0
    this.idy=0
    game.crr.push(this)
}

// 渲染大飞机
Big.prototype.render=function(){
    this.idx+=1.3
    game.ctx.drawImage(game.date["diji1"],this.x,this.y+this.idx,160,160)

    // 碰撞检测
    for(var j=0;j<game.brr.length;j++){     
        if( game.brr[j].x>this.x &&  game.brr[j].x+20<this.x+180 && game.brr[j].y+game.brr[j].idx +15<=this.y+this.idx){
        //    判断大飞机能碰撞几次
            this.idy++
            if(this.idy==16){
              // game.brr.splice(game.brr.indexOf(this),1) ; 
                game.crr.splice(game.crr.indexOf(this),1)  ;
            }       
        }
    }
}









})()