(function(){

    window.Diren=function(){
        // 敌人在x方向上的随机出现
        this.x=_.random(0,450)
        this.x1=_.random(0,450)
        this.x2=_.random(0,450)
        this.x3=_.random(0,450)
        this.x4=_.random(0,450)
        // 敌人在y方向随机出现
        this.y=0
        this.c=_.random(10,20)
        this.b=_.random(10,20)
        this.d=_.random(10,20)
        this.f=_.random(10,20)
       
      
        // 信号量
        this.idx=0
        this.aidx=0
        this.idx1=0
        this.idx2=0
        this.idx3=0
        this.idx4=0
       
        // 用数组管理
       game.arr.push(this)
       
    }
    // 第一个敌机
    Diren.prototype.dong=function(){
        // 敌机速度
        this.idx+=6.5
        game.ctx.drawImage(game.date["diji"],this.x1,this.y+this.idx,70,70)

         // 子弹速度
         this.aidx+=10
        game.ctx.drawImage(game.date["dijizidan"],this.x1+9,this.y+this.aidx,30,30)
       
    //    渲染碰撞
                 for(var j=0;j<game.brr.length;j++){
                    
             if( game.brr[j].x>this.x1 &&  game.brr[j].x+20<this.x1+70 && game.brr[j].y+game.brr[j].idx <=this.aidx+0){
           
                        game.brr.splice(game.brr.indexOf(this),1) ; 
                        game.arr.splice(game.arr.indexOf(this),1)  ;
                      
              }
                 }
         
          
        


    }






    
   
    // // 第二个敌机
    // Diren.prototype.dong1=function(){
    //     this.idx1+=7.5
    //     game.ctx.drawImage(game.date["diji1"],this.x2,this.c+this.idx1,100,100)
    //     // 子弹
    //     this.aidx+=7
    //     game.ctx.drawImage(game.date["dijizidan"],this.x2,this.c+this.idx1+this.aidx,30,30)

    //     // 渲染第二个敌机位置

    // }
    // // 第三个敌机
    // Diren.prototype.dong2=function(){
    //     this.idx2+=8.5
    //     game.ctx.drawImage(game.date["diji2"],this.x,this.b+this.idx2,50,50)
    //      // 子弹
    //      // 子弹速度
    //      this.aidx+=7
    //     game.ctx.drawImage(game.date["dijizidan"],this.x+9,this.b+this.idx2+this.aidx,30,30)
    // }
    // // 第四个敌机
    // Diren.prototype.dong3=function(){
    //     this.idx3+=4.5
    //     game.ctx.drawImage(game.date["diji3"],this.x3,this.d+this.idx3,50,50)
    //      // 子弹
    //      // 子弹速度
    //      this.aidx+=7
    //     game.ctx.drawImage(game.date["dijizidan"],this.x3+9,this.d+this.idx3+this.aidx,30,30)
    // }
    // // 第五个敌机
    // Diren.prototype.dong4=function(){
    //     this.idx4+=5.9
    //     game.ctx.drawImage(game.date["diji4"],this.x4,this.f+this.idx2,50,50)
    //      // 子弹
    //      // 子弹速度
    //      this.aidx+=7
    //     game.ctx.drawImage(game.date["dijizidan"],this.x4+9,this.f+this.idx2+this.aidx,30,30)
    // }

    





















    
    // Diren.prototype.dong1=function(){
    //     this.idx+=this.c
    //     game.ctx.drawImage(game.date["diji"],this.x,this.y+this.idx,70,70)
    //     game.ctx.drawImage(game.date["diji1"],this.x+100,(this.y+30)+this.idx,70,70)
    //     game.ctx.drawImage(game.date["diji2"],this.x-100,(this.y+30)+this.idx,70,70)
    // }

   

    // Diren.prototype.dong1=function(){
    //     this.idx1+=7.5
    //     game.ctx.drawImage(game.date["diji1"],this.x2,this.c+this.idx1,50,50)
    //     // 子弹
    //     this.aidx+=7
    //     game.ctx.drawImage(game.date["dijizidan"],this.x2,this.c+this.idx1+this.aidx,80,80)

    //     // 渲染第二个敌机位置

    // }







})()