(function () {

    window.Game = function (a, b) {
        this.canvas = document.querySelector("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.x = 0,
            this.y = 0,
            // new背景
            this.background = new Background

        // 我方飞机
        this.feiji = new Feiji
        //  // 大敌机
        //  this.big=new Big
        // 图片管理
        this.loadfile()
        // 绑定事件获取鼠标坐标
        this.bind()
        this.yinyue()

    }

    // 图片管理
    Game.prototype.loadfile = function () {
        var self = this
        this.date = {
            "bj": "img/5.jpg",
            "zidan": "img/10.png",
            "feiji": "img/1.png",
            "diji": "img/13.png",
            "diji1": "img/14.png",
            "diji2": "img/17.png",
            "diji3": "img/16.png",
            "diji4": "img/15.png",
            "dijizidan": "img/20.png"
        }
        var allcount = Object.keys(this.date).length
        var count = 0
        // 循环遍历json并赋值
        for (k in this.date) {
            var src = this.date[k]
            this.date[k] = new Image
            this.date[k].src = src
            // 加载图片
            this.date[k].onload = function () {
                count++
            if (count == allcount) {
            // 图片加载完毕后执行
                self.start()
                }
            }
        }
    }

    Game.prototype.start = function () {
        var self = this
        // 渲染敌机的量
        this.frame = 0;
        // 渲染我方子弹的量
        this.a = 0
        // 渲染大飞机
        this.b = 0
        this.arr = [];
        this.brr = []
        this.crr = []
        // 调用定时器
        setInterval(function () {
            // 清屏
            self.ctx.clearRect(0, 0, 512, 768)
            // 渲染画布背景
            self.background.render()
            // 渲染大飞机
            self.feiji.render()


            // 渲染敌机
            self.frame++;
            self.frame % 40 == 0 && new Diren;
            for (var i = 0; i < self.arr.length; i++) {
                self.arr[i].dong()
            }


            // 渲染子弹
            self.a++
            self.a % 6 == 0 && new Zidan;
            for (var j = 0; j < self.brr.length; j++) {
                self.brr[j].dan()
            }


            //  渲染大飞机
            self.b++
            self.b % 200 == 0 && new Big;
            for (var k = 0; k < self.crr.length; k++) {
                self.crr[k].render()
            }

             }, 40)
         }

        // 绑定事件获取鼠标的位置
         Game.prototype.bind = function () {
            var self = this
            this.canvas.onmousemove = function (event) {
                self.x = event.offsetX;
                self.y = event.offsetY;
        }

    }
     // 按键盘音乐响起
      Game.prototype.yinyue = function () {
         onkeydown = function (event) {
            if (event.keyCode == 32) {
                c.play()
            }
         }

    }
















})()