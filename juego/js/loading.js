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

        juego.load.spritesheet('peter','img/peter_caminando.png',67,91);
        juego.load.image('play', 'img/icon_play.png');
        //juego.load.image('demo', 'metalofono/img/demo01.png');


        //shake = new Phaser.Plugin.Shake(juego);

        //juego.load.image("base", "metalofono/img/base.png");

        //juego.load.image("tapa_atras", "metalofono/img/tapa_atras.png");
        //juego.load.image("juego_terminado", "metalofono/img/juego_terminado.png");

        //juego.load.image("tooltip", "metalofono/img/tooltip.png");

        // CONTROLES
        //juego.load.image('play02','metalofono/img/play.png');
        //juego.load.spritesheet('control','metalofono/img/control.png',42,43);
        // FUN CONTROLES

        /*juego.load.image("volver", "metalofono/img/volver.png");

        juego.load.image("met_01", "metalofono/img/metal01.png");
        juego.load.image("met_02", "metalofono/img/metal02.png");
        juego.load.image("met_03", "metalofono/img/metal03.png");
        juego.load.image("met_04", "metalofono/img/metal04.png");
        juego.load.image("met_05", "metalofono/img/metal05.png");
        juego.load.image("met_06", "metalofono/img/metal06.png");
        juego.load.image("met_07", "metalofono/img/metal07.png");
        juego.load.image("met_08", "metalofono/img/metal08.png");
        juego.load.image("met_09", "metalofono/img/metal09.png");
        juego.load.image("met_10", "metalofono/img/metal10.png");

        juego.load.image("ficha", "metalofono/img/ball_w.png");

        juego.load.image("guia0", "metalofono/img/circ00.png");
        juego.load.image("guia1", "metalofono/img/circ01.png");
        juego.load.image("guia2", "metalofono/img/circ02.png");
        juego.load.image("guia3", "metalofono/img/circ03.png");
        juego.load.image("guia4", "metalofono/img/circ04.png");
        juego.load.image("guia5", "metalofono/img/circ05.png");
        juego.load.image("guia6", "metalofono/img/circ06.png");
        juego.load.image("guia7", "metalofono/img/circ07.png");
        juego.load.image("guia8", "metalofono/img/circ08.png");
        juego.load.image("guia9", "metalofono/img/circ09.png");
        juego.load.image("guia10", "metalofono/img/circ10.png");
        juego.load.image("lineanegra", "metalofono/img/linea_negra.png");
        juego.load.image("linea", "metalofono/img/linea.png");

        juego.load.audio("nota_01", "metalofono/notas/1_ROJO_DO.mp3");
        juego.load.audio("nota_02", "metalofono/notas/2_NARANJA_RE.mp3");
        juego.load.audio("nota_03", "metalofono/notas/3_AMARILLO_MI.mp3");
        juego.load.audio("nota_04", "metalofono/notas/4_VERDE_FA.mp3");
        juego.load.audio("nota_05", "metalofono/notas/5_AZUL_SOL.mp3");
        juego.load.audio("nota_06", "metalofono/notas/6_LILA_LA.mp3");
        juego.load.audio("nota_07", "metalofono/notas/7_BLANCO_SI.mp3");
        juego.load.audio("nota_08", "metalofono/notas/8_ROJO_DO.mp3");
        juego.load.audio("nota_09", "metalofono/notas/9_NARANJA_RE.mp3");
        juego.load.audio("nota_10", "metalofono/notas/10_AMARILLO_MI.mp3");
        //juego.load.audio("nota_11", "notas/11_SILENCIO.mp3");

        juego.load.image('circulo_00', 'metalofono/img/ficha_mueve_nada.png');
        juego.load.image('circulo_01', 'metalofono/img/ball_w2.png');
        juego.load.image('circulo_02', 'metalofono/img/ball_w2.png');
        juego.load.image('circulo_03', 'metalofono/img/ball_w2.png');
        juego.load.image('circulo_04', 'metalofono/img/ball_w2.png');
        juego.load.image('circulo_05', 'metalofono/img/ball_w2.png');
        juego.load.image('circulo_06', 'metalofono/img/ball_w2.png');
        juego.load.image('circulo_07', 'metalofono/img/ball_w2.png');
        juego.load.image('circulo_08', 'metalofono/img/ball_w2.png');
        juego.load.image('circulo_09', 'metalofono/img/ball_w2.png');
        juego.load.image('circulo_10', 'metalofono/img/ball_w2.png');

        juego.forceSingleUpdate = true;

        juego.load.image('diamante','metalofono/img/diamond.png');
        //juego.load.image('estrella','metalofono/img/star.png');
        juego.load.image('particula','metalofono/img/star_particle.png');
        juego.load.image('particula_a','metalofono/img/star_01.png');

        cargando = juego.add.tileSprite(0, 0, 750, 450 , 'cargando_bg');*/
    },
    create:function () {
        juego.stage.backgroundColor = '#FFF';

        /*logo = juego.add.sprite(juego.world.width/2, juego.world.height/2-80, 'cito');
        logo.anchor.set(0.5);
        cargando_txt =  juego.add.sprite(juego.world.width/2, juego.world.height/2 + 50, 'cargando_txt');
        cargando_txt.anchor.set(0.5);*/

        this.startGame();

        //A simple fade out effect
     /*juego.time.events.add(Phaser.Timer.SECOND, function() {
         var tween = this.add.tween(cargando_txt).to({alpha: 0}, 900, Phaser.Easing.Linear.none);

         tween.onComplete.add(function() {
             logo.destroy();
             cargando_txt.destroy();
             this.startGame();
         }, this);

         tween.start();
     }, this);*/
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
        /*juego.load.image('cito', 'metalofono/img/cargando_cito.png');
        juego.load.image('cargando_bg', 'metalofono/img/fondo_balncomet.jpg');
        juego.load.image('cargando_txt', 'metalofono/img/cargando_txt.png');*/
    },
    create: function() {
        juego.state.start('PreloadState');
    }
};