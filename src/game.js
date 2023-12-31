import "phaser";
import config from "./config/config";
import MainScene from "./scenes/main_scene";

class Game extends Phaser.Game{
  constructor(){
    super(config);

    this.scene.add("MainScene", MainScene);
    this.scene.start("MainScene")
  }
}

window.onload = function () {
  window.game = new Game();
}