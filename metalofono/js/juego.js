var bg;

var tecla_do,tecla_re,tecla_mi,tecla_fa,tecla_sol,tecla_la,tecla_si,tecla_do1,tecla_re1,tecla_mi1;

var nota_do,nota_re,nota_mi,nota_fa,nota_sol,nota_la,nota_si,nota_do1,nota_re1,nota_mi1,nota_sil;

var shake;

var circulos_01;
var timer;

var tiempoBala=0;

var Juego={
    CERO:Phaser.Key,
    numpadCERO:Phaser.Key,
    UNO:Phaser.Key,
    numpadUNO:Phaser.Key,
    DOS:Phaser.Key,
    numpadDOS:Phaser.Key,
    TRES:Phaser.Key,
    numpadTRES:Phaser.Key,
    CUATRO:Phaser.Key,
    numpadCUATRO:Phaser.Key,
    CINCO:Phaser.Key,
    numpadCINCO:Phaser.Key,
    SEIS:Phaser.Key,
    numpadSEIS:Phaser.Key,
    SIETE:Phaser.Key,
    numpadSIETE:Phaser.Key,
    OCHO:Phaser.Key,
    numpadOCHO:Phaser.Key,
    NUEVE:Phaser.Key,
    numpadNUEVE:Phaser.Key,
    preload:function () {
        shake = new Phaser.Plugin.Shake(juego);

        juego.load.image("base", "img/base01.png");
        juego.load.image("met_01","img/met_01.png");
        juego.load.image("met_02","img/met_02.png");
        juego.load.image("met_03","img/met_03.png");
        juego.load.image("met_04","img/met_04.png");
        juego.load.image("met_05","img/met_05.png");
        juego.load.image("met_06","img/met_06.png");
        juego.load.image("met_07","img/met_07.png");
        juego.load.image("met_08","img/met_08.png");
        juego.load.image("met_09","img/met_09.png");
        juego.load.image("met_10","img/met_10.png");

        juego.load.audio("nota_01","notas/1_ROJO_DO.mp3");
        juego.load.audio("nota_02","notas/2_NARANJA_RE.mp3");
        juego.load.audio("nota_03","notas/3_AMARILLO_MI.mp3");
        juego.load.audio("nota_04","notas/4_VERDE_FA.mp3");
        juego.load.audio("nota_05","notas/5_AZUL_SOL.mp3");
        juego.load.audio("nota_06","notas/6_LILA_LA.mp3");
        juego.load.audio("nota_07","notas/7_BLANCO_SI.mp3");
        juego.load.audio("nota_08","notas/8_ROJO_DO.mp3");
        juego.load.audio("nota_09","notas/9_NARANJA_RE.mp3");
        juego.load.audio("nota_10","notas/10_AMARILLO_MI.mp3");
        juego.load.audio("nota_11","notas/11_SILENCIO.mp3");

        juego.load.image('circulo_01','img/1.png');

        juego.forceSingleUpdate=true;
    },
    create:function () {
        juego.physics.startSystem(Phaser.Physics.ARCADE);

        //starfield = juego.add.tileSprite(0, 0, 800, 600, 'base'); //PARA PONER IMAGEN DE FONDO
        juego.stage.backgroundColor = 'rgba(68, 136, 170, 0.5)';

        bg = juego.add.sprite(390,410,'base');
        bg.anchor.setTo(0.5);

        tecla_do = juego.add.sprite(170,410,"met_01");
        tecla_do.anchor.setTo(0.5);
        tecla_do.enableBody=true;
        //tecla_do.physicsBodyType=Phaser.Physics.ARCADE;
        juego.physics.enable(tecla_do, Phaser.Physics.ARCADE);
        tecla_do.body.setSize(42,259, 0, 60);
        tecla_do.body.immovable = true;

        tecla_re = juego.add.sprite(220,410,"met_02");
        tecla_re.anchor.setTo(0.5);
        tecla_mi = juego.add.sprite(270,410,"met_03");
        tecla_mi.anchor.setTo(0.5);
        tecla_fa = juego.add.sprite(320,410,"met_04");
        tecla_fa.anchor.setTo(0.5);
        tecla_sol = juego.add.sprite(370,410,"met_05");
        tecla_sol.anchor.setTo(0.5);
        tecla_la = juego.add.sprite(420,410,"met_06");
        tecla_la.anchor.setTo(0.5);
        tecla_si = juego.add.sprite(470,410,"met_07");
        tecla_si.anchor.setTo(0.5);
        tecla_do1 = juego.add.sprite(520,410,"met_08");
        tecla_do1.anchor.setTo(0.5);
        tecla_re1 = juego.add.sprite(570,410,"met_09");
        tecla_re1.anchor.setTo(0.5);
        tecla_mi1 = juego.add.sprite(620,410,"met_10");
        tecla_mi1.anchor.setTo(0.5);

        nota_do = juego.add.audio("nota_01");
        nota_re = juego.add.audio("nota_02");
        nota_mi = juego.add.audio("nota_03");
        nota_fa = juego.add.audio("nota_04");
        nota_sol = juego.add.audio("nota_05");
        nota_la = juego.add.audio("nota_06");
        nota_si = juego.add.audio("nota_07");
        nota_do1 = juego.add.audio("nota_08");
        nota_re1 = juego.add.audio("nota_09");
        nota_mi1 = juego.add.audio("nota_10");
        nota_sil = juego.add.audio("nota_11");

        /*const addKeys = (keyStrings, self) => {
            keyStrings.forEach( (keyString) => {
                const key = juego.input.keyboard.addKey(Phaser.Keyboard[keyString]);
                key.onDown.addOnce(self.start, self);
            });
        }
        addKeys(['W','A','S','D'], this.presionaTecla);*/

        this.numpadCERO = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_0);
        this.numpadCERO.onDown.add(this.presionaTecla,this);
        this.CERO = juego.input.keyboard.addKey(Phaser.Keyboard.ZERO);
        this.CERO.onDown.add(this.presionaTecla,this);

        this.numpadUNO = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1);
        this.numpadUNO.onDown.add(this.presionaTecla,this);
        this.UNO = juego.input.keyboard.addKey(Phaser.Keyboard.ONE);
        this.UNO.onDown.add(this.presionaTecla,this);

        this.numpadDOS = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_2);
        this.numpadDOS.onDown.add(this.presionaTecla,this);
        this.DOS = juego.input.keyboard.addKey(Phaser.Keyboard.TWO);
        this.DOS.onDown.add(this.presionaTecla,this);

        this.numpadTRES = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_3);
        this.numpadTRES.onDown.add(this.presionaTecla,this);
        this.TRES = juego.input.keyboard.addKey(Phaser.Keyboard.THREE);
        this.TRES.onDown.add(this.presionaTecla,this)

        this.numpadCUATRO = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_4);
        this.numpadCUATRO.onDown.add(this.presionaTecla,this);
        this.CUATRO = juego.input.keyboard.addKey(Phaser.Keyboard.FOUR);
        this.CUATRO.onDown.add(this.presionaTecla,this);

        this.numpadCINCO = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_5);
        this.numpadCINCO.onDown.add(this.presionaTecla,this);
        this.CINCO = juego.input.keyboard.addKey(Phaser.Keyboard.FIVE);
        this.CINCO.onDown.add(this.presionaTecla,this);

        this.numpadSEIS= juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_6);
        this.numpadSEIS.onDown.add(this.presionaTecla,this);
        this.SEIS = juego.input.keyboard.addKey(Phaser.Keyboard.SIX);
        this.SEIS.onDown.add(this.presionaTecla,this);

        this.numpadSIETE= juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_7);
        this.numpadSIETE.onDown.add(this.presionaTecla,this);
        this.SIETE = juego.input.keyboard.addKey(Phaser.Keyboard.SEVEN);
        this.SIETE.onDown.add(this.presionaTecla,this);

        this.numpadOCHO= juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_8);
        this.numpadOCHO.onDown.add(this.presionaTecla,this);
        this.OCHO = juego.input.keyboard.addKey(Phaser.Keyboard.EIGHT);
        this.OCHO.onDown.add(this.presionaTecla,this);

        this.numpadNUEVE= juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_9);
        this.numpadNUEVE.onDown.add(this.presionaTecla,this);
        this.NUEVE = juego.input.keyboard.addKey(Phaser.Keyboard.NINE);
        this.NUEVE.onDown.add(this.presionaTecla,this);

        juego.plugins.add(shake); // VIBRACION

        circulos_01 = juego.add.group();
        circulos_01.enableBody=true;
        //circulos_01.physicsBodyType=Phaser.Physics.ARCADE;
        juego.physics.enable(circulos_01, Phaser.Physics.ARCADE);
        circulos_01.createMultiple(2, 'circulo_01');
        circulos_01.setAll('anchor.x', 0.5);
        circulos_01.setAll('anchor.y', 1);
        circulos_01.setAll('outOfBoundsKill', true); // Destruir al salir del escenario (limite del juego).
        circulos_01.setAll('checkWorldBounds',true); // Para que este siempre dentro del limite del juego.

    },
    update:function () {
        //juego.debug.bodyInfo(tecla_do, 16, 24);
        if(tecla_do.angle<0){
            tecla_do.angle+=1;
        }

        var circulo;
        if (juego.time.now > tiempoBala){ //Disparar solo una bala cada cierto tiempo
            circulo=circulos_01.getFirstExists(false); //de las 20 balas utilizar la primera.
        }
        if (circulo){
            circulo.reset(170, 75);
            circulo.body.velocity.y = 100; //velocidad hacia arriba.
            //tiempoBala = juego.time.now + 400; //Milisegundos.
        }

        juego.physics.arcade.overlap(tecla_do,circulos_01,this.colisionCirculo_01,null,this); //DETECTAR COLISIONES


    },
    presionaTecla:function (key) {
        switch (key.keyCode){
            case Phaser.Keyboard.ZERO:
            case Phaser.Keyboard.NUMPAD_0:
                nota_mi1.play();
                break;
            case Phaser.Keyboard.ONE:
            case Phaser.Keyboard.NUMPAD_1:
                shake.shake(5, tecla_do);
                //juego.add.tween(tecla_do).to({angle:-1},100,Phaser.Easing.Bounce.Out,true).start();
                nota_do.play();
                break;
            case Phaser.Keyboard.TWO:
            case Phaser.Keyboard.NUMPAD_2:
                nota_re.play();
                break;
            case Phaser.Keyboard.THREE:
            case Phaser.Keyboard.NUMPAD_3:
                nota_mi.play();
                break;
            case Phaser.Keyboard.FOUR:
            case Phaser.Keyboard.NUMPAD_4:
                nota_fa.play();
                break;
            case Phaser.Keyboard.FIVE:
            case Phaser.Keyboard.NUMPAD_5:
                nota_sol.play();
                break;
            case Phaser.Keyboard.SIX:
            case Phaser.Keyboard.NUMPAD_6:
                nota_la.play();
                break;
            case Phaser.Keyboard.SEVEN:
            case Phaser.Keyboard.NUMPAD_7:
                nota_si.play();
                break;
            case Phaser.Keyboard.EIGHT:
            case Phaser.Keyboard.NUMPAD_8:
                nota_do1.play();
                break;
            case Phaser.Keyboard.NINE:
            case Phaser.Keyboard.NUMPAD_9:
                nota_re1.play();
                break;
        }
    },
    colisionCirculo_01:function(tecla,circulo){
        //alert("entre");
        circulo.kill();
    },
    crearCirculo:function () {
        //this.crearUnCirculo(600,75);
    },
    crearUnCirculo:function (x,y) {
        //var circulo=circulos_01.getFirstDead();
        //circulo.reset(x,y);
        //circulo.body.velocity.x= -100;
        //circulo.checkWorldBounds=true;
        //circulo.outOfBoundsKill=true;
    },
    render:function () {
        juego.debug.bodyInfo(tecla_do, 16, 24);
    }
};