import { Ship } from "./ship"

export class Controller
{
    constructor(scene : Phaser.Scene, ship : Ship)
    {
        let leftKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        let rightKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        let upKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        let downKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)

        leftKey.on('down', () => ship.engineOn('left'))
        leftKey.on('up', () => ship.engineOff())
        rightKey.on('down', () => ship.engineOn('right'))
        rightKey.on('up', () => ship.engineOff())
        upKey.on('down', () => ship.engineOn('speed'))
        upKey.on('up', () => ship.engineOff())
        downKey.on('down', () => ship.engineOn('slow'))
        downKey.on('up', () => ship.engineOff())
    }
}