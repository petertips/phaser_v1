var Game_Over = {

    preload: function(){
        //juego.stage.backgroundColor = 'rgba(83, 255, 0, 0.5)';
        //juego.load.image('boton', 'img/btn.png');
        cargando = juego.add.tileSprite(0, 0, 750, 450 , 'cargando_bg');
    },

    create: function(){
        var txtPuntosEtiqueta = juego.add.text(juego.width/2 -43, juego.height/2 +50, "Puntos: ", {font: "60px Changa One", fill:"#e80000", align:"center"});
        txtPuntosEtiqueta.anchor.setTo(0.5);
        if(puntos == -1)
            puntos = 0;
        var txtPuntosNumero = juego.add.text(juego.width/2 +125, juego.height/2 +50, puntos.toString(), {font: "60px Changa One", fill:"#e80000", align:"center"});
        txtPuntosNumero.anchor.setTo(0.5);

        logo = juego.add.sprite(520, juego.world.height/2-80, 'cito');
        logo.anchor.set(0.5);
        cargando_txt =  juego.add.sprite(290,juego.world.height/2-80, 'juego_terminado');
        cargando_txt.anchor.set(0.5);

        var boton = this.add.button(juego.width/2, juego.height/2+150, 'volver', this.iniciarJuego, this);
        boton.anchor.setTo(0.5);
    },

    iniciarJuego: function(){
        this.state.start('Juego');
    }

};