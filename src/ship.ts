export class Ship extends Phaser.GameObjects.Container
{
    public readonly player : Phaser.Physics.Arcade.Sprite;
    private rocketSound : Phaser.Sound.BaseSound;

    constructor(scene : Phaser.Scene)
    {
        super(scene);
        this.rocketSound = this.scene.sound.add('ship-rocket', { volume: 1, loop: true });
        
        scene.anims.create({
            key: 'left',
            frames: [{ key: 'ship-left', frame: 0 }],
            frameRate: 1,
            repeat: 1
        });

        scene.anims.create({
            key: 'right',
            frames: [{ key: 'ship-right', frame: 0 }],
            frameRate: 1,
            repeat: 1
        });

        scene.anims.create({
            key: 'speed',
            frames: [{ key: 'ship-speed', frame: 0 }],
            frameRate: 1,
            repeat: 1
        });

        scene.anims.create({
            key: 'slow',
            frames: [{ key: 'ship-slow', frame: 0 }],
            frameRate: 1,
            repeat: 1
        });

        scene.anims.create({
            key: 'normal',
            frames: [{ key: 'ship-normal', frame: 0 }],
            frameRate: 1,
            repeat: 1
        });

        this.player = scene.physics.add.sprite(400, 500, 'ship-normal').setScale(0.15);
        this.player.setCollideWorldBounds(true);
    }

    engineOn(direction)
    {
        this.player.anims.play(direction, true);
        this.rocketSound.play();
        let speed : number = 300;
        if (direction === 'speed') { 
            this.player.setVelocityY(-speed);
            //this.player.setVelocityX(0);
        } 
        if (direction === 'slow') { 
            //this.player.setVelocityX(0);
            this.player.setVelocityY(speed);
        } 
        if (direction === 'left') {
            this.player.setVelocityX(-speed);
            //this.player.setVelocityY(0);
        } 
        if (direction === 'right') {
            this.player.setVelocityX(speed);
            //this.player.setVelocityY(0);
        } 
    }

    engineOff()
    {
        this.player.setVelocityX(0);
        this.player.setVelocityY(0);
        this.player.anims.play('normal', true);
        this.rocketSound.stop();
    }

}