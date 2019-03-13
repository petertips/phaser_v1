var Juego;
var bg;
var tecla_do,tecla_re,tecla_mi,tecla_fa,tecla_sol,tecla_la,tecla_si,tecla_do1,tecla_re1,tecla_mi1;
var tecla_do_click,tecla_re_click,tecla_mi_click,tecla_fa_click,tecla_sol_click,tecla_la_click,tecla_si_click,tecla_do1_click,tecla_re1_click,tecla_mi1_click;
var nota_do,nota_re,nota_mi,nota_fa,nota_sol,nota_la,nota_si,nota_do1,nota_re1,nota_mi1;
var shake;
var circulos_00,circulos_01,circulos_02,circulos_03,circulos_04,circulos_05,circulos_06,circulos_07,circulos_08,circulos_09,circulos_10;
var puntos, txtPuntos_0,txtPuntos_1,txtPuntos_2,txtTitulo;

var guias,fichas,lineasNegras;

var tiempos=[
    1,2,3,4,
    5,6,7,8,
    9,10,11,12,
    13,14,15,16,

    17,18,19,20,
    21,22,23,24,
    25,26,27,28,
    29,30,31,32,

    33,34,35,36,
    37,38,39,40,
    41,42,43,44,
    45,46,47,48,

    49,50,51,52,
    53,54,55,56,
    57,58,59,60,
    61,62,63,64,

    65,66,67,68,
    69,70,71,72,
    73,74,75,76,
    77,78,79,80,

    81,82,83,84,
    85,86,87,88,
    89,90,91,92,
    93,94,95,96
];
var cancion=[
    3,5,3,0,
    3,5,4,0,
    4,5,4,5,
    4,5,3,0,

    3,5,3,0,
    3,5,4,0,
    4,5,4,5,
    4,5,3,0,

    8,7,6,5,
    3,0,0,0,
    8,7,6,5,
    4,0,0,0,

    2,3,4,2,
    5,0,5,0,
    5,4,3,2,
    3,0,0,0,

    8,7,6,5,
    3,0,0,0,
    8,7,6,5,
    4,0,0,0,

    2,3,4,2,
    5,0,5,2,
    5,4,3,2,
    1,0,0,0
];
var ms=600;
var velicidad=120;
var titulo="TITULO DE LA CANCIÓN CANCIÓN CANCIÓN CANCIÓN";

var bueno,buenoPuntos;
Juego = {
    CERO: Phaser.Key,
    numpadCERO: Phaser.Key,
    UNO: Phaser.Key,
    numpadUNO: Phaser.Key,
    DOS: Phaser.Key,
    numpadDOS: Phaser.Key,
    TRES: Phaser.Key,
    numpadTRES: Phaser.Key,
    CUATRO: Phaser.Key,
    numpadCUATRO: Phaser.Key,
    CINCO: Phaser.Key,
    numpadCINCO: Phaser.Key,
    SEIS: Phaser.Key,
    numpadSEIS: Phaser.Key,
    SIETE: Phaser.Key,
    numpadSIETE: Phaser.Key,
    OCHO: Phaser.Key,
    numpadOCHO: Phaser.Key,
    NUEVE: Phaser.Key,
    numpadNUEVE: Phaser.Key,
    preload: function () {
        juego.stage.backgroundColor = 'rgba(68, 136, 170, 0.5)';
    },
    create: function () {
        juego.physics.startSystem(Phaser.Physics.ARCADE);

        //starfield = juego.add.tileSprite(0, 0, 800, 600, 'base'); //PARA PONER IMAGEN DE FONDO

        bg = juego.add.sprite(390, 180, 'base');
        bg.anchor.setTo(0.5);

        this.cargarNotas();
        this.crearTeclas();
        this.creaTeclado();
        this.crearCirculos();

        guias = juego.add.group();
        guias.enableBody = true;
        juego.physics.enable(guias, Phaser.Physics.ARCADE);
        fichas = juego.add.group();
        lineasNegras = juego.add.group();
        var fila=125;
        for(var x=1; x<11; x++) {
            guias.create(fila,270, 'guia'+x);
            lineasNegras.create(fila,125, 'lineanegra');

            fichas.create(fila,113, 'ficha');

            fila +=58;
        }
        guias.setAll('anchor.x', 0.5);
        lineasNegras.setAll('anchor.x', 0.5);
        fichas.setAll('anchor.x', 0.5);

        for (var x=0;x<cancion.length;x++){
            switch (cancion[x]){
                case 0:
                    juego.time.events.add(ms*tiempos[x], this.crearCirculo_00, this);
                    break;
                case 1:
                    juego.time.events.add(ms*tiempos[x], this.crearCirculo_01, this);
                    break;
                case 2:
                    juego.time.events.add(ms*tiempos[x], this.crearCirculo_02, this);
                    break;
                case 3:
                    juego.time.events.add(ms*tiempos[x], this.crearCirculo_03, this);
                    break;
                case 4:
                    juego.time.events.add(ms*tiempos[x], this.crearCirculo_04, this);
                    break;
                case 5:
                    juego.time.events.add(ms*tiempos[x], this.crearCirculo_05, this);
                    break;
                case 6:
                    juego.time.events.add(ms*tiempos[x], this.crearCirculo_06, this);
                    break;
                case 7:
                    juego.time.events.add(ms*tiempos[x], this.crearCirculo_07, this);
                    break;
                case 8:
                    juego.time.events.add(ms*tiempos[x], this.crearCirculo_08, this);
                    break;
                case 9:
                    juego.time.events.add(ms*tiempos[x], this.crearCirculo_09, this);
                    break;
                case 10:
                    juego.time.events.add(ms*tiempos[x], this.crearCirculo_10, this);
                    break;
            }
        }
        juego.plugins.add(shake); // VIBRACION

        juego.world.bringToTop(bg);
        juego.world.bringToTop(guias);
        juego.world.bringToTop(lineasNegras);
        juego.world.bringToTop(fichas);
        juego.world.bringToTop(circulos_01);
        juego.world.bringToTop(circulos_02);
        juego.world.bringToTop(circulos_03);
        juego.world.bringToTop(circulos_04);
        juego.world.bringToTop(circulos_05);
        juego.world.bringToTop(circulos_06);
        juego.world.bringToTop(circulos_07);
        juego.world.bringToTop(circulos_08);
        juego.world.bringToTop(circulos_09);
        juego.world.bringToTop(circulos_10);


        var style = { font: '20px Fontdiner Swanky', fontWeight:'bold', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 500 };
        puntos=0;
        txtPuntos_0 = juego.add.text(80, 39, "NIVEL 1", {font: "15px Arial", fill: "red",fontWeight:'bold',stroke:'#000',strokeThickness:1,});
        txtPuntos_1 = juego.add.text(80, 56, "PUNTAJE:", {font: "12px Arial", fill: "#FFF"});
        txtPuntos_2 = juego.add.text(80, 70, "0", {font: "12px Arial",  fill: "#FFF",fontWeight:'bold'});

        txtTitulo = juego.add.text(200,35,titulo, style);

        buenoPuntos = juego.add.emitter(96, 30, 10);
        buenoPuntos.makeParticles(['diamante','particula']);

    },
    update: function () {
        if (juego.time.events.length===0){
            juego.time.events.add(3000, this.gameOver, this);
        }
        //juego.physics.arcade.collide(guias,circulos_01,this.colisionCirculo_01,null,this); //DETECTAR COLISIONES

        if( (juego.physics.arcade.overlap(guias, circulos_01) && this.numpadUNO.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_01) && tecla_do_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            txtPuntos_2.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_01,this.colisionCirculo, null, this);
            tecla_do_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_02) && this.numpadDOS.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_02) && tecla_re_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            txtPuntos_2.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_02,this.colisionCirculo, null, this);
            tecla_re_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_03) && this.numpadTRES.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_03) && tecla_mi_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            txtPuntos_2.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_03,this.colisionCirculo, null, this);
            tecla_mi_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_04) && this.numpadCUATRO.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_04) && tecla_fa_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            puntos +=1;
            txtPuntos_2.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_04,this.colisionCirculo, null, this);
            tecla_fa_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_05) && this.numpadCINCO.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_05) && tecla_sol_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            puntos +=1;
            txtPuntos_2.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_05,this.colisionCirculo, null, this);
            tecla_sol_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_06) && this.numpadSEIS.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_06) && tecla_la_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            puntos +=1;
            txtPuntos_2.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_06,this.colisionCirculo, null, this);
            tecla_la_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_07) && this.numpadSIETE.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_07) && tecla_si_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            puntos +=1;
            txtPuntos_2.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_07,this.colisionCirculo, null, this);
            tecla_si_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_08) && this.numpadOCHO.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_08) && tecla_do1_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            puntos +=1;
            txtPuntos_2.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_08,this.colisionCirculo, null, this);
            tecla_do1_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_09) && this.numpadNUEVE.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_09) && tecla_re1_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            puntos +=1;
            txtPuntos_2.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_09,this.colisionCirculo, null, this);
            tecla_re1_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_10) && this.numpadCERO.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_10) && tecla_mi1_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            puntos +=1;
            txtPuntos_2.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_10,this.colisionCirculo, null, this);
            tecla_mi1_click=false;
        }
    },
    cargarNotas: function(){
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
    },
    clickMouse:function (sprite, pointer) {
        //alert(sprite.key);
        switch (sprite.key){
            case 'met_01':
                tecla_do_click=true;
                this.tocarTecla(1);
                break;
            case 'met_02':
                tecla_re_click=true;
                this.tocarTecla(2);
                break;
            case 'met_03':
                tecla_mi_click=true;
                this.tocarTecla(3);
                break;
            case 'met_04':
                tecla_fa_click=true;
                this.tocarTecla(4);
                break;
            case 'met_05':
                tecla_sol_click=true;
                this.tocarTecla(5);
                break;
            case 'met_06':
                tecla_la_click=true;
                this.tocarTecla(6);
                break;
            case 'met_07':
                tecla_si_click=true;
                this.tocarTecla(7);
                break;
            case 'met_08':
                tecla_do1_click=true;
                this.tocarTecla(8);
                break;
            case 'met_09':
                tecla_re1_click=true;
                this.tocarTecla(9);
                break;
            case 'met_10':
                tecla_mi1_click=true;
                this.tocarTecla(10);
                break;
        }
    },
    setTecla: function(tacla) {
        tacla.anchor.setTo(0.5);
        tacla.enableBody = true;
        juego.physics.enable(tacla, Phaser.Physics.ARCADE);
        tacla.body.immovable = true;
        tacla.inputEnabled = true;
        tacla.events.onInputDown.add(this.clickMouse, this);
        tacla.allowGravity = false;
        tacla.draggable = false;
    },
    crearTeclas:function(){
        tecla_do = juego.add.sprite(125, 350, "met_01");
        this.setTecla(tecla_do);

        tecla_re = juego.add.sprite(183, 350, "met_02");
        this.setTecla(tecla_re);

        tecla_mi = juego.add.sprite(241, 350, "met_03");
        this.setTecla(tecla_mi);

        tecla_fa = juego.add.sprite(299, 350, "met_04");
        this.setTecla(tecla_fa);

        tecla_sol = juego.add.sprite(357, 350, "met_05");
        this.setTecla(tecla_sol);

        tecla_la = juego.add.sprite(415, 350, "met_06");
        this.setTecla(tecla_la);

        tecla_si = juego.add.sprite(473, 350, "met_07");
        this.setTecla(tecla_si);

        tecla_do1 = juego.add.sprite(531, 350, "met_08");
        this.setTecla(tecla_do1);

        tecla_re1 = juego.add.sprite(589, 350, "met_09");
        this.setTecla(tecla_re1);

        tecla_mi1 = juego.add.sprite(647, 350, "met_10");
        this.setTecla(tecla_mi1);
    },
    creaTeclado:function () {
        this.numpadCERO = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_0);
        this.numpadCERO.onDown.add(this.presionaTecla, this);
        this.CERO = juego.input.keyboard.addKey(Phaser.Keyboard.ZERO);
        this.CERO.onDown.add(this.presionaTecla, this);

        this.numpadUNO = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1);
        this.numpadUNO.onDown.add(this.presionaTecla, this);
        this.UNO = juego.input.keyboard.addKey(Phaser.Keyboard.ONE);
        this.UNO.onDown.add(this.presionaTecla, this);

        this.numpadDOS = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_2);
        this.numpadDOS.onDown.add(this.presionaTecla, this);
        this.DOS = juego.input.keyboard.addKey(Phaser.Keyboard.TWO);
        this.DOS.onDown.add(this.presionaTecla, this);

        this.numpadTRES = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_3);
        this.numpadTRES.onDown.add(this.presionaTecla, this);
        this.TRES = juego.input.keyboard.addKey(Phaser.Keyboard.THREE);
        this.TRES.onDown.add(this.presionaTecla, this);

        this.numpadCUATRO = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_4);
        this.numpadCUATRO.onDown.add(this.presionaTecla, this);
        this.CUATRO = juego.input.keyboard.addKey(Phaser.Keyboard.FOUR);
        this.CUATRO.onDown.add(this.presionaTecla, this);

        this.numpadCINCO = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_5);
        this.numpadCINCO.onDown.add(this.presionaTecla, this);
        this.CINCO = juego.input.keyboard.addKey(Phaser.Keyboard.FIVE);
        this.CINCO.onDown.add(this.presionaTecla, this);

        this.numpadSEIS = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_6);
        this.numpadSEIS.onDown.add(this.presionaTecla, this);
        this.SEIS = juego.input.keyboard.addKey(Phaser.Keyboard.SIX);
        this.SEIS.onDown.add(this.presionaTecla, this);

        this.numpadSIETE = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_7);
        this.numpadSIETE.onDown.add(this.presionaTecla, this);
        this.SIETE = juego.input.keyboard.addKey(Phaser.Keyboard.SEVEN);
        this.SIETE.onDown.add(this.presionaTecla, this);

        this.numpadOCHO = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_8);
        this.numpadOCHO.onDown.add(this.presionaTecla, this);
        this.OCHO = juego.input.keyboard.addKey(Phaser.Keyboard.EIGHT);
        this.OCHO.onDown.add(this.presionaTecla, this);

        this.numpadNUEVE = juego.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_9);
        this.numpadNUEVE.onDown.add(this.presionaTecla, this);
        this.NUEVE = juego.input.keyboard.addKey(Phaser.Keyboard.NINE);
        this.NUEVE.onDown.add(this.presionaTecla, this);
    },
    setCirculo:function(circulo,imagen) {
        circulo.enableBody = true;
        juego.physics.enable(circulo, Phaser.Physics.ARCADE);
        circulo.createMultiple(20, imagen);
        circulo.setAll('anchor.x', 0.5);
        circulo.setAll('anchor.y', 1);
        circulo.setAll('outOfBoundsKill', true); // Destruir al salir del escenario (limite del juego).
        circulo.setAll('checkWorldBounds', true); // Para que este siempre dentro del limite del juego.
    },
    crearCirculos:function () {
        circulos_00 = juego.add.group();
        this.setCirculo(circulos_00,'circulo_00');

        circulos_01 = juego.add.group();
        this.setCirculo(circulos_01,'circulo_01');

        circulos_02 = juego.add.group();
        this.setCirculo(circulos_02,'circulo_02');

        circulos_03 = juego.add.group();
        this.setCirculo(circulos_03,'circulo_03');

        circulos_04 = juego.add.group();
        this.setCirculo(circulos_04,'circulo_04');

        circulos_05 = juego.add.group();
        this.setCirculo(circulos_05,'circulo_05');

        circulos_06 = juego.add.group();
        this.setCirculo(circulos_06,'circulo_06');

        circulos_07 = juego.add.group();
        this.setCirculo(circulos_07,'circulo_07');

        circulos_08 = juego.add.group();
        this.setCirculo(circulos_08,'circulo_08');

        circulos_09 = juego.add.group();
        this.setCirculo(circulos_09,'circulo_09');

        circulos_10 = juego.add.group();
        this.setCirculo(circulos_10,'circulo_10');
    },
    setCirculoMovimiento: function (circulo){
        circulo.body.velocity.y = velicidad;
        circulo.checkWorldBounds=true;
        circulo.outOfBoundsKill=true;
    },
    crearCirculo_00: function () {
        var circulo = circulos_00.getFirstDead();
        if (circulo) {
            circulo.reset(67, 137);
            this.setCirculoMovimiento(circulo);
        }
    },
    efectoCirculo: function(bueno){
        bueno.makeParticles(['particula_a']);
        bueno.start(true, 800,null, 20);
    },
    crearCirculo_01: function () {
        var circulo = circulos_01.getFirstDead();
        if (circulo) {
            circulo.reset(125, 137);
            this.setCirculoMovimiento(circulo);

            bueno = juego.add.emitter(125, 115, 10);
            this.efectoCirculo(bueno)
        }
    },
    crearCirculo_02: function () {
        var circulo = circulos_02.getFirstDead();
        if (circulo) {
            circulo.reset(183, 137);
            this.setCirculoMovimiento(circulo);

            bueno = juego.add.emitter(183, 115, 10);
            this.efectoCirculo(bueno)
        }
    },
    crearCirculo_03: function () {
        var circulo = circulos_03.getFirstDead();
        if (circulo) {
            circulo.reset(241, 137);
            this.setCirculoMovimiento(circulo);

            bueno = juego.add.emitter(241, 115, 10);
            this.efectoCirculo(bueno)
        }
    },
    crearCirculo_04: function () {
        var circulo = circulos_04.getFirstDead();
        if (circulo) {
            circulo.reset(299, 137);
            this.setCirculoMovimiento(circulo);

            bueno = juego.add.emitter(299, 115, 10);
            this.efectoCirculo(bueno)
        }
    },
    crearCirculo_05: function () {
        var circulo = circulos_05.getFirstDead();
        if (circulo) {
            circulo.reset(357, 137);
            this.setCirculoMovimiento(circulo);

            bueno = juego.add.emitter(357, 115, 10);
            this.efectoCirculo(bueno)
        }
    },
    crearCirculo_06: function () {
        var circulo = circulos_06.getFirstDead();
        if (circulo) {
            circulo.reset(415, 137);
            this.setCirculoMovimiento(circulo);

            bueno = juego.add.emitter(415, 115, 10);
            this.efectoCirculo(bueno)
        }
    },
    crearCirculo_07: function () {
        var circulo = circulos_07.getFirstDead();
        if (circulo) {
            circulo.reset(473, 137);
            this.setCirculoMovimiento(circulo);

            bueno = juego.add.emitter(473, 115, 10);
            this.efectoCirculo(bueno)
        }
    },
    crearCirculo_08: function () {
        var circulo = circulos_08.getFirstDead();
        if (circulo) {
            circulo.reset(531, 137);
            this.setCirculoMovimiento(circulo);

            bueno = juego.add.emitter(531, 115, 10);
            this.efectoCirculo(bueno)
        }
    },
    crearCirculo_09: function () {
        var circulo = circulos_09.getFirstDead();
        if (circulo) {
            circulo.reset(589, 137);
            this.setCirculoMovimiento(circulo);

            bueno = juego.add.emitter(589, 115, 10);
            this.efectoCirculo(bueno)
        }
    },
    crearCirculo_10: function () {
        var circulo = circulos_10.getFirstDead();
        if (circulo) {
            circulo.reset(647, 137);
            this.setCirculoMovimiento(circulo);

            bueno = juego.add.emitter(647, 115, 10);
            this.efectoCirculo(bueno)
        }
    },
    tocarTecla: function (nota){
        switch (nota){
            case 1:
                //juego.add.tween(tecla_do).to({angle:-1},100,Phaser.Easing.Bounce.Out,true).start();
                shake.shake(5, tecla_do);
                nota_do.play();
                break;
            case 2:
                shake.shake(5, tecla_re);
                nota_re.play();
                break;
            case 3:
                shake.shake(5, tecla_mi);
                nota_mi.play();
                break;
            case 4:
                shake.shake(5, tecla_fa);
                nota_fa.play();
                break;
            case 5:
                shake.shake(5, tecla_sol);
                nota_sol.play();
                break;
            case 6:
                shake.shake(5, tecla_la);
                nota_la.play();
                break;
            case 7:
                shake.shake(5, tecla_si);
                nota_si.play();
                break;
            case 8:
                shake.shake(5, tecla_do1);
                nota_do1.play();
                break;
            case 9:
                shake.shake(5, tecla_re1);
                nota_re1.play();
                break;
            case 10:
                shake.shake(5, tecla_mi1);
                nota_mi1.play();
                break;
        }
    },
    presionaTecla: function (key) {
        switch (key.keyCode) {
            case Phaser.Keyboard.ONE:
            case Phaser.Keyboard.NUMPAD_1:
                this.tocarTecla(1);
                break;
            case Phaser.Keyboard.TWO:
            case Phaser.Keyboard.NUMPAD_2:
                this.tocarTecla(2);
                break;
            case Phaser.Keyboard.THREE:
            case Phaser.Keyboard.NUMPAD_3:
                this.tocarTecla(3);
                break;
            case Phaser.Keyboard.FOUR:
            case Phaser.Keyboard.NUMPAD_4:
                this.tocarTecla(4);
                break;
            case Phaser.Keyboard.FIVE:
            case Phaser.Keyboard.NUMPAD_5:
                this.tocarTecla(5);
                break;
            case Phaser.Keyboard.SIX:
            case Phaser.Keyboard.NUMPAD_6:
                this.tocarTecla(6);
                break;
            case Phaser.Keyboard.SEVEN:
            case Phaser.Keyboard.NUMPAD_7:
                this.tocarTecla(7);
                break;
            case Phaser.Keyboard.EIGHT:
            case Phaser.Keyboard.NUMPAD_8:
                this.tocarTecla(8);
                break;
            case Phaser.Keyboard.NINE:
            case Phaser.Keyboard.NUMPAD_9:
                this.tocarTecla(9);
                break;
            case Phaser.Keyboard.ZERO:
            case Phaser.Keyboard.NUMPAD_0:
                this.tocarTecla(10);
                break;
        }
    },
    colisionCirculo: function (guia,circulo) {
        //circulo.destroy();

        if (puntos % 5 === 0){
            buenoPuntos.start(true, 1000,null, 10);
        }

        circulo.kill();
    },
    gameOver: function() {
        //pass it the score as a parameter
        juego.state.start('Game_Over');
    },
    render: function () {
        //juego.debug.bodyInfo(tecla_do, 16, 24);

        //juego.debug.text("Elapsed seconds: " + juego.time.totalElapsedSeconds(), 32, 16);
        //juego.debug.text("Time until event: " + juego.time.events.duration.toFixed(0), 32, 32);
        //juego.debug.text("Next tick: " + juego.time.events.next.toFixed(0), 32, 64);
        //juego.debug.text("Queued events: " + juego.time.events.length, 32, 96);

        //juego.debug.bodyInfo(tecla_do, 16, 24);
        //juego.debug.text('One item will be resurrected every second', 32, 32);
        //juego.debug.text('Living: ' + circulos_01.countLiving() + '   Dead: ' + circulos_01.countDead(), 32, 64);
    }
};