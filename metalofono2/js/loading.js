//  The Google WebFont Loader will look for this object, so create it before loading the script.
WebFontConfig = {
    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
        families: ['Changa One']
    }
};
var cargando,logo,cargando_txt;

var PreloadState={
    preload:function () {


        //  Load the Google WebFont Loader script
        juego.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

        juego.load.image('demo', 'img/demo01.png');
        juego.load.image('play', 'img/jugar01.png');

        shake = new Phaser.Plugin.Shake(juego);

        juego.load.image("base", "img/base.png");

        juego.load.image("tapa_atras", "img/tapa_atras.png");
        juego.load.image("juego_terminado", "img/juego_terminado.png");

        juego.load.image("tooltip", "img/tooltip.png");

        juego.load.image("volver", "img/volver.png");

        juego.load.image("met_01", "img/metal01.png");
        juego.load.image("met_02", "img/metal02.png");
        juego.load.image("met_03", "img/metal03.png");
        juego.load.image("met_04", "img/metal04.png");
        juego.load.image("met_05", "img/metal05.png");
        juego.load.image("met_06", "img/metal06.png");
        juego.load.image("met_07", "img/metal07.png");
        juego.load.image("met_08", "img/metal08.png");
        juego.load.image("met_09", "img/metal09.png");
        juego.load.image("met_10", "img/metal10.png");

        juego.load.image("ficha", "img/ball_w.png");

        juego.load.image("guia0", "img/circ00.png");
        juego.load.image("guia1", "img/circ01.png");
        juego.load.image("guia2", "img/circ02.png");
        juego.load.image("guia3", "img/circ03.png");
        juego.load.image("guia4", "img/circ04.png");
        juego.load.image("guia5", "img/circ05.png");
        juego.load.image("guia6", "img/circ06.png");
        juego.load.image("guia7", "img/circ07.png");
        juego.load.image("guia8", "img/circ08.png");
        juego.load.image("guia9", "img/circ09.png");
        juego.load.image("guia10", "img/circ10.png");
        juego.load.image("lineanegra", "img/linea_negra.png");
        juego.load.image("linea", "img/linea.png");

        juego.load.audio("nota_01", "notas/1_ROJO_DO.mp3");
        juego.load.audio("nota_02", "notas/2_NARANJA_RE.mp3");
        juego.load.audio("nota_03", "notas/3_AMARILLO_MI.mp3");
        juego.load.audio("nota_04", "notas/4_VERDE_FA.mp3");
        juego.load.audio("nota_05", "notas/5_AZUL_SOL.mp3");
        juego.load.audio("nota_06", "notas/6_LILA_LA.mp3");
        juego.load.audio("nota_07", "notas/7_BLANCO_SI.mp3");
        juego.load.audio("nota_08", "notas/8_ROJO_DO.mp3");
        juego.load.audio("nota_09", "notas/9_NARANJA_RE.mp3");
        juego.load.audio("nota_10", "notas/10_AMARILLO_MI.mp3");
        //juego.load.audio("nota_11", "notas/11_SILENCIO.mp3");

        juego.load.image('circulo_00', 'img/ficha_mueve_nada.png');
        juego.load.image('circulo_01', 'img/ball_w2.png');
        juego.load.image('circulo_02', 'img/ball_w2.png');
        juego.load.image('circulo_03', 'img/ball_w2.png');
        juego.load.image('circulo_04', 'img/ball_w2.png');
        juego.load.image('circulo_05', 'img/ball_w2.png');
        juego.load.image('circulo_06', 'img/ball_w2.png');
        juego.load.image('circulo_07', 'img/ball_w2.png');
        juego.load.image('circulo_08', 'img/ball_w2.png');
        juego.load.image('circulo_09', 'img/ball_w2.png');
        juego.load.image('circulo_10', 'img/ball_w2.png');

        juego.forceSingleUpdate = true;

        juego.load.image('diamante','img/diamond.png');
        //juego.load.image('estrella','img/star.png');
        juego.load.image('particula','img/star_particle.png');
        juego.load.image('particula_a','img/star_01.png');
    },
    create:function () {
        juego.stage.backgroundColor = '#FFF';
        cargando = juego.add.tileSprite(0, 0, 750, 450 , 'cargando_bg');

        logo = juego.add.sprite(juego.world.width/2, juego.world.height/2-80, 'cito');
        logo.anchor.set(0.5);
        cargando_txt =  juego.add.sprite(juego.world.width/2, juego.world.height/2 + 50, 'cargando_txt');
        cargando_txt.anchor.set(0.5);
        //juego.load.setPreloadSprite(cargando_txt);


        //A simple fade out effect
         juego.time.events.add(Phaser.Timer.SECOND, function() {
             var tween = this.add.tween(cargando_txt).to({alpha: 0}, 900, Phaser.Easing.Linear.none);

             tween.onComplete.add(function() {
                 logo.destroy();
                 cargando_txt.destroy();
                 this.startGame();
             }, this);

             tween.start();
         }, this);
    },
    startGame: function() {
        this.state.start('Menu');
    }
};

var BootState = {
    init:function(){
        //this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
        //this.scale.pageAlignHorizontally=true;
        //this.scale.pageAlignVertically=true;
    },
    preload: function(){
        juego.load.image('cito', 'img/cargando_cito.png');
        juego.load.image('cargando_bg', 'img/cargando_bg.jpg');
        juego.load.image('cargando_txt', 'img/cargando_txt.png');
    },
    create: function() {
        juego.state.start('PreloadState');
    }
};