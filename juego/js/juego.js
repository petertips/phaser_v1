var Juego;
var mirando="arriba";
var peter;
var cursores;
Juego = {
    preload: function () {
        juego.stage.backgroundColor = '#FFF';

    },
    create: function () {
        cursores=juego.input.keyboard.createCursorKeys();

        juego.physics.startSystem(Phaser.Physics.ARCADE);

        peter = juego.add.sprite(juego.width/2,juego.height/2,'peter');  //nuevo sprite
        peter.anchor.setTo(0.5);
        //peter.animations.add('arriba', [0,1,2,3,4,5,6,7,8],10, true); //Animacion de la persona
        peter.animations.add('derecha', [0,1,2,3,4,5,6],10, true); //Animacion de la persona
        peter.animations.add('izquierda', [6,5,4,3,2,1],10, true); //Animacion de la persona
        //peter.animations.add('abajo', [18,19,20,21,22,23,24,25,26],10, true); //Animacion de la persona

        juego.physics.arcade.enable(peter); // fronteras para la persona
        peter.body.collideWorldBounds=true;
    },
    pauseJuego:function(){
        btnpause.visible=false;
        juego.paused = true;
        btnplay.visible=true;
    },
    playJuego:function(){
        if (juego.paused) {
            btnpause.visible=true;
            juego.paused = false;
            btnplay.visible=false;
        }
    },
    update: function () {
        if (cursores.right.isDown){
            peter.position.x += 2;
            peter.animations.play('derecha');
            //flappy.position.x += 1;

            /* DETENER ANIMACION */
            if (mirando != "derecha"){
                mirando="derecha";
            }
        }
        else if (cursores.left.isDown){
            peter.position.x -= 2;
            peter.animations.play('izquierda');
            //flappy.position.x -= 1;

            /* DETENER ANIMACION */
            if (mirando != "izquierda"){
                mirando="izquierda";
            }
        }
        else{
            /* DETENER ANIMACION */
            if (mirando != "espera"){
                peter.animations.stop();
            }
            mirando="espera";
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
        tacla.input.useHandCursor = true;
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

            //bueno = juego.add.emitter(125, 115, 10);
            //this.efectoCirculo(bueno)
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
                //shake.shake(5, tecla_do);
                nota_do.play();
                break;
            case 2:
                //shake.shake(5, tecla_re);
                nota_re.play();
                break;
            case 3:
                //shake.shake(5, tecla_mi);
                nota_mi.play();
                break;
            case 4:
                //shake.shake(5, tecla_fa);
                nota_fa.play();
                break;
            case 5:
                //shake.shake(5, tecla_sol);
                nota_sol.play();
                break;
            case 6:
                //shake.shake(5, tecla_la);
                nota_la.play();
                break;
            case 7:
                //shake.shake(5, tecla_si);
                nota_si.play();
                break;
            case 8:
                //shake.shake(5, tecla_do1);
                nota_do1.play();
                break;
            case 9:
                //shake.shake(5, tecla_re1);
                nota_re1.play();
                break;
            case 10:
                //shake.shake(5, tecla_mi1);
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