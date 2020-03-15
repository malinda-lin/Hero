const config = {
  type: Phaser.AUTO,
  width: 562,
  height: 420,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  // need to make and add LoadingScene & EndScene
  scene: [LoadingScene, GameScene]
  // plugins: ['BasePlugIn'],
  // map: {
  //   base: 'base'
  // }
};

const game = new Phaser.Game(config);
