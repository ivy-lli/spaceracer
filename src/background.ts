export class Background
{
    constructor(scene : Phaser.Scene)
    {
        scene.add.image(400, 300, 'space');
        scene.sound.play('space-background', { volume: 0.5, loop: true });
    }
}