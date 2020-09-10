import 'phaser';
import { Scene } from './scene';

export default class Game extends Phaser.Game
{
    constructor() {
        super({
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 }
                }
            },
            scene: new Scene()
        });
    }
}

const game = new Game();
