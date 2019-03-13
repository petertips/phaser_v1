var Play;
var bg;
var tecla_do,tecla_re,tecla_mi,tecla_fa,tecla_sol,tecla_la,tecla_si,tecla_do1,tecla_re1,tecla_mi1;

var nota_do,nota_re,nota_mi,nota_fa,nota_sol,nota_la,nota_si,nota_do1,nota_re1,nota_mi1;
var shake;
var circulos_00,circulos_01,circulos_02,circulos_03,circulos_04,circulos_05,circulos_06,circulos_07,circulos_08,circulos_09,circulos_10;
var guias,lineas;

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
/*var tiempos=[];
for (var i=0;cancion.length;i++){
    tiempos[i]=i+1;
}*/

var ms=600;
var velicidad=120;

var emitter;

Play = {
    preload: function () {
        juego.stage.backgroundColor = 'rgba(68, 136, 170, 0.5)';
    },
    create: function () {
        juego.physics.startSystem(Phaser.Physics.ARCADE);

        bg = juego.add.sprite(390, 410, 'base');
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
        var fila=170;
        var guia,linea;
        for(var x=0; x<10; x++) { // 6 filas
            guia=guias.create(fila,230, 'guia');
            guia.name = 'guia' + (x+1);


            linea=lineas.create(fila,275, 'linea');
            linea.name = 'linea' + (x+1);

            fila +=50;
        }
        guias.setAll('anchor.x', 0.5);
        lineas.setAll('anchor.x', 0.5);

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
    },
    cargarTeclasMetalofono: function(){
        tecla_do = juego.add.sprite(170, 410, "met_01");
        this.setTecla(tecla_do);

        tecla_re = juego.add.sprite(220, 410, "met_02");
        this.setTecla(tecla_re);

        tecla_mi = juego.add.sprite(270, 410, "met_03");
        this.setTecla(tecla_mi);

        tecla_fa = juego.add.sprite(320, 410, "met_04");
        this.setTecla(tecla_fa);

        tecla_sol = juego.add.sprite(370, 410, "met_05");
        this.setTecla(tecla_sol);

        tecla_la = juego.add.sprite(420, 410, "met_06");
        this.setTecla(tecla_la);

        tecla_si = juego.add.sprite(470, 410, "met_07");
        this.setTecla(tecla_si);

        tecla_do1 = juego.add.sprite(520, 410, "met_08");
        this.setTecla(tecla_do1);

        tecla_re1 = juego.add.sprite(570, 410, "met_09");
        this.setTecla(tecla_re1);

        tecla_mi1 = juego.add.sprite(620, 410, "met_10");
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
            circulo.reset(100, 0);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_01: function () {
        var circulo = circulos_01.getFirstDead();
        if (circulo) {
            circulo.reset(170, 0);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_02: function () {
        var circulo = circulos_02.getFirstDead();
        if (circulo) {
            circulo.reset(220, 0);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_03: function () {
        var circulo = circulos_03.getFirstDead();
        if (circulo) {
            circulo.reset(270, 0);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_04: function () {
        var circulo = circulos_04.getFirstDead();
        if (circulo) {
            circulo.reset(320, 0);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_05: function () {
        var circulo = circulos_05.getFirstDead();
        if (circulo) {
            circulo.reset(370, 0);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_06: function () {
        var circulo = circulos_06.getFirstDead();
        if (circulo) {
            circulo.reset(420, 0);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_07: function () {
        var circulo = circulos_07.getFirstDead();
        if (circulo) {
            circulo.reset(470, 0);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_08: function () {
        var circulo = circulos_08.getFirstDead();
        if (circulo) {
            circulo.reset(520, 0);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_09: function () {
        var circulo = circulos_09.getFirstDead();
        if (circulo) {
            circulo.reset(570, 0);
            this.setCirculoMovimiento(circulo);
        }
    },
    crearCirculo_10: function () {
        var circulo = circulos_10.getFirstDead();
        if (circulo) {
            circulo.reset(620, 0);
            this.setCirculoMovimiento(circulo);
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

        juego.debug.text("Time until event: " + juego.time.events.duration.toFixed(0), 32, 32);
        //juego.debug.text("Next tick: " + juego.time.events.next.toFixed(0), 32, 64);
        //juego.debug.text("Queued events: " + juego.time.events.length, 32, 96);
    }
};