var GameUI = cc.Layer.extend({
    levelText:null,
    scoreText:null,
    StepText:null,
    gameLayer:null,
    ctor:function (gameLayer) {
        this._super();
        this.gameLayer = gameLayer
        this._initInfoPanel()
    },
    _initInfoPanel:function () {
        var size = cc.director.getWinSize();
        var levelLable = new cc.LabelTTF("Level","arial",36);
        levelLable.x =100;
        levelLable.y = size.height -50;
        levelLable.setColor(cc.color(0,0,0));
        this.addChild(levelLable)
    },
    showScuccess:function () {
        var bg = new cc.LayerColor(cc.color(255,255,255),500,500);
        this.addChild(bg,1)
        var size = cc.director.getWinSize()
        bg.x = (size.width - bg.width) / 2;
        bg.y = (size.height  - bg.height) / 2;
        var setepText = new cc.LabelTTF("恭喜，已完成第"+ (this.gameLayer.level+1)+"关，剩余步数30倍奖励！","arrial",50);
        stepText.setColor(cc.color(0,0,0))
        setepText.x = 250
        setepText.y = 250
        bg.addChild(setepText)
    }




})
