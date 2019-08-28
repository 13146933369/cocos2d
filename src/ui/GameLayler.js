var GameLayer = cc.Layer.extend({
    mapPanel: null,
    ui: null,
    score: 0,
    level: 0,
    steps: 0,
    limitStep: 0,
    targetScore: 0,
    map: [],
    moving: false,
    ctor: function () {
        this._super();
        //背景图
        var size = cc.winSize
        var bg = new cc.Sprite(res.bg)
        bg.x = size.width / 2
        bg.y = size.height / 2
        this.addChild(bg, 1)

        // 遮罩节点
        var clippingPanel = new cc.ClippingNode();
        this.addChild(clippingPanel, 2)
        this.mapPanel = new cc.Layer()
        this.mapPanel.x = (size.width - Constant.CANDY_WIDTH * Constant.MAP_SIZE) / 2
        this.mapPanel.y = (size.height - Constant.CANDY_WIDTH * Constant.MAP_SIZE) / 2
        clippingPanel.addChild(this.mapPanel, 1)

        var stencil = new cc.DrawNode();
        stencil.drawRect(cc.p(this.mapPanel.x, this.mapPanel.y), cc.p(this.mapPanel.x + Constant.CANDY_WIDTH * Constant.MAP_SIZE, this.mapPanel.y +
            Constant.CANDY_WIDTH * Constant.MAP_SIZE), cc.color(0, 0, 0), 1, cc.color(0, 0, 0))
        clippingPanel.stencil = stencil
        this._init()

        if ("touches" in cc.sys.capabilities) {
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                onTouchBegan: this._onTouchBegan.bind(this)
            }, this.mapPanel);

        } else {
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseDown: this._onMouseDown.bind(this)
            }, this.mapPanel);

        }
    },
    //小球初始化函数
    _init: function () {
        this.steps = 0;
        this.score = 0;
        this.level = 0;
        this.limitStep = 30;
        this.targetScore = 100;
        this.map = [];
        for (var i = 0; i < Constant.MAP_SIZE; i++) {
            var column = []
            for (var j = 0; j < Constant.MAP_SIZE; j++) {
                var candy = Candy.createRandomType(i,j)
                this.mapPanel.addChild(candy)
                candy.x = i * Constant.CANDY_WIDTH + Constant.CANDY_WIDTH / 2;
                candy.y = j * Constant.CANDY_WIDTH + Constant.CANDY_WIDTH / 2
                column.push(candy)
            }
            this.map.push(column)
        }
    },
    //点击糖果获取单个糖果坐标
    _onTouchBegan: function (touch, event) {
        var column = Math.floor((touch.getLocation().x - this.mapPanel.x) / Constant.CANDY_WIDTH);
        var row = Math.floor((touch.getLocation().y - this.mapPanel.y ) / Constant.CANDY_WIDTH)
        this._popCandy(column, row)
    },
    _onMouseDown: function () {
        console.log(event)
    },
    _popCandy: function (column, row) {
        if (this.moving) {
            return
        }
        var joinCandys =[this.map[column][row]]
        var index =0;
        var pushIntoCandys = function (element) {
                if(joinCandys.indexOf(element) < 0){
                    joinCandys.push(element);
                }
        }
        while(index < joinCandys.length){
            var candy = joinCandys[index];
            if(this._checkCandyExist(column-1,candy.row) && this.map[candy.column-1][candy.row].type == candy.type){
                pushIntoCandys(this.map[candy.column-1][candy.row])
            }
            if(this._checkCandyExist(column+1,candy.row) && this.map[candy.column+1][candy.row].type == candy.type){
                pushIntoCandys(this.map[candy.column+1][candy.row])
            }
            if(this._checkCandyExist(column,candy.row-1) && this.map[candy.column][candy.row-1].type == candy.type){
                pushIntoCandys(this.map[candy.column][candy.row-1])
            }
            if(this._checkCandyExist(column,candy.row+1) && this.map[candy.column][candy.row+1].type == candy.type){
                pushIntoCandys(this.map[candy.column][candy.row+1])
            }
            index++
        }
        if(joinCandys.length <=1){
            return
        }
        this.steps++
        for(var i=0;i < joinCandys.length;i++){
            var candy = joinCandys[i];
            this.mapPanel.removeChild(candy);
            this.map[candy.column][candy.row] = null;
            
        }
    },
    _checkCandyExist:function (i,j) {
        if(i >= 0 && i< Constant.MAP_SIZE && j >= 0 && j < Constant.MAP_SIZE){
            return true
        }else{
            return false
        }

    }

})





