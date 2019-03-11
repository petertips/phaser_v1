var bg;

var tecla_do,tecla_re,tecla_mi,tecla_fa,tecla_sol,tecla_la,tecla_si,tecla_do1,tecla_re1,tecla_mi1;
var tecla_do_click,tecla_re_click,tecla_mi_click,tecla_fa_click,tecla_sol_click,tecla_la_click,tecla_si_click,tecla_do1_click,tecla_re1_click,tecla_mi1_click;

var nota_do,nota_re,nota_mi,nota_fa,nota_sol,nota_la,nota_si,nota_do1,nota_re1,nota_mi1;
var shake;

var circulos_00,circulos_01,circulos_02,circulos_03,circulos_04,circulos_05,circulos_06,circulos_07,circulos_08,circulos_09,circulos_10;

var Juego;

var puntos;
var txtPuntos;

var guias;

var tiempos=[1,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];
var cancion=[3,5,3,0,3, 5, 4, 0, 4, 5, 4, 5, 4, 5, 3, 0];
var ms=500;

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

        puntos=0;
        txtPuntos = juego.add.text(20, 20, "0", {font: "30px Arial", fill: "#FFF"});

        bg = juego.add.sprite(390, 410, 'base');
        bg.anchor.setTo(0.5);

        this.crearTeclas();


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

        guias = juego.add.group();
        guias.enableBody = true;
        juego.physics.enable(guias, Phaser.Physics.ARCADE);
        var fila=170;
        for(var x=0; x<10; x++) { // 6 filas
            var guia = guias.create(fila,230, 'guia');
            fila +=50;
        }
        guias.setAll('anchor.x', 0.5);

        this.creaTeclado();
        this.crearCirculos();


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

    },
    update: function () {
        if (juego.time.events.length===0){
            juego.time.events.add(3000, this.gameOver, this);
        }
        //alert(juego.state.getCurrentState());
        /*if (tecla_do.angle < 0) {
            tecla_do.angle += 1;
        }*/
        //juego.physics.arcade.overlap(guias,circulos_01,this.colisionCirculo_01,null,this); //DETECTAR COLISIONES

        if( (juego.physics.arcade.overlap(guias, circulos_01) && this.numpadUNO.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_01) && tecla_do_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            txtPuntos.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_01,this.colisionCirculo, null, this);
            tecla_do_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_02) && this.numpadDOS.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_02) && tecla_re_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            txtPuntos.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_02,this.colisionCirculo, null, this);
            tecla_re_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_03) && this.numpadTRES.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_03) && tecla_mi_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            txtPuntos.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_03,this.colisionCirculo, null, this);
            tecla_mi_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_04) && this.numpadCUATRO.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_04) && tecla_fa_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            puntos +=1;
            txtPuntos.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_04,this.colisionCirculo, null, this);
            tecla_fa_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_05) && this.numpadCINCO.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_05) && tecla_sol_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            puntos +=1;
            txtPuntos.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_05,this.colisionCirculo, null, this);
            tecla_sol_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_06) && this.numpadSEIS.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_06) && tecla_la_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            puntos +=1;
            txtPuntos.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_06,this.colisionCirculo, null, this);
            tecla_la_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_07) && this.numpadSIETE.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_07) && tecla_si_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            puntos +=1;
            txtPuntos.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_07,this.colisionCirculo, null, this);
            tecla_si_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_08) && this.numpadOCHO.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_08) && tecla_do_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            puntos +=1;
            txtPuntos.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_08,this.colisionCirculo, null, this);
            tecla_do_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_09) && this.numpadNUEVE.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_09) && tecla_re1_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            puntos +=1;
            txtPuntos.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_09,this.colisionCirculo, null, this);
            tecla_re1_click=false;
        }

        if( (juego.physics.arcade.overlap(guias, circulos_10) && this.numpadCERO.isDown) ||
            (juego.physics.arcade.overlap(guias, circulos_10) && tecla_mi1_click === true ) ) { //DETECTAR COLISIONES
            puntos +=1;
            puntos +=1;
            txtPuntos.text = puntos;

            juego.physics.arcade.overlap(guias, circulos_10,this.colisionCirculo, null, this);
            tecla_mi1_click=false;
        }
    },
    test:function (sprite, pointer) {
        //alert(sprite.key);
        switch (sprite.key){
            case 'met_01':
                tecla_do_click=true;
                shake.shake(5, tecla_do);
                nota_do.play();
                break;
            case 'met_02':
                tecla_re_click=true;
                shake.shake(5, tecla_re);
                nota_re.play();
                break;
            case 'met_03':
                tecla_mi_click=true;
                shake.shake(5, tecla_mi);
                nota_mi.play();
                break;
            case 'met_04':
                tecla_fa_click=true;
                shake.shake(5, tecla_fa);
                nota_fa.play();
                break;
            case 'met_05':
                tecla_sol_click=true;
                shake.shake(5, tecla_sol);
                nota_sol.play();
                break;
            case 'met_06':
                tecla_la_click=true;
                shake.shake(5, tecla_la);
                nota_la.play();
                break;
            case 'met_07':
                tecla_si_click=true;
                shake.shake(5, tecla_si);
                nota_si.play();
                break;
            case 'met_08':
                tecla_do1_click=true;
                shake.shake(5, tecla_do1);
                nota_do1.play();
                break;
            case 'met_09':
                tecla_re1_click=true;
                shake.shake(5, tecla_re1);
                nota_re1.play();
                break;
            case 'met_10':
                tecla_mi1_click=true;
                shake.shake(5, tecla_mi1);
                nota_mi1.play();
                break;
        }
    },
    crearTeclas:function(){
        tecla_do = juego.add.sprite(170, 410, "met_01");
        tecla_do.anchor.setTo(0.5);
        tecla_do.enableBody = true;
        juego.physics.enable(tecla_do, Phaser.Physics.ARCADE);
        tecla_do.body.immovable = true;
        tecla_do.inputEnabled = true;
        tecla_do.events.onInputDown.add(this.test, this);

        tecla_re = juego.add.sprite(220, 410, "met_02");
        tecla_re.anchor.setTo(0.5);
        tecla_re.enableBody = true;
        juego.physics.enable(tecla_re, Phaser.Physics.ARCADE);
        tecla_re.body.immovable = true;
        tecla_re.inputEnabled = true;
        tecla_re.events.onInputDown.add(this.test, this);

        tecla_mi = juego.add.sprite(270, 410, "met_03");
        tecla_mi.anchor.setTo(0.5);
        tecla_mi.enableBody = true;
        juego.physics.enable(tecla_mi, Phaser.Physics.ARCADE);
        tecla_mi.body.immovable = true;
        tecla_mi.inputEnabled = true;
        tecla_mi.events.onInputDown.add(this.test, this);

        tecla_fa = juego.add.sprite(320, 410, "met_04");
        tecla_fa.anchor.setTo(0.5);
        tecla_fa.enableBody = true;
        juego.physics.enable(tecla_fa, Phaser.Physics.ARCADE);
        tecla_fa.body.immovable = true;
        tecla_fa.inputEnabled = true;
        tecla_fa.events.onInputDown.add(this.test, this);

        tecla_sol = juego.add.sprite(370, 410, "met_05");
        tecla_sol.anchor.setTo(0.5);
        tecla_sol.enableBody = true;
        juego.physics.enable(tecla_sol, Phaser.Physics.ARCADE);
        tecla_sol.body.immovable = true;
        tecla_sol.inputEnabled = true;
        tecla_sol.events.onInputDown.add(this.test, this);

        tecla_la = juego.add.sprite(420, 410, "met_06");
        tecla_la.anchor.setTo(0.5);
        tecla_la.enableBody = true;
        juego.physics.enable(tecla_la, Phaser.Physics.ARCADE);
        tecla_la.body.immovable = true;
        tecla_la.inputEnabled = true;
        tecla_la.events.onInputDown.add(this.test, this);

        tecla_si = juego.add.sprite(470, 410, "met_07");
        tecla_si.anchor.setTo(0.5);
        tecla_si.enableBody = true;
        juego.physics.enable(tecla_si, Phaser.Physics.ARCADE);
        tecla_si.body.immovable = true;
        tecla_si.inputEnabled = true;
        tecla_si.events.onInputDown.add(this.test, this);

        tecla_do1 = juego.add.sprite(520, 410, "met_08");
        tecla_do1.anchor.setTo(0.5);
        tecla_do1.enableBody = true;
        juego.physics.enable(tecla_do1, Phaser.Physics.ARCADE);
        tecla_do1.body.immovable = true;
        tecla_do1.inputEnabled = true;
        tecla_do1.events.onInputDown.add(this.test, this);

        tecla_re1 = juego.add.sprite(570, 410, "met_09");
        tecla_re1.anchor.setTo(0.5);
        tecla_re1.enableBody = true;
        juego.physics.enable(tecla_re1, Phaser.Physics.ARCADE);
        tecla_re1.body.immovable = true;
        tecla_re1.inputEnabled = true;
        tecla_re1.events.onInputDown.add(this.test, this);

        tecla_mi1 = juego.add.sprite(620, 410, "met_10");
        tecla_mi1.anchor.setTo(0.5);
        tecla_mi1.enableBody = true;
        juego.physics.enable(tecla_mi1, Phaser.Physics.ARCADE);
        tecla_mi1.body.immovable = true;
        tecla_mi1.inputEnabled = true;
        tecla_mi1.events.onInputDown.add(this.test, this);
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
        this.TRES.onDown.add(this.presionaTecla, this)

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

    crearCirculos:function () {
        circulos_00 = juego.add.group();
        circulos_00.enableBody = true;
        juego.physics.enable(circulos_00, Phaser.Physics.ARCADE);
        circulos_00.createMultiple(1, 'circulo_00');
        circulos_00.setAll('anchor.x', 0.5);
        circulos_00.setAll('anchor.y', 1);
        circulos_00.setAll('outOfBoundsKill', true); // Destruir al salir del escenario (limite del juego).
        circulos_00.setAll('checkWorldBounds', true); // Para que este siempre dentro del limite del juego.

        circulos_01 = juego.add.group();
        circulos_01.enableBody = true;
        juego.physics.enable(circulos_01, Phaser.Physics.ARCADE);
        circulos_01.createMultiple(1, 'circulo_01');
        circulos_01.setAll('anchor.x', 0.5);
        circulos_01.setAll('anchor.y', 1);
        circulos_01.setAll('outOfBoundsKill', true); // Destruir al salir del escenario (limite del juego).
        circulos_01.setAll('checkWorldBounds', true); // Para que este siempre dentro del limite del juego.

        circulos_02 = juego.add.group();
        circulos_02.enableBody = true;
        juego.physics.enable(circulos_02, Phaser.Physics.ARCADE);
        circulos_02.createMultiple(1, 'circulo_02');
        circulos_02.setAll('anchor.x', 0.5);
        circulos_02.setAll('anchor.y', 1);
        circulos_02.setAll('outOfBoundsKill', true);
        circulos_02.setAll('checkWorldBounds', true);

        circulos_03 = juego.add.group();
        circulos_03.enableBody = true;
        juego.physics.enable(circulos_03, Phaser.Physics.ARCADE);
        circulos_03.createMultiple(20, 'circulo_03');
        circulos_03.setAll('anchor.x', 0.5);
        circulos_03.setAll('anchor.y', 1);
        circulos_03.setAll('outOfBoundsKill', true);
        circulos_03.setAll('checkWorldBounds', true);

        circulos_04 = juego.add.group();
        circulos_04.enableBody = true;
        juego.physics.enable(circulos_04, Phaser.Physics.ARCADE);
        circulos_04.createMultiple(20, 'circulo_04');
        circulos_04.setAll('anchor.x', 0.5);
        circulos_04.setAll('anchor.y', 1);
        circulos_04.setAll('outOfBoundsKill', true);
        circulos_04.setAll('checkWorldBounds', true);

        circulos_05 = juego.add.group();
        circulos_05.enableBody = true;
        juego.physics.enable(circulos_05, Phaser.Physics.ARCADE);
        circulos_05.createMultiple(20, 'circulo_05');
        circulos_05.setAll('anchor.x', 0.5);
        circulos_05.setAll('anchor.y', 1);
        circulos_05.setAll('outOfBoundsKill', true);
        circulos_05.setAll('checkWorldBounds', true);
    },
    crearCirculo_00: function () {
        var circulo = circulos_00.getFirstDead();
        if (circulo) {
            circulo.reset(100, 0);
            circulo.body.velocity.y = 120;
            circulo.checkWorldBounds=true;
            circulo.outOfBoundsKill=true;
        }
    },
    crearCirculo_01: function () {
        var circulo = circulos_01.getFirstDead();
        if (circulo) {
            circulo.reset(170, 0);
            circulo.body.velocity.y = 100;
            circulo.checkWorldBounds=true;
            circulo.outOfBoundsKill=true;
        }
    },
    crearCirculo_02: function () {
        var circulo = circulos_02.getFirstDead();
        if (circulo) {
            circulo.reset(220, 0);
            circulo.body.velocity.y = 100;
            circulo.checkWorldBounds=true;
            circulo.outOfBoundsKill=true;
        }
    },
    crearCirculo_03: function () {
        var circulo = circulos_03.getFirstDead();
        if (circulo) {
            circulo.reset(270, 0);
            circulo.body.velocity.y = 100;
            circulo.checkWorldBounds=true;
            circulo.outOfBoundsKill=true;
        }
    },
    crearCirculo_04: function () {
        var circulo = circulos_04.getFirstDead();
        if (circulo) {
            circulo.reset(320, 0);
            circulo.body.velocity.y = 100;
            circulo.checkWorldBounds=true;
            circulo.outOfBoundsKill=true;
        }
    },
    crearCirculo_05: function () {
        var circulo = circulos_05.getFirstDead();
        if (circulo) {
            circulo.reset(370, 0);
            circulo.body.velocity.y = 100;
            circulo.checkWorldBounds=true;
            circulo.outOfBoundsKill=true;
        }
    },
    crearCirculo_06: function () {
        var circulo = circulos_06.getFirstDead();
        if (circulo) {
            circulo.reset(420, 0);
            circulo.body.velocity.y = 100;
            circulo.checkWorldBounds=true;
            circulo.outOfBoundsKill=true;
        }
    },
    crearCirculo_07: function () {
        var circulo = circulos_07.getFirstDead();
        if (circulo) {
            circulo.reset(470, 0);
            circulo.body.velocity.y = 100;
            circulo.checkWorldBounds=true;
            circulo.outOfBoundsKill=true;
        }
    },
    crearCirculo_08: function () {
        var circulo = circulos_08.getFirstDead();
        if (circulo) {
            circulo.reset(520, 0);
            circulo.body.velocity.y = 100;
            circulo.checkWorldBounds=true;
            circulo.outOfBoundsKill=true;
        }
    },
    crearCirculo_09: function () {
        var circulo = circulos_09.getFirstDead();
        if (circulo) {
            circulo.reset(570, 0);
            circulo.body.velocity.y = 100;
            circulo.checkWorldBounds=true;
            circulo.outOfBoundsKill=true;
        }
    },
    crearCirculo_10: function () {
        var circulo = circulos_10.getFirstDead();
        if (circulo) {
            circulo.reset(620, 0);
            circulo.body.velocity.y = 100;
            circulo.checkWorldBounds=true;
            circulo.outOfBoundsKill=true;
        }
    },
    presionaTecla: function (key) {
        switch (key.keyCode) {
            case Phaser.Keyboard.ZERO:
            case Phaser.Keyboard.NUMPAD_0:
                shake.shake(5, tecla_mi1);
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
                shake.shake(5, tecla_re);
                nota_re.play();
                break;
            case Phaser.Keyboard.THREE:
            case Phaser.Keyboard.NUMPAD_3:
                shake.shake(5, tecla_mi);
                nota_mi.play();
                break;
            case Phaser.Keyboard.FOUR:
            case Phaser.Keyboard.NUMPAD_4:
                shake.shake(5, tecla_fa);
                nota_fa.play();
                break;
            case Phaser.Keyboard.FIVE:
            case Phaser.Keyboard.NUMPAD_5:
                shake.shake(5, tecla_sol);
                nota_sol.play();
                break;
            case Phaser.Keyboard.SIX:
            case Phaser.Keyboard.NUMPAD_6:
                shake.shake(5, tecla_la);
                nota_la.play();
                break;
            case Phaser.Keyboard.SEVEN:
            case Phaser.Keyboard.NUMPAD_7:
                shake.shake(5, tecla_si);
                nota_si.play();
                break;
            case Phaser.Keyboard.EIGHT:
            case Phaser.Keyboard.NUMPAD_8:
                shake.shake(5, tecla_do1);
                nota_do1.play();
                break;
            case Phaser.Keyboard.NINE:
            case Phaser.Keyboard.NUMPAD_9:
                shake.shake(5, tecla_re1);
                nota_re1.play();
                break;
        }
    },
    colisionCirculo: function (guia,circulo) {
        //circulo.destroy();
        circulo.kill();
    },
    gameOver: function() {
        //pass it the score as a parameter
        juego.state.start('Game_Over');
    },
    render: function () {

        //juego.debug.bodyInfo(tecla_do, 16, 24);



        juego.debug.text("Elapsed seconds: " + juego.time.totalElapsedSeconds(), 32, 16);

        juego.debug.text("Time until event: " + juego.time.events.duration.toFixed(0), 32, 32);
        juego.debug.text("Next tick: " + juego.time.events.next.toFixed(0), 32, 64);
        juego.debug.text("Queued events: " + juego.time.events.length, 32, 96);


        //juego.debug.bodyInfo(tecla_do, 16, 24);
        //juego.debug.text('One item will be resurrected every second', 32, 32);
        //juego.debug.text('Living: ' + circulos_01.countLiving() + '   Dead: ' + circulos_01.countDead(), 32, 64);
    }
};