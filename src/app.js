
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        // 初期化？
        this._super();

        // ウィンドウサイズを取得
        var size = cc.director.getWinSize();

        /////////////////////////////
        // 背景イメージのスプライトを作成
        /////////////////////////////
        // どうやらレイヤーの 0 が一番奥である模様
        this.back_img = cc.Sprite.create(res.Back_jpg);
        // 中心を指定する模様
        this.back_img.x = size.width / 2;
        this.back_img.y = size.height / 2;
        this.addChild(this.back_img, 0)

        /////////////////////////////
        // UFOのスプライトを作成
        /////////////////////////////
        this.ufo = cc.Sprite.create(res.UFO_png);
        //this.ufo.x = size.width /2;
        this.ufo.x = 100;
        this.ufo.y = size.height /2;
        this.addChild(this.ufo, 5)

        /////////////////////////////
        // UFOの動きを定義
        /////////////////////////////
        // 1秒で右に200移動
        var act1 = cc.MoveBy.create(1, cc.p(200 , 0));
        // 0.5秒づつジクザグに
        var act2 = cc.MoveBy.create(0.5, cc.p(100 , 100));
        var act3 = cc.MoveBy.create(0.5, cc.p(100 , -200));
        var act4 = cc.MoveBy.create(0.5, cc.p(100 , 200));
        var act5 = cc.MoveBy.create(0.5, cc.p(100 , -200));
        // 0.5秒で左上に移動しながら10分の1に縮小
        var act6 = cc.Spawn.create(cc.MoveBy.create(0.5, cc.p(-600, 100)), cc.ScaleTo.create(0.5, 0.1, 0.1));
        // アクションを実行
        this.ufo.runAction(cc.Sequence.create(act1, act2, act3, act4, act5, act6));

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

