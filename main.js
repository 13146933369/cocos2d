
window.onload = function(){

    cc.game.onStart = function(){
      
        cc.LoaderScene.preload(g_resources, function () {

            cc.view.adjustViewPort(true)
            cc.view.setDesignResolutionSize(Constant.GAME_WIDTH ,Constant.GAME_HEIGHT,cc.ResolutionPolicy.SHOW_ALL)
            cc.view.resizeWithBrowserSize(true)
            var game = new GameScene();
            cc.director.runScene(game);
        }, this);
    };
    cc.game.run("gameCanvas");
};