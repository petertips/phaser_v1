var Menu = {
    preload: function(){
        //cargando = juego.add.tileSprite(0, 0, 750, 450 , 'cargando_bg');
        juego.stage.backgroundColor = '#FFF';
    },
    create: function(){

        var boton = this.add.button((juego.width/2) - 150, juego.height/2, 'play', this.iniciarJuego, this);
        boton.anchor.setTo(0.5);

        //var botonPlay = this.add.button((juego.width/2) + 150, juego.height/2, 'demo', this.iniciarPlay, this);
        //botonPlay.anchor.setTo(0.5);

        //var txtIniciar = juego.add.text(juego.width/2, juego.height/2 -85, "Iniciar juego Metalofono", {font: "bold 24px sans-serif", fill:"black", align:"center"});
        //txtIniciar.anchor.setTo(0.5);
        //var txtTitulo = juego.add.text(juego.width/2, juego.height/2 -125, " ", {font: "bold 30px sans-serif", fill:"black", align:"center"});
        //txtTitulo.anchor.setTo(0.5);
    },
    iniciarJuego: function(){
        this.state.start('Juego');
    },
    iniciarPlay:function () {
        this.state.start('Play');
    }
};