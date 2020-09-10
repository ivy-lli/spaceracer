import 'phaser';
import { Background } from './background';
import { Ship } from './ship';
import { Controller } from './control';

export class Scene extends Phaser.Scene
{
    private rocks : Phaser.Physics.Arcade.Group;

    constructor() {
        super({
          key: "GameScene"
        });
    }
    
    preload() {
        this.load.setBaseURL('http://localhost:10001/');
        this.load.image('space', 'assets/space.jpg');
        this.load.image('ship-normal', 'assets/Spaceship/7.png');
        this.load.image('ship-speed', 'assets/Spaceship/8.png');
        this.load.image('ship-left', 'assets/Spaceship/4.png');
        this.load.image('ship-right', 'assets/Spaceship/3.png');
        this.load.image('ship-slow', 'assets/Spaceship/6.png');

        this.load.image('rock-1', 'assets/Aestroids/aestroid_brown.png');
        this.load.image('rock-2', 'assets/Aestroids/aestroid_dark.png');
        this.load.image('rock-3', 'assets/Aestroids/aestroid_gay_2.png');
        this.load.image('rock-4', 'assets/Aestroids/aestroid_gray.png');

        this.load.audio('space-background', 'assets/space-background.ogg');
        this.load.audio('ship-rocket', 'assets/rocket.mp3');
    }
      
    create() {
        let background = new Background(this);
        let ship = new Ship(this);
        let controller = new Controller(this, ship);

        this.rocks = this.physics.add.group();
        this.createRock();
        this.createRock();
        this.createRock();
        this.createRock();
        this.createRock();
    }
    
    update() {
        let that = this;
        this.rocks.children.iterate(function (child : Phaser.Physics.Arcade.Sprite) {
            let pos = child.getCenter();
            if (pos.x < 0  || pos.x >= 800 || pos.y >= 600) {
                child.destroy();
                that.createRock();
            }
        });
    }
    
    createRock() {
        let x = Phaser.Math.Between(100, 700);
        let rockImg = Phaser.Math.Between(1, 4);
        let rockScale = Phaser.Math.Between(5, 30);
        var rock : Phaser.Physics.Arcade.Sprite = this.rocks.create(x, 16, 'rock-' + rockImg);
        rock.setScale(rockScale / 100);
        rock.setVelocity(Phaser.Math.Between(-100, 100), Phaser.Math.Between(80, 150));
    }

}
