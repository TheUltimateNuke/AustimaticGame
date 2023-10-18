export default {
    type: Phaser.AUTO,
    render:{
      pixelArt: true
    },
    parent: 'game_div',
    width: 800,
    height: 600,
    scale: {
      parent: 'game_div',
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0 }
      }
    },

    dom: {
      createContainer: true,
    },
    scene: []
};