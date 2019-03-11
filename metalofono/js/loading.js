
var logo;

var Loading = {
    preload: function(){
        juego.stage.backgroundColor = '#000000';

        juego.load.image('logo', 'img/iconoweb.png');

        shake = new Phaser.Plugin.Shake(juego);

        juego.load.image("base", "img/base01.png");
        juego.load.image("met_01", "img/met_01.png");
        juego.load.image("met_02", "img/met_02.png");
        juego.load.image("met_03", "img/met_03.png");
        juego.load.image("met_04", "img/met_04.png");
        juego.load.image("met_05", "img/met_05.png");
        juego.load.image("met_06", "img/met_06.png");
        juego.load.image("met_07", "img/met_07.png");
        juego.load.image("met_08", "img/met_08.png");
        juego.load.image("met_09", "img/met_09.png");
        juego.load.image("met_10", "img/met_10.png");

        juego.load.image("guia", "img/0.png");

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

        juego.load.image('circulo_00', 'img/0.png');
        juego.load.image('circulo_01', 'img/1.png');
        juego.load.image('circulo_02', 'img/2.png');
        juego.load.image('circulo_03', 'img/3.png');
        juego.load.image('circulo_04', 'img/4.png');
        juego.load.image('circulo_05', 'img/5.png');
        juego.load.image('circulo_06', 'img/6.png');
        juego.load.image('circulo_07', 'img/7.png');
        juego.load.image('circulo_08', 'img/8.png');
        juego.load.image('circulo_09', 'img/9.png');
        juego.load.image('circulo_10', 'img/10.png');

        juego.forceSingleUpdate = true;
    },

    create: function(){
        juego.stage.backgroundColor = '#1589FF';

        logo = juego.add.sprite(juego.world.width/2, juego.world.height/2, 'logo');
        logo.anchor.set(0.5);
        var txtCargando = juego.add.text(juego.width/2, juego.height/2 - 125, "CARGANDO...", {font: "bold 30px sans-serif", fill:"black", align:"center"});
        txtCargando.anchor.setTo(0.5);

        //A simple fade out effect
        juego.time.events.add(Phaser.Timer.SECOND, function() {
            var tween = this.add.tween(logo).to({alpha: 0}, 900, Phaser.Easing.Linear.none);

            tween.onComplete.add(function() {
                this.add.tween(txtCargando).to({alpha: 0}, 200, Phaser.Easing.Linear.none);
                logo.destroy();
                this.startGame();
            }, this);

            tween.start();
        }, this);
    },
    startGame: function() {
        this.state.start('Menu');
    },
};