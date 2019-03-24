var juego=new Phaser.Game(750,450,Phaser.CANVAS,'bloque_juego');

/*juego.global = {
    titulo : ""
};*/

juego.state.add('BootState', BootState);
juego.state.add('PreloadState', PreloadState);
juego.state.add('Menu', Menu);
juego.state.add('Juego', Juego);
juego.state.add('Game_Over', Game_Over);
juego.state.add('Play', Play);

juego.state.start('BootState');