var Play;
var bg;
var tecla_do,tecla_re,tecla_mi,tecla_fa,tecla_sol,tecla_la,tecla_si,tecla_do1,tecla_re1,tecla_mi1;

var nota_do,nota_re,nota_mi,nota_fa,nota_sol,nota_la,nota_si,nota_do1,nota_re1,nota_mi1;
var shake;
var circulos_00,circulos_01,circulos_02,circulos_03,circulos_04,circulos_05,circulos_06,circulos_07,circulos_08,circulos_09,circulos_10;
var guias,lineas;

var fichas;

Play = {
    preload: function () {
        //juego.stage.backgroundColor = '#FFF';
        cargando = juego.add.tileSprite(0, 0, 750, 450 , 'cargando_bg');
    },
    create: function () {
        juego.physics.startSystem(Phaser.Physics.ARCADE);

        tapa_atras = juego.add.sprite(389, 262, 'tapa_atras');
        tapa_atras.anchor.setTo(0.5);

        bg = juego.add.sprite(390, 180, 'base');
        bg.anchor.setTo(0.5);

        this.cargarNotas();
        this.cargarTeclasMetalofono();
        this.cargarCirculos();

        guias = juego.add.group();
        guias.enableBody = true;
        juego.physics.enable(guias, Phaser.Physics.ARCADE);
        lineas = juego.add.group();
        lineas.enableBody = true;
        juego.physics.enable(lineas, Phaser.Physics.ARCADE);
        fichas = juego.add.group();
        lineasNegras = juego.add.group();
        var fila=125;
        var guia,linea;
        for(var x=1; x<11; x++) { // 6 filas
            guia=guias.create(fila,270, 'guia' + (x));
            guia.name = 'guia' + (x);

            lineasNegras.create(fila,125, 'lineanegra');

            linea=lineas.create(fila,313, 'linea');
            linea.name = 'linea' + (x);

            fichas.create(fila,113, 'ficha');

            fila +=58;
        }
        guias.setAll('anchor.x', 0.5);
        lineas.setAll('anchor.x', 0.5);
        lineasNegras.setAll('anchor.x', 0.5);
        fichas.setAll('anchor.x', 0.5);

        arrCancion=juego.cancion;
        arrTiempos=juego.tiempos;

        for (var x=0;x<arrCancion.length;x++){
            switch (arrCancion[x]){
                case 0:
                    juego.time.events.add(ms*arrTiempos[x], this.crearCirculo_00, this);
                    break;
                case 1:
                    juego.time.events.add(ms*arrTiempos[x], this.crearCirculo_01, this);
                    break;
                case 2:
                    juego.time.events.add(ms*arrTiempos[x], this.crearCirculo_02, this);
                    break;
                case 3:
                    juego.time.events.add(ms*arrTiempos[x], this.crearCirculo_03, this);
                    break;
                case 4:
                    juego.time.events.add(ms*arrTiempos[x], this.crearCirculo_04, this);
                    break;
                case 5:
                    juego.time.events.add(ms*arrTiempos[x], this.crearCirculo_05, this);
                    break;
                case 6:
                    juego.time.events.add(ms*arrTiempos[x], this.crearCirculo_06, this);
                    break;
                case 7:
                    juego.time.events.add(ms*arrTiempos[x], this.crearCirculo_07, this);
                    break;
                case 8:
                    juego.time.events.add(ms*arrTiempos[x], this.crearCirculo_08, this);
                    break;
                case 9:
                    juego.time.events.add(ms*arrTiempos[x], this.crearCirculo_09, this);
                    break;
                case 10:
                    juego.time.events.add(ms*arrTiempos[x], this.crearCirculo_10, this);
                    break;
            }
        }
        juego.plugins.add(shake); // VIBRACION

        juego.world.bringToTop(bg);
        juego.world.bringToTop(lineas);
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

        var style = { font: '30px Changa One', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 500 };
        txtTitulo = juego.add.text(juego.world.width/2,62,  juego.titulo, style);
        txtTitulo.anchor.set(0.5);

    },
    update: function () {
        if (juego.time.events.length===0){
            juego.time.events.add(3000, this.finPlay, this);
        }

        juego.physics.arcade.overlap(lineas, circulos_01,this.colisionCirculo, null, this);
        juego.physics.arcade.overlap(lineas, circulos_02,this.colisionCirculo, null, this);
        juego.physics.arcade.overlap(lineas, circulos_03,this.colisionCirculo, null, this);
        juego.physics.arcade.overlap(lineas, circulos_04,this.colisionCirculo, null, this);
        juego.physics.arcade.overlap(lineas, circulos_05,this.colisionCirculo, null, this);
        juego.physics.arcade.overlap(lineas, circulos_06,this.colisionCirculo, null, this);
        juego.physics.arcade.overlap(lineas, circulos_07,this.colisionCirculo, null, this);
        juego.physics.arcade.overlap(lineas, circulos_08,this.colisionCirculo, null, this);
        juego.physics.arcade.overlap(lineas, circulos_09,this.colisionCirculo, null, this);
        juego.physics.arcade.overlap(lineas, circulos_10,this.colisionCirculo, null, this);
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
    setTecla: function(tacla){
        tacla.anchor.setTo(0.5);
        tacla.enableBody = true;
        juego.physics.enable(tacla, Phaser.Physics.ARCADE);
        tacla.body.immovable = true;
        tacla.allowGravity = false;
        tacla.draggable = false;
    },
    cargarTeclasMetalofono: function(){
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
    setCirculo:function(circulo,imagen){
        circulo.enableBody = true;
        juego.physics.enable(circulo, Phaser.Physics.ARCADE);
        circulo.createMultiple(20, imagen);
        circulo.setAll('anchor.x', 0.5);
        circulo.setAll('anchor.y', 1);
        circulo.setAll('outOfBoundsKill', true); // Destruir al salir del escenario (limite del juego).
        circulo.setAll('checkWorldBounds', true); // Para que este siempre dentro del limite del juego.
    },
    cargarCirculos: function () {
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
    crearCirculo_01: function () {
        var circulo = circulos_01.getFirstDead();
        if (circulo) {
            circulo.reset(125, 137);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_02: function () {
        var circulo = circulos_02.getFirstDead();
        if (circulo) {
            circulo.reset(183, 137);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_03: function () {
        var circulo = circulos_03.getFirstDead();
        if (circulo) {
            circulo.reset(241, 137);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_04: function () {
        var circulo = circulos_04.getFirstDead();
        if (circulo) {
            circulo.reset(299, 137);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_05: function () {
        var circulo = circulos_05.getFirstDead();
        if (circulo) {
            circulo.reset(357, 137);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_06: function () {
        var circulo = circulos_06.getFirstDead();
        if (circulo) {
            circulo.reset(415, 137);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_07: function () {
        var circulo = circulos_07.getFirstDead();
        if (circulo) {
            circulo.reset(473, 137);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_08: function () {
        var circulo = circulos_08.getFirstDead();
        if (circulo) {
            circulo.reset(531, 137);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_09: function () {
        var circulo = circulos_09.getFirstDead();
        if (circulo) {
            circulo.reset(589, 137);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_10: function () {
        var circulo = circulos_10.getFirstDead();
        if (circulo) {
            circulo.reset(647, 137);
            this.setCirculoMovimiento(circulo);
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
    colisionCirculo: function (linea,circulo) {
        //alert(guia.name);
        switch (linea.name) {
            case 'linea1':
                this.tocarTecla(1);
                break;
            case 'linea2':
                this.tocarTecla(2);
                break;
            case 'linea3':
                this.tocarTecla(3);
                break;
            case 'linea4':
                this.tocarTecla(4);
                break;
            case 'linea5':
                this.tocarTecla(5);
                break;
            case 'linea6':
                this.tocarTecla(6);
                break;
            case 'linea7':
                this.tocarTecla(5);
                break;
            case 'linea8':
                this.tocarTecla(8);
                break;
            case 'linea9':
                this.tocarTecla(9);
                break;
            case 'linea10':
                this.tocarTecla(10);
                break;
        }
        circulo.kill();
    },
    finPlay: function() {
        juego.state.start('Menu');
    },
    render: function () {
        //juego.debug.text("Elapsed seconds: " + juego.time.totalElapsedSeconds(), 32, 16);

        //juego.debug.text("Time until event: " + juego.time.events.duration.toFixed(0), 32, 32);
        //juego.debug.text("Next tick: " + juego.time.events.next.toFixed(0), 32, 64);
        //juego.debug.text("Queued events: " + juego.time.events.length, 32, 96);
    }
};