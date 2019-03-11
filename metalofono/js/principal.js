var juego=new Phaser.Game(800,600,Phaser.CANVAS,'bloque_juego');

juego.state.add('Menu', Menu);
juego.state.add('Juego', Juego);
//juego.state.add('Game_Over',Game_over);

juego.state.start('Menu');