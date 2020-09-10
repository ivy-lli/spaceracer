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

        this.load.image('rock', 'assets/Aestroids/aestroid_brown.png');

        this.load.audio('space-background', 'assets/space-background.ogg');
        this.load.audio('ship-rocket', 'assets/rocket.mp3');
    }
      
    create() {
        let background = new Background(this);
        let ship = new Ship(this);
        let controller = new Controller(this, ship);

        this.rocks = this.physics.add.group();
        this.createRock();
    }
    
    update() {
        
    }
    
    createRock() {
        var x = Phaser.Math.Between(400, 800);
        var rock : Phaser.Physics.Arcade.Sprite = this.rocks.create(x, 16, 'rock');
        rock.setScale(0.1);
        rock.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }

}
