import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("main_scene");
  }

  preload() {
    this.load.image("factorybg", "/assets/bg/white.png")
  }

  create() {
    const scene = this;

    this.add.image(0,0, "factorybg").setOrigin(0,0);

    this.socket = io();
  }

  update() {

  }
}