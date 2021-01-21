while (true) {
    console.log("sound_level:" + input.soundLevel() + "light_level :" + input.lightLevel())
    if (input.soundLevel() <= 69 && input.lightLevel() <= 5) {
        music.setVolume(100)
        music.baDing.playUntilDone()
        light.setAll(color.rgb(0, 0, 255))
        pause(1000)
        light.clear()
        pause(1000)
    } else if (input.soundLevel()) {
        music.stopAllSounds()
        light.clear()
    }
    
}
