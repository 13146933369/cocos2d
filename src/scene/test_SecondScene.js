/**
 * Created by Administrator on 2019/8/20 0020.
 */
var SecondScene = cc.Scene.extend({
    deltaX:1,
    ball:null,
    frame:0,
    bg:null,
    ctor: function () {
        this._super()
        var size = cc.director.getWinSize()
        var layer = new cc.Layer(cc.color(100,100,100,))
        this.addChild(layer,100)
        var ballBg = new cc.Sprite(res.success)
        ballBg.x = size.width / 2
        ballBg.y = size.height / 2
        layer.addChild(ballBg)

        var ball  =  new cc.Sprite(res.musicoff)
        ball.x = 300
        ball.y = size.height /2
        layer.addChild(ball,1)
        var action3 =  cc.moveTo(10,cc.p(size.width,size.height/2))
        var action = cc.tintTo(0.5,2,100,0,0)
        var action2 = cc.tintTo(0.5,255,255,255)
        // ball.runAction(cc.sequence(action,action3))
        ball.runAction(cc.spawn(action,action3))
        //监听测试
         var listenter = cc.EventListener.create({
             event: cc.EventListener.TOUCH_ALL_AT_ONCE,
             onTouchBegan:function (touches,event) {
                 console.log(2121212)
             }
         },layer)
        // var layerTwo = cc.Layer.extend({
        //     ctor:function () {
        //       this._super()
        //       if('mouse' in cc.sys.capabilities){
        //             cc.eventManager.addListener({
        //                 event: cc.EventListener.MOUSE,
        //                 onMouseDown:function (event) {
        //                     var pos = event.getLocation()
        //                     console.log(pos)
        //                     if(event.getButton() === cc.EventMouse.BUTTON_LEFT){
        //
        //                     }
        //                 },
        //                 onMouseMove:function (event) {
        //                     console.log(1212121)
        //                 },
        //                 onMouseUp:function (event) {
        //                     console.log(22222222)
        //                 }
        //
        //
        //             },layerTwo);
        //         }
        //
        //
        //     }
        //
        //
        // })





        // if('mouse' in cc.sys.capabilities){
        //     cc.eventManager.addListener({
        //         event:cc.EventListener.MOUSE,
        //         onMouseDown:function () {
        //             // var pos = event.getLocation();
        //             // var target = getCurrentTimeStep();
        //             // if(event.getButton() === cc.EventMouse.BUTTON_LEFT){
        //             //     console.log(pos.x + " " +pos.y)
        //             // }else if(event.getButton() == cc.EventMouse.BUTTON_LEFT){
        //             //     console.log(pos.x+""+pos.y)
        //             // }
        //         }
        //     })
        // }




        //this.ball = ball
        //this.bg = new cc.DrawNode() // 用于记录球的运动轨迹
        //layer.addChild(this.bg)
        //// this.scheduleUpdate()
    },





    // update:function () {
    //     var size =  cc.director.getWinSize()
    //     this.ball.x += this.deltaX;
    //     if(this.ball.x >=size.width || this.ball <= 0){
    //         this.deltaX *=-1;
    //     }
    //     this.ball.y =Math.sin(this.frame/20)*50 + size.height/2;
    //     this.bg.drawDot(new cc.Point(this.ball.x,this.ball.y), 2 ,cc.color(255,0,0))
    //     this.frame++
    // }
})
